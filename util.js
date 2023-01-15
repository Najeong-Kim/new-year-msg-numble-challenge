const baseURL = "http://43.201.103.199/"

export const getData = async (url) => {
  const response = await fetch(baseURL + url)
  const data = response.json()
  return data
}
