import { useContext } from "react";
import { MyContext } from "../Layout";
import Searchimg from "/assets/icon-search.svg";
import data from "../data.json";

export default function SearchMovie() {
  const { setDataMoviesCopy, SearchMovieValue, setSearchMovieValue } =
    useContext(MyContext);

  const FilterPost = (e) => {
    const value = e.target.value;
    setSearchMovieValue(value);
    if (!SearchMovieValue) {
      return setDataMoviesCopy(data);
    }
    const filteredMovies = data.filter((movies) => {
      return movies.title.toLowerCase().includes(value.toLowerCase());
    });
    setDataMoviesCopy(filteredMovies);
  };

  return (
    <>
      <main>
        <section>
          <div className="flex flex-row gap-4 mt-[24px] ml-[16px] text-[#FFF] text-[16px] not-italic  leading-[normal] outline-none">
            <img src={Searchimg} alt="" />
            <input
              className="w-[250px] bg-[#10141E]"
              placeholder="Search for movies or TV series"
              type="text"
              value={SearchMovieValue}
              onChange={FilterPost}
            />
          </div>
        </section>
      </main>
    </>
  );
}
