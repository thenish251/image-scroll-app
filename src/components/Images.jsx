import React, { useState, useEffect } from "react";
import ImagesGrid from "./ImagesGrid";

const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const ApiUrl = `https://picsum.photos/v2/list?page=${page}&limit=5`;

  const fetchImages = async () => {
    try {
      const response = await fetch(ApiUrl);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const loadMore = (direction) => {
    if (direction === "next") {
      setPage(page + 1);
    } else if (direction === "prev" && page > 1) {
      setPage(page - 1);
    }

    // Scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const btnStyle =
    "bg-blue-500 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 text-sm";

  return (
    <div className="py-5">
      <div className="border border-t-2 border-gray-200" />
      {images.length > 0 && <ImagesGrid images={images} />}
      <div className="flex justify-between mt-2 lg:mt-4">
        <button
          onClick={() => loadMore("prev")}
          className={btnStyle}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => loadMore("next")} className={btnStyle}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Images;
