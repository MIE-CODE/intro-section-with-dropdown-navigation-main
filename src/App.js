import menu from "../src/images/icon-menu.svg";
import hero from "../src/images/image-hero-mobile.png";
import Hero from "../src/images/image-hero-desktop.png";
import audioPhile from "../src/images/client-audiophile.svg";
import databiz from "../src/images/client-databiz.svg";
import meet from "../src/images/client-meet.svg";
import maker from "../src/images/client-maker.svg";
import arrowDown from "../src/images/icon-arrow-down.svg";

import "./App.css";

function App() {
  return (
    <div className=" relative bg-AlmostWhite w-screen">
      <header className="fixed top-0 bg-white w-screen">
        <div className=" flex justify-between items-center p-5 lg:px-10">
          <div className="flex gap-20 items-center">
            <p className=" font-extrabold text-3xl font-Epilogue">snap</p>
            <nav className="hidden  lg:block ">
              <ul className="flex gap-16">
                <li className="flex justify-center items-center gap-2">
                  {" "}
                  <p>Features</p>{" "}
                  <img className="w-3 h-2" src={arrowDown} alt="dropdown" />{" "}
                </li>
                <li className="flex justify-center items-center gap-2">
                  {" "}
                  <p>Company</p>{" "}
                  <img className="w-3 h-2" src={arrowDown} alt="dropdown" />{" "}
                </li>

                <li>Careers</li>
                <li>About</li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center gap-14">
            <p>Login</p>
            <button className=" w-32 rounded-2xl border border-black  h-12 ">
              {" "}
              <a href="www.github/MIE-CODE">Register</a>
            </button>
          </div>
          <div className="lg:hidden">
            <img src={menu} alt="menu" />
          </div>
        </div>
      </header>
      <main className="mt-20 lg:mt-[200px] lg:flex lg:justify-center lg:gap-[300px] lg:items-center">
        <div className=" flex justify-center  lg:hidden">
          <img className="w-screen" src={hero} alt="hero" />
        </div>
        <div className=" flex flex-col gap-5 text-center lg:gap-[50px] lg:text-left lg:w-[500px] px-2 py-10">
          <h1 className=" font-Epilogue font-extrabold text-4xl lg:text-7xl">
            Make remote work
          </h1>
          <p className=" break-keep space-x-0 font-Epilogue text-[18px]">
            Get your team in sync, no matter your location. Streamline process,
            create team rituals, and watch productivity soar.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className=" w-40 rounded-2xl border border-black font-bold text-lg hover:text-black hover:bg-white h-14 bg-black text-white">
              {" "}
              Learn more
            </button>
          </div>
          <div className=" flex justify-center">
            <ul className="flex gap-7 justify-between pt-5 pb-10">
              <li>
                <img src={databiz} alt="databiz" />
              </li>
              <li>
                <img src={audioPhile} alt="audiophile" />
              </li>
              <li>
                <img src={meet} alt="meet" />
              </li>
              <li>
                <img src={maker} alt="maker" />
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="w-[500px]" src={Hero} alt="hero" />
        </div>
      </main>
    </div>
  );
}

export default App;
