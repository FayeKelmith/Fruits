import { useFoxContext } from "../context/FoxContext";

const Image = () => {
  const { url } = useFoxContext();
  return <div>{<img src={url} alt="FOX" /> || <p>...</p>}</div>;
};

export default Image;
