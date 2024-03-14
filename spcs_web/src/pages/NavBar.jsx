import { Link } from "react-router-dom";
// import "material-icons/iconfont/material-icons.css";
// import shrine from "../assets/logo/shrine-logo.png";
function NavBar() {
  return (
    <header className="sticky z-10 top-0">
      <nav className="border-gray-200 bg-gray-50 dark:dark:bg-[#7F1D1D] dark:border-gray-700 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src={shrine} className="h-8" alt="Shrine Logo" /> */}
            <span className="self-center text-2xl  whitespace-nowrap dark:text-white  font-gelasio font-bold">
              San Pedro Calungsod Shrine
            </span>
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  "
                  aria-current="page"
                >
                  <span className="text-2xl font-gelasio font-bold">
                    <Link to="/"> Home</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#996515] dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-2xl font-gelasio font-bold">
                    <Link to="/about"> Prayer Devotion</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-2xl font-gelasio font-bold">
                    <Link to="/contact"> Contact Us</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:[#996515] dark:text-white md:dark:hover:text-[#996515] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-2xl font-gelasio font-bold">
                    <Link to="/merchandise"> Merchandise</Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
