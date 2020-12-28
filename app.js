const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://movies.yahoo.com.tw/movie_intheaters.html',{waitUntil: 'networkidle2'});
  const html = await page.content();
  fs.writeFile('test.html',html,(err) => {
    console.log('成功');
  })
  await browser.close();
})();