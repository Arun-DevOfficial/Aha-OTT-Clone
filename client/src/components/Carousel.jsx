import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MovieCard from "../components/MovieCard";

export default function Carsouel() {
  const movies = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    // Add a sample image URL here for the background (replace with actual movie poster URLs)
    image: `https://via.placeholder.com/300x300?text=Movie+${index + 1}`,
  }));

  return (
    <>
      <Splide
        options={{
          type: "loop",
          perPage: 10,
          perMove: 1,
          gap: "12px",
          pagination: false,
          arrows: false,
          autoplay: false,
          breakpoints: {
            640: {
              perPage: 2,
            },
            1024: {
              perPage: 4,
            },
          },
        }}
        className="py-8"
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <div className="w-fit rounded-lg shadow-lg">
              <MovieCard movie={movie} />
              <h3 className="font-semibold text-lg text-white mt-2 px-2">
                3 Roses
              </h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
