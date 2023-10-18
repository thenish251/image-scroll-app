import React from "react";

const ImagesGrid = ({ images }) => {
  return (
    <div className="w-full py-5 space-y-5">
      <div className="w-full h-auto md:max-h-[500px] flex flex-col md:flex-row md:justify-between md:items-start gap-5">
        <img
          src={images[0].download_url}
          alt={images[0].auther}
          className="w-full h-full max-h-[250px] md:max-h-[500px] md:w-4/6 object-cover object-center"
        />

        <div className="h-auto md:h-[480px] flex flex-col gap-5 w-full md:w-2/6">
          <div className="md:h-1/2 w-full">
            <img
              src={images[1].download_url}
              alt={images[1].auther}
              className="h-[250px] lg:h-full w-full object-cover object-center"
            />
          </div>
          <div className="md:h-1/2 w-full">
            <img
              src={images[2].download_url}
              alt={images[2].auther}
              className="h-[250px] lg:h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-5">
        <div className="w-full md:w-1/2">
          <img
            src={images[3].download_url}
            alt={images[3].auther}
            className="h-full max-h-[250px] md:max-h-[350px] w-full object-cover object-center md:h-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={images[4].download_url}
            alt={images[4].auther}
            className="h-full max-h-[250px] md:max-h-[350px]  w-full object-cover object-center md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
