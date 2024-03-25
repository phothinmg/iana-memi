import fs from "node:fs";
import { clearDirectory } from "array-json/file-system";
import {
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
} from "./funs.mjs";

clearDirectory("./dist");
setTimeout(() => {
  scrapeSiteApplication()
    .then((result) => {
      // const data = `<pre>${result}</pre>`
      fs.writeFileSync(
        "./dist/application.json",
        JSON.stringify(result, null, 2)
      );
    })
    .catch((err) => console.log(err));
  setTimeout(() => {
    scrapeSiteAudio()
      .then((result) => {
        // const data = `<pre>${result}</pre>`
        fs.writeFileSync("./dist/audio.json", JSON.stringify(result, null, 2));
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      scrapeSiteFont()
        .then((result) => {
          // const data = `<pre>${result}</pre>`
          fs.writeFileSync("./dist/font.json", JSON.stringify(result, null, 2));
        })
        .catch((err) => console.log(err));
      setTimeout(() => {
        scrapeSiteImage()
          .then((result) => {
            // const data = `<pre>${result}</pre>`
            fs.writeFileSync(
              "./dist/image.json",
              JSON.stringify(result, null, 2)
            );
          })
          .catch((err) => console.log(err));
        setTimeout(() => {
          scrapeSiteMessage()
            .then((result) => {
              // const data = `<pre>${result}</pre>`
              fs.writeFileSync(
                "./dist/message.json",
                JSON.stringify(result, null, 2)
              );
            })
            .catch((err) => console.log(err));
          setTimeout(() => {
            scrapeSiteModel()
              .then((result) => {
                // const data = `<pre>${result}</pre>`
                fs.writeFileSync(
                  "./dist/model.json",
                  JSON.stringify(result, null, 2)
                );
              })
              .catch((err) => console.log(err));
            setTimeout(() => {
              scrapeSiteMultipart()
                .then((result) => {
                  // const data = `<pre>${result}</pre>`
                  fs.writeFileSync(
                    "./dist/multipart.json",
                    JSON.stringify(result, null, 2)
                  );
                })
                .catch((err) => console.log(err));
              setTimeout(() => {
                scrapeSiteText()
                  .then((result) => {
                    // const data = `<pre>${result}</pre>`
                    fs.writeFileSync(
                      "./dist/text.json",
                      JSON.stringify(result, null, 2)
                    );
                  })
                  .catch((err) => console.log(err));
                setTimeout(() => {
                  scrapeSiteVideo()
                    .then((result) => {
                      // const data = `<pre>${result}</pre>`
                      fs.writeFileSync(
                        "./dist/video.json",
                        JSON.stringify(result, null, 2)
                      );
                    })
                    .catch((err) => console.log(err));
                  setTimeout(() => {
                    latest();
                  }, 3000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
