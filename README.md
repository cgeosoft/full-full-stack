# Full Full Stack - Project Course

In this series of talks we will build a full stack application. It will be a news aggregator that will scrape the news, summarize them using AI, and generate an audio of the summary. We will cover not only the backend and frontend, but also the design of and the publishing. We will use a lot of different technologies but the main focus will be on javascript. Also we will break the typical order of the sections, and we will start with the most important features first, building the application from the center out. 

> Intro: Hello, I am Christos! Thank you all for been here.

In this series of talks we will build a full stack application. I named this series of talks "Full Full Stack" because I will cover not only the backend and frontend, but also the design of and the publishing.

We will use a lot of different technologies and tools to achieve this goal, but of course many of those will be around javascript.

Also I decided to break the typical order of the sections, and to start with the most important features first. This will allow us to build the application from the center out, and to focus on the most important parts before the less ones.

So, we will build a simple news aggregator. This project is already published and soon I will make its source code available. It was built because I was tired of reading the news, and I wanted to listen to them instead. But listening to long articles is not a good. Nobody has time for that. So I decided to build a simple application that will scrape the news, summarize them, and generate an audio of the summary. This way I can listen to the news while I am driving, or doing something else.

The most important features are:

- scrape articles from different websites.
- generate a summary of the articles using AI.
- generate the audio of the summary using a text to speech engine.

### [Section 01 - Web Scraping](./section-01/README.md)

For the first section we will build the core feature of the application, the scrape of a public article. We will explain what is web scraping, and how to scrape a website. Then We will build a simple script that will scrape a website and return the content of it.

### [Section 02 - Restful API](./section-02/README.md)

Notes:

  - Build: An endpoint that will invoke the scraping function.
  - Build: An endpoint that return the list of articles.
  - Build: An endpoint that return a single article.

### [Section 03 - More Data For Articles](./section-03/README.md)

Notes:

- Explain: What is an integration?
- Explain: How to integrate with an external service? Best practices.
- Build: A function that will get the content of the article and return the summary of it.
- Build: A function that will get a text and return the audio of it.
- Build: An endpoint that will queue summary and audio generation jobs.

### [Section 04 - Cron Jobs](./section-04/README.md)

Notes:

- Explain what is a cron job.
- Build: A cron job that will periodically fetch articles from different rss feeds.

### [Section 05 - Queues](./section-05/README.md)

Notes:

- Explain: What is a queue? Why do we need it?
- Explain: How to use a queue?
- Build: A queue handler that will generate the summary and audio of the articles.

### [Section 06 - Pug / AlpineJS / Tailwind as a frontend]()

### [Section 07 - NestJS as a backend]()

### [Section 08 - TypeORM]()

### [Section 09 - CQRS]()

### [Section 10 - Testing]()

### [Section 11 - Docker]()

### [Section 12 - Github Actions]()

### [Section 13 - Traefik]()
