const fs = require("node:fs");

const a = fs.statSync("./docs/application/index.json").mtime.toDateString();
const aa = fs.statSync("./docs/audio/index.json").mtime.toDateString();
const f = fs.statSync("./docs/font/index.json").mtime.toDateString();
const i = fs.statSync("./docs/image/index.json").mtime.toDateString();
const m1 = fs.statSync("./docs/message/index.json").mtime.toDateString();
const m2 = fs.statSync("./docs/model/index.json").mtime.toDateString();
const m3 = fs.statSync("./docs/multipart/index.json").mtime.toDateString();
const t = fs.statSync("./docs/text/index.json").mtime.toDateString();
const v = fs.statSync("./docs/video/index.json").mtime.toDateString();

const da = [a, aa, f, i, m1, m2, m3, t, v];

fs.writeFileSync('./docs/last.json', JSON.stringify(da))
