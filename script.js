const api_key = "GbfpLgNhC1yHInN9SdwBQbLzcPgxfcmwaizWcx1m"

const fetchUrl = async (url) => {
  const data = await fetch(url)
  return data.json()
}

const apodComponent = ({ title, url, date, explanation }) => {
  // const title = astrologyPictureOfTheDay.title
  // const url = astrologyPictureOfTheDay.url

  // const { title, url, date } = astrologyPictureOfTheDay

  console.log(title)
  console.log(url)
  console.log(date)
  console.log(explanation)
}

async function init() {
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
  console.log(data)

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].title)
    apodComponent(data[i])
  }
}

init()