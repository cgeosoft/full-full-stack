---
title: Section 01 - Web Scraping
Talk Time: ~5 minutes
Code Time: ~30 minutes
---

## Section Notes

- Explain: What is web scraping?
- Explain: How to scrape a website? What are the best practices?
- Build: A simple `scraping` function that will get a link to an article and return the content of it.
- Explain: How to use a browser to scrape a website?
- Build: A simple `scraping` function that will get a link to an article and return the content of it using a browser (Puppeteer).
- Explain: What is a third party library? How to use it?
- Build: Use `@extractus/article-extractor` as a third party library to replace the scraping function.
- Explain: What is the benefits of using a third party service integration. like [brightdata.com](https://brightdata.com/)
- Build: Use [brightdata.com](https://brightdata.com/) as a third party service to replace the scraping function.

## Section Transcript

Today, we're diving into the heart of our application, web scraping. In this first section, we will cover the fundamentals of web scraping, including what it is and how to scrape a website. Additionally, we will walk you through the process of building a simple script using NodeJS that can scrape a website and return its content.

But first things first, what is web scraping? Web scraping is the process of extracting data or content from websites. It's like an automated way of copying information from a webpage. Web scraping allows us to access and utilize data that might not be readily available through APIs or other structured data sources. It's a powerful technique used in various fields such as data analysis, research, and more.

Before scraping a website, it's crucial to review and comply with the website's terms of use and policies. Some websites prohibit or restrict web scraping, and not adhering to these rules can lead to legal issues. Many websites have a `robots.txt` file that specifies which parts of the site can and cannot be scraped. It's essential to respect these rules to maintain a good relationship with the website owner. Remember that we are social hackers and not black hat hackers.

Lets create a scraping function in Nodejs that will get a link to an article and return the content of it.

```javascript
// fetch.js
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
```

In the world of modern software development, we often don't need to reinvent the wheel. There are numerous third-party libraries and tools available to simplify the process. One such library we'll be using is `@extractus/article-extractor`. This library can significantly simplify our web scraping process and help us obtain clean and structured data from articles.

We'll integrate this library into our application, replacing our custom `scraper` function with `@extractus/article-extractor`. This will save us time and effort while ensuring high-quality data extraction.

```javascript
// extractus.js
import { extract } from '@extractus/article-extractor'

const url = 'https://www.lifo.gr/now/tech-science/i-social-hackers-academy-mathainei-programmatismo-se-prosfyges-metanastes-kai';

try {
  const article = await extract(url)
  console.log(article)
} catch (err) {
  console.error(err)
}
```

Both of `fetch` and `@extractus/article-extractor` are great tools for web scraping. However, they have their limitations. For example, `fetch` can only get the source of the page as text, while `@extractus/article-extractor` can only extract the content of the article. To overcome these limitations, we can use a browser to scrape the website. This will allow us to get the source of the page as text and extract the content of the article.

We may use a browser like Chrome or Firefox to scrape a website. However, this can be a tedious and time-consuming process. Instead, we can use a headless browser like Puppeteer. Puppeteer is a NodeJS library that allows us to control a headless Chrome browser. It provides a high-level API that makes it easy to automate tasks such as web scraping.

```javascript
// puppeteer.js

import puppeteer from 'puppeteer';

const url = 'https://www.lifo.gr/now/tech-science/i-social-hackers-academy-mathainei-programmatismo-se-prosfyges-metanastes-kai';

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
```

Even with puppeteer, web scraping can be a challenging task. It requires a lot of time and effort to build a scraper that can handle all the different scenarios. We will soon hit a wall where we can't scrape a website anymore. Websites commonly use anti-scraping techniques such as IP blocking, CAPTCHA, and more. These techniques can make it difficult to scrape a website.

They say that for every problem, there is a SAAS solution. And this is true for web scraping as well.There are third-party services that can help us with this task. One such service is [brightdata.com](https://brightdata.com/). Bright Data provides a web scraping service that allows us to scrape websites without worrying about the technical details. It also integrates with Puppeteer, making it easy to use.

First we create an account on [brightdata.com](https://brightdata.com/). When we have the connection endpoint, we can use in the puppeteer launch function.

```javascript
const browser = await puppeteer.connect({
    browserWSEndpoint: SBR_WS_ENDPOINT,
});
```

This implementation is much simpler than the previous one. We don't need to worry about IP blocking, CAPTCHA, and other anti-scraping techniques. We can focus on building our application instead of dealing with technical details.

In conclusion, web scraping is a powerful technique that allows us to extract valuable data from websites. By understanding the basics of web scraping, adhering to best practices, and building the necessary functions, we can harness the potential of this technique for our application.

Thank you for joining us in this first section. I am looking forward to seeing you in the next one.