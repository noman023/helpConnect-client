import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-5">
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
