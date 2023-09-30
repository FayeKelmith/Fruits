import { useState, useEffect } from "react";
import { getPicture } from "../assets/picture";

export default function useFetch(id) {
  //const id = 6;
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
