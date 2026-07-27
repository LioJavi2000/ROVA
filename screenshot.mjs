import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const existing = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
const nums = existing
  .map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0'))
  .filter(n => !isNaN(n));
const n = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll through page to trigger IntersectionObserver fade-ups
await page.evaluate(async () => {
  await new Promise(resolve => {
    const distance = 200;
    const delay = 80;
    let pos = 0;
    const step = () => {
      window.scrollBy(0, distance);
      pos += distance;
      if (pos < document.body.scrollHeight) {
        setTimeout(step, delay);
      } else {
        window.scrollTo(0, 0);
        setTimeout(resolve, 400);
      }
    };
    step();
  });
});
await new Promise(r => setTimeout(r, 300));

await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: ${filepath}`);
