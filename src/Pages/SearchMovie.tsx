import { useContext } from "react";
import { MyContext } from "../Layout";
import Searchimg from "/assets/icon-search.svg";

export default function SearchMovie() {
  const { SearchMovieValue, setSearchMovieValue } = useContext(MyContext);
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
              onChange={(e) => {
                setSearchMovieValue(e.target.value);
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
