const baseURL = "http://43.201.103.199/"

export const getData = async (url) => {
  try {
    const response = await fetch(baseURL + url)
    const data = response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
