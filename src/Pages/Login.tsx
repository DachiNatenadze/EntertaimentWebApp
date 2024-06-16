import { Link } from "react-router-dom";
import MovieLogo from "../assets/logo.svg";

export default function Login() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <img className="mt-[78px] mb-[48px]" src={MovieLogo} alt="" />
          <div className="Form flex justify-center items-center">
            <div className="loginDiv px-6 py-6 w-[327px]  flex-shrink-0 rounded-[20px] bg-[#161D2F] flex flex-col">
              <h2 className="text-[#FFF] text-[32px] not-italic font-normal leading-[normal] tracking-[-0.5px] mb-[20px]">
                Login
              </h2>
              <form className="flex flex-col gap-3">
                <label htmlFor="Email">
                  <input
                    className="w-[279px] h-[37px] border-b border-[#5A698F] bg-[#161D2F] text-placeholder relative top-[-2px] py-7 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Email address"
                  />
                </label>
                <label htmlFor="Password">
                  <input
                    className="mb-[40px] w-[279px] h-[37px] border-b border-[#5A698F] bg-[#161D2F] text-placeholder relative top-[-2px] py-7 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Password"
                  />
                </label>
              </form>
              <button className="w-[279px] h-[48px] flex-shrink-0 rounded-[6px] bg-[#FC4747] mb-[24px]">
                <h2 className="text-[#FFF] text-center text-[15px] font-normal leading-[normal]">
                  Login to your account
                </h2>
              </button>
              <div className="flex flex-row justify-center items-center gap-2 mb-[15px]">
                <h2 className="text-[#FFF] text-center text-[15px] font-normal leading-[normal]">
                  Don’t have an account?{" "}
                </h2>
                <Link to={`/Signup`}>
                  <span className="text-[#FC4747] text-center text-[15px] font-normal leading-[normal]">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
