import { extract } from '@extractus/article-extractor';

const url = 'https://www.lifo.gr/now/tech-science/i-social-hackers-academy-mathainei-programmatismo-se-prosfyges-metanastes-kai';

try {
  const article = await extract(url)
  console.log(article)
} catch (err) {
  console.error(err)
}