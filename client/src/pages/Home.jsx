import Header from "../Layouts/Header";
import MovieList from "../Layouts/MovieList";

export default function Home() {
  return (
    <section>
      <Header />
      <div className="w-[95%] mx-auto py-16">
        <MovieList />
      </div>
    </section>
  );
}
