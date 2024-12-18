import { useState, useEffect } from "react";
import Preloader from "../../shared/Preloader/Preloader";

const ImageComponent = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {!isLoaded && <h1>Загрузка...</h1>}
      <img
        src={src}
        alt="image"
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
};

export default ImageComponent