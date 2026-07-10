#!/usr/bin/env node
// Downloads all discovered framerusercontent.com assets for the endless-expectations clone.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(
  process.cwd(),
  "public/images/endless-expectations-612180.framer.app"
);

const IMAGES = [
  "https://framerusercontent.com/images/5M8NQwtBDMwHm87dfXtDX1TOQ.png",
  "https://framerusercontent.com/images/6h9hjxX2S8heG57tvUchoA6dAM.png",
  "https://framerusercontent.com/images/8z52bh95AkYVEkLdscJpmO2iPbk.png",
  "https://framerusercontent.com/images/BvP2CQBZpvSA9Mcp4n3LoGf0E.png",
  "https://framerusercontent.com/images/CpfLkhgt7FpnO01s75GIa7DPZo8.jpg",
  "https://framerusercontent.com/images/EHl1CtlUBN1riBQS4dJqgiTwMog.png",
  "https://framerusercontent.com/images/FcQKk42EHfLdnZvoj6ItkuQFQ.png",
  "https://framerusercontent.com/images/IsVu6rT6bqu5BoGXtiz6Yd36c4.png",
  "https://framerusercontent.com/images/KnorwvqN1HtowWhMecWMyaG6dws.png",
  "https://framerusercontent.com/images/Savle5DZHOWqtAcOxHiJI3UY.png",
  "https://framerusercontent.com/images/XFKsIZRI4mxNoJj3C4tv0S9qk.png",
  "https://framerusercontent.com/images/g2Q0UEGYPma6FK2cD4vkNBVTXao.png",
  "https://framerusercontent.com/images/h7fOCKCsvgnj6pswnDzTWfVkQ.png",
  "https://framerusercontent.com/images/izM6Io4LYERFIddIZdCV0bYEH5k.png",
  "https://framerusercontent.com/images/jF7w5PT9lgaSIDfasrXaHSMrK4U.png",
  "https://framerusercontent.com/images/pC12ErCmiABgUXftWqc8KsQZluM.png",
  "https://framerusercontent.com/images/qYfpykWvGfava1GqTqLUGEDYak.png",
  "https://framerusercontent.com/images/sHaEex4KVmsumIBsP4EdsxUWVxM.png",
  // favicon / og image
  "https://framerusercontent.com/images/XAB5sF1W7tsjOtxY4lEQMlFjU.png",
  "https://framerusercontent.com/images/SJIlje87EMS4XXIedXldHHi8wc.png",
];

async function downloadOne(url) {
  const filename = decodeURIComponent(new URL(url).pathname.split("/").pop());
  const dest = path.join(OUT_DIR, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${url} -> ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${filename} (${(buf.length / 1024).toFixed(1)}kb)`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const BATCH = 4;
  for (let i = 0; i < IMAGES.length; i += BATCH) {
    await Promise.all(IMAGES.slice(i, i + BATCH).map(downloadOne));
  }
}

main();
