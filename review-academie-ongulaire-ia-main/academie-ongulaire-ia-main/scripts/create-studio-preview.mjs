import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

const width = 1200;
const height = 900;
const pixels = Buffer.alloc(width * height * 4);

const palette = {
  petal: [255, 245, 247],
  blush: [247, 220, 229],
  rosewood: [169, 76, 103],
  ink: [36, 33, 36],
  clay: [232, 216, 203],
  champagne: [247, 232, 200],
  sage: [122, 154, 135],
  white: [255, 255, 255]
};

function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t)
  ];
}

function setPixel(x, y, color, alpha = 255) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const index = (y * width + x) * 4;
  const a = alpha / 255;
  pixels[index] = Math.round(color[0] * a + pixels[index] * (1 - a));
  pixels[index + 1] = Math.round(color[1] * a + pixels[index + 1] * (1 - a));
  pixels[index + 2] = Math.round(color[2] * a + pixels[index + 2] * (1 - a));
  pixels[index + 3] = 255;
}

function fillRect(x, y, w, h, color, alpha = 255) {
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) setPixel(xx, yy, color, alpha);
  }
}

function roundedRect(x, y, w, h, radius, color, alpha = 255) {
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      const dx = Math.max(x - xx + radius, 0, xx - (x + w - radius - 1));
      const dy = Math.max(y - yy + radius, 0, yy - (y + h - radius - 1));
      if (dx * dx + dy * dy <= radius * radius) setPixel(xx, yy, color, alpha);
    }
  }
}

function circle(cx, cy, radius, color, alpha = 255) {
  for (let y = cy - radius; y <= cy + radius; y++) {
    for (let x = cx - radius; x <= cx + radius; x++) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= radius * radius) setPixel(x, y, color, alpha);
    }
  }
}

function line(x0, y0, x1, y1, thickness, color, alpha = 255) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = Math.round(x0 + dx * t);
    const y = Math.round(y0 + dy * t);
    circle(x, y, thickness, color, alpha);
  }
}

for (let y = 0; y < height; y++) {
  const t = y / (height - 1);
  const color = mix(palette.petal, palette.white, t * 0.75);
  fillRect(0, y, width, 1, color);
}

circle(160, 120, 240, palette.blush, 95);
circle(1080, 70, 280, palette.champagne, 90);
circle(1080, 780, 260, palette.blush, 65);

roundedRect(90, 575, 1020, 210, 28, palette.clay, 220);
roundedRect(130, 520, 960, 125, 34, palette.white, 245);
roundedRect(145, 535, 930, 95, 24, [252, 237, 240], 255);

roundedRect(650, 135, 315, 560, 36, palette.ink, 255);
roundedRect(670, 160, 275, 510, 28, palette.white, 255);
roundedRect(694, 190, 225, 34, 12, palette.petal, 255);
roundedRect(694, 248, 150, 16, 8, palette.ink, 255);
roundedRect(694, 278, 205, 10, 5, [214, 198, 205], 255);
roundedRect(694, 306, 180, 10, 5, [214, 198, 205], 255);
roundedRect(694, 350, 190, 86, 16, palette.petal, 255);
roundedRect(714, 374, 120, 12, 6, palette.rosewood, 255);
roundedRect(714, 402, 150, 10, 5, [214, 198, 205], 255);
roundedRect(694, 462, 95, 95, 18, palette.champagne, 255);
roundedRect(808, 462, 95, 95, 18, [235, 245, 239], 255);
roundedRect(710, 590, 190, 38, 18, palette.ink, 255);

roundedRect(210, 230, 320, 390, 34, palette.white, 250);
roundedRect(240, 265, 260, 40, 14, palette.petal, 255);
roundedRect(260, 345, 95, 180, 45, palette.blush, 255);
roundedRect(375, 345, 95, 180, 45, [246, 216, 202], 255);
roundedRect(260, 500, 95, 28, 12, palette.rosewood, 255);
roundedRect(375, 500, 95, 28, 12, palette.sage, 255);

roundedRect(255, 175, 95, 155, 22, palette.rosewood, 255);
roundedRect(275, 135, 55, 55, 14, palette.ink, 255);
roundedRect(275, 205, 55, 82, 18, palette.blush, 255);
roundedRect(395, 168, 95, 165, 22, palette.sage, 255);
roundedRect(416, 128, 53, 55, 14, palette.ink, 255);
roundedRect(416, 205, 53, 88, 18, [235, 245, 239], 255);

line(152, 500, 500, 350, 8, palette.ink, 70);
line(164, 512, 512, 362, 6, palette.white, 190);
roundedRect(500, 328, 120, 48, 20, palette.white, 255);
roundedRect(520, 340, 80, 22, 11, palette.champagne, 255);

for (let i = 0; i < 5; i++) {
  const x = 198 + i * 52;
  roundedRect(x, 660 - i * 7, 34, 92, 18, [250, 225, 229], 255);
  roundedRect(x + 4, 660 - i * 7, 26, 30, 13, palette.rosewood, 255);
}

roundedRect(485, 665, 170, 34, 17, palette.ink, 180);
roundedRect(500, 675, 110, 10, 5, palette.white, 220);
roundedRect(500, 695, 140, 8, 4, palette.white, 160);

const raw = Buffer.alloc((width * 4 + 1) * height);
for (let y = 0; y < height; y++) {
  const rowStart = y * (width * 4 + 1);
  raw[rowStart] = 0;
  pixels.copy(raw, rowStart + 1, y * width * 4, (y + 1) * width * 4);
}

function crc32(buffer) {
  let crc = ~0;
  for (let i = 0; i < buffer.length; i++) {
    crc ^= buffer[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, checksum]);
}

const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const png = Buffer.concat([
  header,
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0))
]);

writeFileSync("public/studio-preview.png", png);
