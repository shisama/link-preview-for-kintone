kintone.events.on("app.record.index.show", () => {
  const b = kintone.app.getHeaderSpaceElement();
  const button = document.createElement("button");
  button.innerText = "hello world";
  b.appendChild(button);
});
