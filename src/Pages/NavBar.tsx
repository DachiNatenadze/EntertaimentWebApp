import Logo from "/assets/logo.svg";
import TVSeries from "/assets/icon-nav-tv-series.svg";
import BookMark from "/assets/icon-nav-bookmark.svg";
import Home from "/assets/icon-nav-home.svg";
import Movies from "/assets/icon-nav-movies.svg";
import Avatar from "/assets/image-avatar.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <main className="">
      <div className="flex px-4 py-4 justify-between bg-gray-900 md:mx-[16px] md:my-[16px] md:rounded-xl lg:flex lg:flex-col lg:fixed lg:h-[960px] lg:top-0 lg:w-[92px]">
        <div className="">
          <div className="flex lg:justify-center">
            <img
              className="w-[25px] h-[20px] mt-[3px] lg:w-[32px] lg:h-[25px]"
              src={Logo}
              alt=""
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-7 lg:flex-col  lg:justify-end lg:gap-10 lg:mt-[80px]">
            <Link to={"/Movies"}>
              <img
                className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert "
                src={Home}
                alt=""
              />
            </Link>
            <Link to={"/TypeMovies"}>
              <img
                className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
                src={Movies}
                alt=""
              />
            </Link>
            <Link to={"/TypeTVSeries"}>
              <img
                className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
                src={TVSeries}
                alt=""
              />
            </Link>
            <Link to={"/TypeBookMarked"}>
              <img
                className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
                src={BookMark}
                alt=""
              />
            </Link>
          </div>
            </div>
          <div className="img flex items-center justify-center">
            <img
              className="rounded-[24px] border-[1px] border-[solid] border-[#FFF] w-[24px] h-[24px] flex-shrink-0"
              src={Avatar}
              alt=""
            />
          </div>
      </div>
    </main>
  );
}
