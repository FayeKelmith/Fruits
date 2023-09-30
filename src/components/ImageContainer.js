import Image from "./Image";

const ImageContainer = () => {
  return (
    <div className="bg-black grid grid-cols-3 w-full overflow-hidden">
      <Image />
      <Image />
      <Image />
    </div>
  );
};

export default ImageContainer;
