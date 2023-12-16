import menu from "../src/images/icon-menu.svg";
import hero from "../src/images/image-hero-mobile.png";
import Hero from "../src/images/image-hero-desktop.png";
import audioPhile from "../src/images/client-audiophile.svg";
import databiz from "../src/images/client-databiz.svg";
import meet from "../src/images/client-meet.svg";
import maker from "../src/images/client-maker.svg";

import "./App.css";

function App() {
  return (
    <div className=" bg-AlmostWhite w-screen">
      <header className="">
        <div className=" flex justify-between items-center p-5">
          <div className="flex gap-20 items-center">
            <p className=" font-extrabold text-3xl font-Epilogue">snap</p>
            <nav className="hidden  lg:block">
              <ul className="flex">
                <li>Features</li>
                <li>Company</li>
                <li>Careers</li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center gap-20">
            <p>Login</p>
            <p>Register</p>
          </div>
          <div className="lg:hidden">
            <img src={menu} alt="menu" />
          </div>
        </div>
      </header>
      <main className="lg:flex">
        <div className=" flex justify-center  lg:hidden">
          <img className="w-screen" src={hero} alt="hero" />
        </div>
        <div className=" flex flex-col gap-5 text-center px-2 py-10">
          <h1 className=" font-Epilogue font-extrabold text-4xl">
            Make remote work
          </h1>
          <p className=" font-Epilogue text-[18px]">
            Get your team in sync, no matter your location. Streamline process,
            create team rituals, and watch productivity soar.
          </p>
          <div className="flex justify-center">
            <button className=" w-32 rounded-xl h-11 bg-black text-white">
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
          <img src={Hero} alt="hero" />
        </div>
      </main>
    </div>
  );
}

export default App;
