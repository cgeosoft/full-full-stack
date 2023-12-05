---
title: Section 01 - Web Scraping
Talk Time: ~5 minutes
Code Time: ~30 minutes
---

## Section Notes

- **Explain** - What is web scraping?
- **Explain** - How to scrape a website? What are the best practices?
- **Build** - A simple `scraping` function that will get a link to an article and return the content of it.
- **Explain** - How to use a browser to scrape a website?
- **Build** - A simple `scraping` function that will get a link to an article and return the content of it using a browser (Puppeteer).
- **Explain** - What is a third party library? How to use it?
- **Build** - Use `@extractus/article-extractor` as a third party library to replace the scraping function.
- **Explain** - What is the benefits of using a third party service integration. like [brightdata.com](https://brightdata.com/)
- **Mention** - Use [brightdata.com](https://brightdata.com/) as a third party service to replace the scraping function.

## Section Transcript

In this first talk, we will cover the **fundamentals of web scraping**, including what it is and how to do it. I will walk you through the process of building a simple script using NodeJS that can scrape a website and return its content.

But first things first, **what is web scraping?** Web scraping is the process of extracting data or content from websites. It's like an automated way of copying information from a webpage. Web scraping allows us to access and utilize data that might not be readily available through APIs or other structured data sources. It's a powerful technique used in various fields such as data analysis, research, and more.

It seems like a simple task, but it can be challenging to scrape a website. There are many things to consider, such as the structure of the website, the type of data we want to extract, and more. We need to build a scraper that can handle all these different scenarios. Keep in mind that websites are constantly changing, so we need to update our scraper regularly.

You should know before scraping a website, that you should to review and comply with the website's terms of use and policies. Some websites prohibit or restrict web scraping. In practice, the most common defense against web scraping is IP blocking through the use of CAPTCHA or other anti-scraping techniques.

Aside from all that we will scaping a news site for educational purposes, so lets create a scraping function in Nodejs that it will get an article url as an input and return the content of it.

> Show: fetch.js

In the world of modern software development, we often don't need to reinvent the wheel. There are numerous third-party libraries and tools available to simplify the process. One such library I stabled upon is `@extractus/article-extractor`. This library can significantly simplify our web scraping process and help us obtain clean and structured data from articles.

We'll integrate this library into our application, replacing our custom `scraper` function with `@extractus/article-extractor`. This will save us time and effort while ensuring high-quality data extraction. However we need to keep in mind that we rely on a third-party library from now on. This means that we need to keep it up to date and make sure that it works as expected.

> Show: extractus.js

Both of `fetch` and `@extractus/article-extractor` are great tools for web scraping. However, they have their limitations. Both of them rely on the rendered HTML structure of the website. If the website changes its content using JavaScript, we won't be able to scrape it. To overcome these limitations, we can use a browser to scrape the website. This will allow us to get the final content of the page as it would appear in a browser used by a human.

We may use a browser like Chrome or Firefox but this can be a tedious and time-consuming process. Instead, we will use a headless browser. Puppeteer is a NodeJS library that allows us to control a headless Chrome browser. It provides a high-level API that makes it easy to automate tasks such as web scraping.

> Show: puppeteer.js

Even with puppeteer, web scraping can be a challenging task. It requires a lot of time and effort to build a scraper that can handle all the different scenarios. We will soon hit a wall. Websites commonly use anti-scraping techniques such as IP blocking, CAPTCHA, and more. These techniques can make it difficult to scrape a website.

They say that for every problem, there is a SAAS solution. And this is true for web scraping as well. There are third-party services that can help us with this task. I am not affiliated with any of them, but I will mention one that I have come across. It is [brightdata.com](https://brightdata.com/). Bright Data provides a web scraping service that allows us to scrape websites without worrying about the technical details. It also integrates with Puppeteer, making it easy to use.

I am sure that there are other services out there. Pricing and features vary, so you should do your research before choosing one.

In conclusion, web scraping is a powerful technique that allows us to extract valuable data from websites. By understanding the basics of web scraping, adhering to best practices, and building the necessary functions, we can harness the potential of this technique for our application.

Thank you for joining in this first talk and I am looking forward to seeing you in the next one.