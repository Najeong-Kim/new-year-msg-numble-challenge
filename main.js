import { getData } from "./util.js";
import DetailPage from "./DetailPage.js"

const renderButton = () => {
  const main = document.getElementById("main")

  const button = document.createElement("button")
  button.innerText = "새 글 작성하기"
  button.id = "main-post-button"

  button.addEventListener("click", () => {
    console.log('버튼 클릭')
  })

  main.appendChild(button)
}

const renderMainList = async () => {
  console.log('mainlist')
  const main = document.getElementById("main")

  const ul = document.createElement("ul")
  ul.id = "main-posts"

  const data = await getData("posts")
  const posts = data.data.posts

  posts.forEach((post) => {
    const li = document.createElement("li")
    li.classList.add("main-post")
    li.dataset.postId = post.postId

    li.addEventListener("click", (e) => {
      const postId = e.currentTarget.dataset.postId
      DetailPage(postId)
    })

    const left = document.createElement("div")
    left.classList.add("left")

    const img = document.createElement("img")
    img.src = post.image
    img.classList.add("main-post-img")

    left.appendChild(img)
    li.appendChild(left)

    const right = document.createElement("div")
    right.classList.add("main-post-right")

    const title = document.createElement("h1")
    title.innerText = post.title
    title.classList.add("main-post-title")

    const content = document.createElement("p")
    content.innerText = post.content
    content.classList.add("main-post-content")

    right.appendChild(title)
    right.appendChild(content)
    li.appendChild(right)
    
    ul.appendChild(li)
  })

  main.appendChild(ul)
}


const MainPage = () => {
  const main = document.getElementById("main")
  main.innerHTML = ""

  const back = document.getElementById("back")
  back.style.display = "none"

  renderButton()
  renderMainList()
}

MainPage()

const back = document.getElementById("back")
back.addEventListener("click", () => {
  MainPage()
})

export default MainPage
