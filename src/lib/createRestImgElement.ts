export const createRestImgElement = (style: Object) => {
  const img = document.createElement("img");
  img.src =
    "https://speakerd.s3.amazonaws.com/presentations/b3527a4ee0b54f5d9f1b5566957acf6f/slide_0.jpg?599497";
  Object.assign(img.style, style);
  return img;
};
