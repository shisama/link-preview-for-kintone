import childListObserver from "./childListObserver";
import { createRestImgElement } from "./createRestImgElement";
import { KintoneRestAPIClient } from "@kintone/rest-api-client";

const URL_REGEXP =
  "^(http[s]?:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?";
const isUrl = (line: string) => new RegExp(URL_REGEXP).test(line);

chrome.debugger;

export default async () => {
  childListObserver(".ocean-ui-comments-commentbase-text", contents => {
    for (const content of contents) {
      const anchors = content.querySelectorAll("a");
      anchors.forEach((anchor: HTMLAnchorElement) => {
        if (anchor.classList.length === 0 && isUrl(anchor.href)) {
          new KintoneRestAPIClient();

          const image = createRestImgElement({
            width: "100%",
            height: "100%"
          });
          anchor.appendChild(image);
        }
      });
    }
  });
};
