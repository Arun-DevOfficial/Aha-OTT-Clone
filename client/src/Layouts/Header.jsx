import { useState } from "react";
import Data from "../Json/Carousel.json";
import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

export default function Header() {
  const [navigate, setNavigate] = useState(false);

  return (
    <section className="relative">
      <Splide
        options={{
          type: "loop", // Enable infinite loop
          perPage: 1, // Number of slides to show per page
          autoplay: true, // Enable autoplay
          pagination: true, // Enable pagination
          arrows: navigate, // Show navigation arrows based on state
          speed: 600, // Transition speed between slides
        }}
        onMouseOver={() => setNavigate(true)} // Show arrows on mouse over
        onMouseOut={() => setNavigate(false)} // Hide arrows on mouse out
      >
        {Data.images.map((image, index) => (
          <SplideSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.0)", // Adjust brightness here
                height: "700px", // Set a height
              }}
            ></div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="absolute top-0 left-0 right-0 bg-transparent z-10">
        <Navbar />
      </div>
    </section>
  );
}
