import axios from "axios";
export async function getPicture() {
  //this is the maximum number of foxes
  const numberOfImages = 953;

  //generate a random fox
  const link = await axios.get(
    `https://img.foxes.cool/fox/${Math.random() * numberOfImages}.jpg`
  );

  //return only the url of the image from API call
  return link.config.url;
}
