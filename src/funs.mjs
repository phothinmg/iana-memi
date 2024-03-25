import fs from "node:fs";
import axios from "axios";
import * as cheerio from "cheerio";
async function scrapeSiteApplication() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-application");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// --------------------

async function scrapeSiteAudio() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-audio");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// --------------------------------------------------

async function scrapeSiteFont() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-font");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// -----------------------------------------

async function scrapeSiteImage() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-image");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// ---------------------------------------------

async function scrapeSiteMessage() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-message");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// -----------------------------------

async function scrapeSiteModel() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-model");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// -------------------------------------

async function scrapeSiteMultipart() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-multipart");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// ----------------------------------------------------------

async function scrapeSiteText() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-text");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

// --------------------------------------------

async function scrapeSiteVideo() {
  const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
  const { data } = await axios.get(url, {
    timeout: 15000,
  });
  const $ = cheerio.load(data);
  const table = $("#table-video");
  const tableData = {};

  table.find("tr").each((index, row) => {
    const columns = $(row).find("td");

    if (columns.length >= 2) {
      const key = $(columns[0]).text().trim();
      const value = $(columns[1]).text().trim();

      tableData[key] = value;
    }
  });
  return tableData;
}

function latest() {
  const a = fs.statSync("./docs/dist/application.json").mtime.toDateString();
  const aa = fs.statSync("./docs/dist/audio.json").mtime.toDateString();
  const f = fs.statSync("./docs/dist/font.json").mtime.toDateString();
  const i = fs.statSync("./docs/dist/image.json").mtime.toDateString();
  const m1 = fs.statSync("./docs/dist/message.json").mtime.toDateString();
  const m2 = fs.statSync("./docs/dist/model.json").mtime.toDateString();
  const m3 = fs.statSync("./docs/dist/multipart.json").mtime.toDateString();
  const t = fs.statSync("./docs/dist/text.json").mtime.toDateString();
  const v = fs.statSync("./docs/dist/video.json").mtime.toDateString();

  const da = [a, aa, f, i, m1, m2, m3, t, v];
  fs.writeFileSync("./docs/dist/last.json", JSON.stringify(da, null, 2));
}

export {
  scrapeSiteApplication,
  scrapeSiteAudio,
  scrapeSiteFont,
  scrapeSiteImage,
  scrapeSiteMessage,
  scrapeSiteModel,
  scrapeSiteMultipart,
  scrapeSiteText,
  scrapeSiteVideo,
  latest,
};
