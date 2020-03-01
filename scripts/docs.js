const cheerio = require('cheerio');
const fs = require('fs')
const html = fs.readFileSync(__dirname + '/bookmarks.html', 'utf8')
const $ = cheerio.load(html)
const links = []
$('dt>h3').filter(function () {
  return $(this).text() === '官方文档'
}).next().find('h3').each(function () {
  const title = $(this).text()
  console.log(`## ${title}`)
  $(this).next().find('a').each(function (i) {
    const name = $(this).text().replace(/\s*/g, "")
    const url = $(this).attr('href')
    const key = url.replace('https://', '')
      .replace('http://', '')
      .replace(/\//g, '_')
      .replace(/\+/g, '-')
      .toString('base64')
    console.log(`### [${name}](${url})`)
    console.log(`![${key}](https://graphbed.qiniu.songxingguo.com/docs/${key}.png)`)
    links.push({
      name: name,
      url: url,
      out: `./images/${key}.png`,
      imgUrl: `https://graphbed.qiniu.songxingguo.com/docs/${key}.png`,
      options: {
        quality: 100,
        viewportSize: {
          width: 1440,
          height: 769
        },
        clipRect: {
          top: 0,
          left: 0,
          width: 1440,
          height: 769
        },
        renderDelay: 20000
      }
    })
  })
})
// console.log(JSON.stringify(links))
