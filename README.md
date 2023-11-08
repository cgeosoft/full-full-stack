# Full Full Stack - Project Course

This is a course for design and development of a full stack application. The double full word in the title was chosen to emphasize the fact that this course will cover not only the backend and frontend, but also the design of the application and the publishing of it. We will use a lot of different technologies and tools to achieve this goal. The course will be divided into different sections, each section will cover a different topic. The sections will be ordered in a way that will allow us to build the application step by step.

For the course we will build a simple news aggregator application. The application will periodically fetch news from different sources and display them in a single page. Moreover, the application will allow users to read the summary of the articles, which will be generated using AI. An additional feature will be the ability to listen to the summary of the article using a text to speech engine.

## Course Structure

The course will be divided into different sections, each section will cover a different topic. The sections will not be ordered in a classical way from frond to back but in most important to low important feature. We will build the core parts of the application first, and then we will add additional features. This will allow us to build the application from the center out, and to focus on the most important parts first.

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

### [Section 06 - Pug / AplineJS / Tailwind as a frontend]()

### [Section 07 - NestJS as a backend]()

### [Section 08 - TypeORM]()

### [Section 09 - CQRS]()

### [Section 10 - Testing]()

### [Section 11 - Docker]()

### [Section 12 - Github Actions]()

### [Section 13 - Traefik]()
