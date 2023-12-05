import fetch from 'node-fetch';

async function extract(url) {
  
  // Create an async request using fetch
  const request = await fetch(url)

  // Get the source of the page as text
  const source = await request.text()

  // Extract the title of the article
  const title = source.match(/<h1.*?>([\s\S]*?)<\/h1>/)[0]

  // Extract the content of the article
  const content = source.match(/<article.*?>([\s\S]*?)<\/article>/)[0]

  // Return the content of the article
  return {
    title,
    content
  }
}

const url = 'https://www.lifo.gr/now/tech-science/i-social-hackers-academy-mathainei-programmatismo-se-prosfyges-metanastes-kai';

try {
  const article = await extract(url)
  console.log(article)
} catch (err) {
  console.error(err)
}