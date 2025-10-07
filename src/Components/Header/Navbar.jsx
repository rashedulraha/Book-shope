import { Link } from "react-router";
import Container from "../Container";

const Navbar = () => {
  const links = (
    <>
      {/* <li className="mr-2">Home</li>
      <li>About</li> */}

      <Link to={"/"} className="mr-3">
        Home
      </Link>

      <Link to={"/about"}>About</Link>
    </>
  );
  return (
    <>
      <div className="bg-white text-black">
        <Container>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <a className=" font-bold capitalize text-xl">Books Shope</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
