import axios from "axios";
export async function getPicture(id) {
  //this is the maximum number of foxes
  //generate a random fox
  const link = await axios.get(
    `https://img.foxes.cool/fox/${id}.jpg?width=480&height=480`
  );

  //return only the url of the image from API call
  return link.config.url;
}
