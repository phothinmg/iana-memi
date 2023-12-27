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
    const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css" type="text/css">
        <script src="https://www.iana.org/assignments/_support/jquery.js" type="text/javascript"></script>
        <script src="./sort.js" type="text/javascript"></script>
        <title>MEMI</title>
      </head>
      <body>
        <h1>Application</h1>
          ${table}
      </body>
    </html>
    
    `;

    return html
 
}
scrapeSite().then(result => {
    // const data = `<pre>${result}</pre>`
	fs.writeFileSync('./application.html', result)
}).catch(err => console.log(err))
// var jsonPath = './memi/application.json';
// var xhr = new XMLHttpRequest();

// var requestPromise = new Promise(function(resolve, reject) {
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         var jsonData = JSON.parse(xhr.responseText);
//         resolve(jsonData);
//       } else {
        
//         reject(xhr.status);
//       }
//     }
//   };
// });
// xhr.open('GET', jsonPath, true);
// xhr.send();
// requestPromise
//   .then(function(data) {
// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
    
//   }
// }
   
// })
//   .catch(function(errorStatus) {
//     console.log('Error occurred:', errorStatus);
//   });










