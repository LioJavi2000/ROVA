import { execSync } from 'child_process';
import { createWriteStream } from 'fs';
import https from 'https';
import http from 'http';

const HF = 'C:/Users/jbern/AppData/Roaming/npm/hf.exe';
const BASE = 'c:/Users/jbern/Downloads/ROVA';

const BRAND = 'Rova premium functional dog gear brand. Warm sand cream background #F0E8DA, rust terracotta accents. Editorial product photography style, like Away luggage or Patagonia gear photography. Clean, functional, confident. No cute graphics. No pure white.';

const images = [
  // --- HARNESS ---
  {
    out: 'images/harness/harness-feature-dring.png',
    ref: 'brand_assets/dog harness.png',
    prompt: 'Close-up macro product photography of a premium black padded dog harness, focusing tightly on a silver metal D-ring clip detail on the front chest panel. The D-ring is sharp and in focus. Padded nylon mesh visible around it. Warm sand cream background #F0E8DA. Soft studio lighting. Communicates quality hardware and precision. No text. No dog. Editorial DTC product photography. Square format.',
  },
  {
    out: 'images/harness/harness-feature-padding.png',
    ref: 'brand_assets/dog harness.png',
    prompt: 'Close-up macro product photography of a premium black dog harness chest panel, showing thick padded mesh lining and soft cushioned interior fabric. The padding texture fills the frame. Warm sand background #F0E8DA. Even soft lighting. The mesh weave and cushioning are the hero of the shot. No dog. No text. Premium DTC product photography. Square format.',
  },
  {
    out: 'images/harness/harness-lifestyle.png',
    ref: 'brand_assets/dog harness.png',
    prompt: 'Lifestyle photography of a large Labrador wearing a black padded no-pull harness on a morning walk on clean urban pavement. Dog is mid-stride, leash attached to front chest D-ring clearly visible. Natural warm daylight. Dog looks strong and comfortable, natural movement not posed. Editorial functional feel. No studio. Warm tones. Square format.',
  },
  // --- BOOTS ---
  {
    out: 'images/boots/boots-hero.png',
    ref: 'brand_assets/dog boots black.png',
    prompt: 'Studio product photography of a set of 4 matching black neoprene dog boots with Velcro strap closures and rubber soles, arranged neatly in a 2x2 grid flat-lay on warm sand cream surface #F0E8DA. Clean top-down or 3/4 view. Even soft-box lighting. No shadows. Minimalist editorial product photography. No dog. No text. Premium DTC brand photography. Square format.',
  },
  {
    out: 'images/boots/boots-feature-velcro.png',
    ref: 'brand_assets/dog boots black.png',
    prompt: 'Close-up macro photography of a black premium dog boot showing the Velcro strap closure fastened tight. The strap detail fills the frame communicating secure fit. Reflective strap material visible. Warm sand background #F0E8DA. Even studio lighting. The image says this stays on. No dog. No text. Editorial product photography. Square format.',
  },
  {
    out: 'images/boots/boots-feature-sole.png',
    ref: 'brand_assets/dog boots black.png',
    prompt: 'Macro product photography of the thick rubber textured sole of a black premium dog boot, showing deep grip treads and tread pattern. The boot sole fills the frame at a slight angle. Warm sand background #F0E8DA. Even studio lighting. Communicates durability and grip. No text. No dog. Premium editorial product photography, like hiking boot sole photography. Square format.',
  },
  {
    out: 'images/boots/boots-lifestyle.png',
    ref: 'brand_assets/dog boots black.png',
    prompt: 'Lifestyle photography of a medium to large breed dog wearing all 4 black protective boots, walking confidently on urban pavement. The boots are clearly visible on each paw and appear secure. Dog is in motion mid-stride. Natural warm light. Functional and confident, not cute or funny. The boots look like they actually work. Square format.',
  },
  // --- BOWL ---
  {
    out: 'images/bowl/bowl-hero.png',
    ref: 'brand_assets/slow feeder.png',
    prompt: 'Studio product photography of a premium slow feeder dog bowl viewed from slightly above at 45 degree angle. The bowl has a maze ridge pattern on the interior surface. Warm sand background #F0E8DA. Bowl is empty and clean. The bowl color is rust terracotta or warm sage tone. Even soft studio lighting. Minimalist editorial DTC product photography. No food. No dog. No text. Square format.',
  },
  {
    out: 'images/bowl/bowl-feature-maze.png',
    ref: 'brand_assets/slow feeder.png',
    prompt: 'Overhead flat-lay product photography looking straight down into a slow feeder dog bowl. The maze ridge pattern fills the entire frame. The ridges and channels of the slow-feed design are the hero. Warm sand background visible at edges. Even soft overhead lighting. Communicates the functional design. No food. No dog. No text. Editorial product photography. Square format.',
  },
  {
    out: 'images/bowl/bowl-feature-base.png',
    ref: 'brand_assets/slow feeder.png',
    prompt: 'Product photography of the underside base of a slow feeder dog bowl flipped upside down, showing the non-slip rubber grip surface on the bottom. Placed on warm sand surface #F0E8DA. Even studio lighting. Communicates stability - this bowl does not move during feeding. No dog. No text. Premium editorial product photography. Square format.',
  },
  {
    out: 'images/bowl/bowl-lifestyle.png',
    ref: 'brand_assets/slow feeder.png',
    prompt: 'Lifestyle photography of a medium breed dog eating from a slow feeder bowl on a kitchen floor or wooden floor. Dog is nose-down into the maze pattern, clearly engaged and working through the ridges. Bowl is stable and not moving. Natural warm light. Communicates the product working as intended. Functional and real, not staged or cute. Square format.',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = createWriteStream(dest);
    protocol.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { file.close(); reject(err); });
  });
}

for (const img of images) {
  process.stdout.write(`Generating ${img.out} ... `);
  try {
    const raw = execSync(
      `"${HF}" generate create nano_banana_2 --prompt ${JSON.stringify(img.prompt)} --image "${BASE}/${img.ref}" --wait --json`,
      { maxBuffer: 1024 * 1024 * 10 }
    ).toString();
    const data = JSON.parse(raw);
    const url = data[0]?.result_url;
    if (!url) throw new Error('No result_url in response');
    await download(url, `${BASE}/${img.out}`);
    console.log('✅ saved');
  } catch (err) {
    console.log(`❌ FAILED: ${err.message}`);
  }
}

console.log('\nAll done.');
