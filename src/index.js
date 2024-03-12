const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

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

scrapeSiteApplication()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/application/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteAudio()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/audio/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteFont()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync("./docs/font/index.json", JSON.stringify(result, null, 2));
  })
  .catch((err) => console.log(err));

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

scrapeSiteImage()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/image/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteMessage()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/message/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteModel()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/model/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteMultipart()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/multipart/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));

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

scrapeSiteText()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync("./docs/text/index.json", JSON.stringify(result, null, 2));
  })
  .catch((err) => console.log(err));

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

scrapeSiteVideo()
  .then((result) => {
    // const data = `<pre>${result}</pre>`
    fs.writeFileSync(
      "./docs/video/index.json",
      JSON.stringify(result, null, 2)
    );
  })
  .catch((err) => console.log(err));
