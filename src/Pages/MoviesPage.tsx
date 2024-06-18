import { useContext } from "react";
import NavBar from "./NavBar";
import SearchMovie from "./SearchMovie";
import { MyContext } from "../Layout";

export default function MoviesPage() {
  const { SearchMovieValue, setSearchMovieValue, DataMovies, setDataMovies } =
    useContext(MyContext);
  return (
    <>
      <main>
        <NavBar />
        <SearchMovie />
        <div className="slider w-full h-screen">
          {DataMovies.slice(0, 5).map((item, index) => (
            <div key={index} className="bg">
              <h2>{item.title}</h2>
              <img
                className="w-[60px] h-[60px]"
                src={item.thumbnail.trending?.small}
                alt=""
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
