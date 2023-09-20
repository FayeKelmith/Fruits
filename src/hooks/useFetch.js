import { useState, useEffect } from "react";
import { getPicture } from "../assets/picture";

export default function useFetch() {
  //since it's  a link I used empty string

  //TODO: Generate a series of pictures randomly as the user scrolls down and display them in grid.
  //FIXME: Make use of setId to assign the Random numbers and generate the pictures

  const [id, setId] = useState(10);
  const [url, setUrl] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    //setUrl(getPicture());
    function obtainPic(val) {
      try {
        getPicture(val).then((res) => setUrl(res));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        //console.error(error);
      }
    }
    obtainPic(id);
    // console.log(url);
    // console.log(isloading);
  }, [url, isloading, id]);

  return [url, isloading];
}
