// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import MovieLogo from "../assets/logo.svg";
import { useContext } from "react";
import { MyContext } from "../Layout";

export default function Login() {
  const Navigate = useNavigate();
  const {
    EmailAddress,
    setEmailAddress,
    Password,
    setPassword,
    ShowError,
    setShowError,
  } = useContext(MyContext);
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (EmailAddress.length == 0 || Password.length == 0) {
      setShowError(true);
    }
    const DataOfUsers = JSON.parse(localStorage.getItem("DatasOfUser") || "[]");
    const userInfo = DataOfUsers.find(
      (userInfo: { EmailAddress: string; Password: string }) =>
        userInfo.EmailAddress === EmailAddress && userInfo.Password === Password
    );
    console.log(DataOfUsers);
    if (userInfo) {
      Navigate("/Movies");
    }
  };

  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <img
            className="mt-[78px] mb-[48px]"
            src={MovieLogo}
            alt="Movie Logo"
          />
          <div className="Form flex justify-center items-center relative">
            <div className="loginDiv px-6 py-6 w-[327px] flex-shrink-0 rounded-[20px] bg-[#161D2F] flex flex-col">
              <h2 className="text-[#FFF] text-[32px] not-italic font-normal leading-[normal] tracking-[-0.5px] mb-[20px]">
                Login
              </h2>
              <form className="flex flex-col relative">
                <label htmlFor="Email">
                  <input
                    className="w-[279px] h-[37px] border-b border-[#5A698F] bg-[#161D2F] text-placeholder relative top-[-2px] py-7 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#FFF]"
                    type="text"
                    placeholder="Email address"
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  {ShowError && EmailAddress.length === 0 && (
                    <h2 className="absolute bottom-[19px] left-[180px] text-[#FC4747] font-[Outfit] text-[13px] not-italic font-normal leading-[normal]">
                      Can’t be empty
                    </h2>
                  )}
                </label>
              </form>
              <form className="flex flex-col relative mb-[40px]">
                <label htmlFor="Password">
                  <input
                    className="relative w-[279px] h-[37px] border-b border-[#5A698F] bg-[#161D2F] text-placeholder top-[-2px] py-7 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#FFF]"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {ShowError && Password.length === 0 && (
                    <h2 className="absolute bottom-[19px] left-[180px] text-[#FC4747] font-[Outfit] text-[13px] not-italic font-normal leading-[normal]">
                      Can’t be empty
                    </h2>
                  )}
                </label>
              </form>

              <button
                className="w-[279px] h-[48px] flex-shrink-0 rounded-[6px] bg-[#FC4747] mb-[24px]"
                onClick={handleChange}>
                <h2 className="text-[#FFF] text-center text-[15px] font-normal leading-[normal]">
                  Login to your account
                </h2>
              </button>
              <div className="flex flex-row justify-center items-center gap-2 mb-[15px]">
                <h2 className="text-[#FFF] text-center text-[15px] font-normal leading-[normal]">
                  Don’t have an account?
                </h2>
                <Link to="/">
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
