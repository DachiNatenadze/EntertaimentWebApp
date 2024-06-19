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
        <div className="px-[16px] w-full">
          <h2 className="text-[#FFF] font-[Outfit] text-[20px] not-italic font-normal leading-[normal] tracking-[-0.312px] mt-[26px] mb-[16px]">
            Trending
          </h2>
          <div className="slider w-full h-fit flex flex-row overflow-scroll gap-4">
            {DataMovies.slice(0, 5).map((item, index) => (
              <div key={index} className="max-xs:w-full">
                <div
                  className="w-[240px] h-[140px] bg-center flex items-center justify-between flex-row rounded-[10px] bg-cover bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_0%,_rgba(0,_0,_0,_0.75)_100%)]"
                  style={{
                    backgroundImage: `url(${item.thumbnail.trending?.small})`,
                  }}>
                  <div className="px-4 mt-[90px] flex flex-col gap-1">
                    <div className="flex flex-row gap-2 items-center justify-center">
                      <span className="text-[#FFF] font-[Outfit] text-[12px] not-italic font-normal leading-[normal]">
                        {item.year}
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none">
                          <path
                            opacity="0.75"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="text-[#FFF] font-[Outfit] text-[12px] not-italic font-normal leading-[normal]">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-[#FFF] font-[Outfit] text-[15px] not-italic font-normal leading-[normal]">
                      {item.title}
                    </h2>
                  </div>
                  <div className="mt-[90px] flex items-center justify-center px-4">
                    <div className="relative">
                      <h2 className="text-[#FFF] relative z-10 font-[Outfit] text-[13px] not-italic font-normal leading-[normal] text-center pt-[3px] w-[34px] h-[21px] flex-shrink-0">
                        {item.rating}
                      </h2>
                      <div className="absolute top-0 left-0 w-[34px] h-[21px] bg-[#FFF] rounded-[10.5px] opacity-[0.10]"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-[#FFF] font-[Outfit] text-[20px] not-italic font-normal leading-[normal] tracking-[-0.312px] ml-[16px] mt-[24px] mb-[24px]">
          Recommended for you
        </h2>
        <div className="w-full flex flex-row justify-center gap-3 flex-wrap px-4">
          {DataMovies.slice(5, 100).map((item, index) => (
            <div key={index} className="bg max-xs:w-full">
              <div
                className="w-[240px] h-[140px] bg-center flex flex-wrap rounded-[10px] bg-cover bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_0%,_rgba(0,_0,_0,_0.75)_100%)] max-md:w-[220px] max-sm:w-[156px] max-sm:h-[100px] max-xs:w-full"
                style={{
                  backgroundImage: `url(${item.thumbnail.regular?.small})`,
                }}></div>
              <div className=" flex flex-col gap-1">
                <div className="flex flex-row gap-2 mt-2">
                  <span className="text-[#FFF] font-[Outfit] text-[12px] not-italic font-normal leading-[normal]">
                    {item.year}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none">
                      <path
                        opacity="0.75"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-[#FFF] font-[Outfit] text-[12px] not-italic font-normal leading-[normal]">
                    {item.category}
                  </span>
                  <h2 className="text-[#FFF] font-[Outfit] text-[15px] not-italic font-normal leading-[normal]">
                    {item.rating}
                  </h2>
                </div>
                <h2 className="text-[#FFF] font-[Outfit] text-[15px] not-italic font-normal leading-[normal] mb-[16px]">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
