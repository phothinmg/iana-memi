import { writeJson } from "array-json";
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

clearDirectory("./docs/dist");
setTimeout(async () => {
  scrapeSiteApplication()
    .then((result) => {
      // const data = `<pre>${result}</pre>`
      writeJson(
        "./docs/dist/application.json",
        result
      );
    })
    .catch((err) => console.log(err));
  setTimeout(async () => {
    scrapeSiteAudio()
      .then((result) => {
        // const data = `<pre>${result}</pre>`
        writeJson("./docs/dist/audio.json", result);
      })
      .catch((err) => console.log(err));
    setTimeout(async () => {
      scrapeSiteFont()
        .then((result) => {
          // const data = `<pre>${result}</pre>`
          writeJson("./docs/dist/font.json", result);
        })
        .catch((err) => console.log(err));
      setTimeout(async () => {
        scrapeSiteImage()
          .then((result) => {
            // const data = `<pre>${result}</pre>`
            writeJson(
              "./docs/dist/image.json",
              result
            );
          })
          .catch((err) => console.log(err));
        setTimeout(async () => {
          scrapeSiteMessage()
            .then((result) => {
              // const data = `<pre>${result}</pre>`
              writeJson(
                "./docs/dist/message.json",
                result
              );
            })
            .catch((err) => console.log(err));
          setTimeout(async () => {
            scrapeSiteModel()
              .then((result) => {
                // const data = `<pre>${result}</pre>`
                writeJson(
                  "./docs/dist/model.json",
                  result
                );
              })
              .catch((err) => console.log(err));
            setTimeout(async () => {
              scrapeSiteMultipart()
                .then((result) => {
                  // const data = `<pre>${result}</pre>`
                  writeJson(
                    "./docs/dist/multipart.json",
                    result
                  );
                })
                .catch((err) => console.log(err));
              setTimeout(async () => {
                scrapeSiteText()
                  .then((result) => {
                    // const data = `<pre>${result}</pre>`
                    writeJson(
                      "./docs/dist/text.json",
                      result
                    );
                  })
                  .catch((err) => console.log(err));
                setTimeout(async () => {
                  scrapeSiteVideo()
                    .then((result) => {
                      // const data = `<pre>${result}</pre>`
                      writeJson(
                        "./docs/dist/video.json",
                        result
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
