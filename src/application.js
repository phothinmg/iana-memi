const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

async function scrapeSite() {
	const url = `https://www.iana.org/assignments/media-types/media-types.xhtml`;
	const { data } = await axios.get(url, {
        timeout: 15000,
    });
    const $ = cheerio.load(data);
    const table = $('#table-application');
    const tableData = {};

table.find('tr').each((index, row) => {
  const columns = $(row).find('td');

  if (columns.length >= 2) {
    const key = $(columns[0]).text().trim();
    const value = $(columns[1]).text().trim();

    tableData[key] = value;
  }
});
    return tableData;
}

scrapeSite().then(result => {
    // const data = `<pre>${result}</pre>`
	fs.writeFileSync('./iana/memi-type/application.json', JSON.stringify(result, null, 2))
}).catch(err => console.log(err))