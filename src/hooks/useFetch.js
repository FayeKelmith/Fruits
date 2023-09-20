import { useState, useEffect } from "react";
import { getPicture } from "../assets/picture";
export default function useFetch() {
  //since it's  a link I used empty string
  const [url, setUrl] = useState("");

  useEffect(() => {
    //setUrl(getPicture());
    getPicture().then((res) => setUrl(res));
  }, []);

  console.log(url);
  return [url, setUrl];
}
