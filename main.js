import { getData } from "./util.js";

const content = document.getElementById("content")

const renderButton = () => {
  const button = document.createElement("button")
  button.innerHTML = "새 글 작성하기"
  button.id = "main-post-button"

  button.addEventListener("click", () => {
    console.log('버튼 클릭')
  })

  content.appendChild(button)
}

const renderMainList = async () => {
  const ul = document.createElement("ul")
  ul.id = "main-posts"

  const data = await getData("posts")
  const posts = data.data.posts

  posts.forEach((post) => {
    const li = document.createElement("li")
    li.classList.add("main-post")

    li.addEventListener("click", () => {
      console.log('리스트 클릭')
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
    title.innerHTML = post.title
    title.classList.add("main-post-title")

    const content = document.createElement("p")
    content.innerHTML = post.content
    content.classList.add("main-post-content")

    right.appendChild(title)
    right.appendChild(content)
    li.appendChild(right)
    
    ul.appendChild(li)
  })

  content.appendChild(ul)
}


const MainPage = () => {
  renderButton()
  renderMainList()
}

MainPage()
