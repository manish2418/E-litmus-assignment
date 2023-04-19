import { React } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    props.setUser(null);
    navigate("/login");
  };
  console.log(props);
  const name = props.user?.name.split(" ")[0].toLocaleLowerCase();
  const isLoggedIn = !!name;
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl text-white">-Puzzle Buzzer-</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-white text-base justify-center">
          <a className="mr-5 hover:text-yellow-100	" href="/games">
            Games
          </a>
          <a className="mr-5 hover:text-yellow-100" href="/article1">
            Problem1
          </a>
          <a className="mr-5 hover:text-yellow-100" href="/article2">
            Problem2
          </a>
          <a className="mr-5 hover:text-yellow-100	" href="/article3">
            Problem3
          </a>
        </nav>
        <p className="mr-5 text-red-500 hover:text-red-600">Welcome {name}</p>
        <button
          onClick={logout}
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          {!isLoggedIn ? "Login" : "Logout"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
