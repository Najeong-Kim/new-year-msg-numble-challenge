import { getData } from "./util.js";
import MainPage from "./main.js"

const renderData = async (postId) => {
  const response = await getData(`post/${postId}`)
  return response.data
}

const DetailPage = async (postId) => {
  const { post, comments } = await renderData(postId)
  console.log(post, comments)

  const main = document.getElementById("main")
  main.innerHTML = ""

  const back = document.getElementById("back")
  back.style.display = "block"

  const detailContainer = document.createElement("div")
  detailContainer.classList.add("detail-post-container")

  const img = document.createElement("img")
  img.src = post.image
  img.classList.add("detail-post-img")

  const title = document.createElement("h2")
  title.innerText = post.title
  title.classList.add("detail-post-title")

  const date = document.createElement("p")
  date.innerText = post.createdAt.slice(0, 10)
  date.classList.add("detail-post-date")

  const content = document.createElement("div")
  content.innerText = post.content
  content.classList.add("detail-post-content")

  main.appendChild(img)
  detailContainer.appendChild(title)
  detailContainer.appendChild(date)
  detailContainer.appendChild(content)
  main.appendChild(detailContainer)

  const divider = document.createElement("div");
  divider.classList.add("detail-divider")
  main.appendChild(divider)

  const commentList = document.createElement("div")
  commentList.classList.add("detail-comment-list")

  comments.forEach((comment) => {
    const text = document.createElement("div")
    text.innerText = comment.content

    commentList.appendChild(text)
  })
  
  main.appendChild(commentList)
}

export default DetailPage;