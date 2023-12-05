import puppeteer from 'puppeteer';

async function extract(url) {
  
  // Launch a new browser
  const browser = await puppeteer.launch({
    // Run the browser in headless mode
    headless: true,
    // Run the browser without sandbox. DANGER!
    args: ['--no-sandbox']
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the url
  await page.goto(url);

  // Get the source of the page as text
  const source = await page.content();

  // Extract the title of the article
  const title = source.match(/<h1.*?>([\s\S]*?)<\/h1>/)[0]

  // Extract the content of the article
  const content = source.match(/<article.*?>([\s\S]*?)<\/article>/)[0]

  await browser.close();

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