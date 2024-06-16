import Logo from "../assets/logo.svg";
import TVSeries from "../assets/icon-nav-tv-series.svg";
import BookMark from "../assets/icon-nav-bookmark.svg";
import Home from "../assets/icon-nav-home.svg";
import Movies from "../assets/icon-nav-movies.svg";
import Avatar from "../assets/image-avatar.png";
export default function NavBar() {
  return (
    <main>
      <div className="flex px-4 py-4 justify-between bg-gray-900 ">
        <div className="">
          <img className="w-[25px] h-[20px] mt-[3px]" src={Logo} alt="" />
        </div>
        <div className="flex flex-row items-center justify-center gap-7">
          <img
            className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
            src={Home}
            alt=""
          />
          <img
            className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
            src={Movies}
            alt=""
          />
          <img
            className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
            src={TVSeries}
            alt=""
          />
          <img
            className="h-[16px] transform transition duration-300 hover:scale-110 hover:invert"
            src={BookMark}
            alt=""
          />
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
