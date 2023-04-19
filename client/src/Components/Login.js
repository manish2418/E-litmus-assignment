import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LoadingSpinner from "./Spinner";
const Login = ({ user, getUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialRef = useRef(true);
  if (user != null) {
    navigate("/games", { replace: true });
  }
  useEffect(() => {
    if (!initialRef.current) {
      return;
    }
    initialRef.current = false;
    getUser();
  }, [getUser, user]);

  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const { email, password, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      setData({ ...data, error: null });
      const res = await axios.post(
        "https://e-litmus-assignment.vercel.app/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data);
      localStorage.setItem("token", res.data.token);

      getUser();
    } catch (err) {
      setLoading(false);
      setData({ ...data, error: err.response.data.error });
      console.log(err);
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"></div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {error ? <p className="text-danger">{error}</p> : null}
            <button
              onClick={handleSubmit}
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onLoad={() => {
                if (user) {
                  navigate("/");
                }
              }}
              disabled={loading}
            >
              Login
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Already a user?{" "}
              <a href="/register" className="text-red-500">
                Register Here
              </a>
            </p>
            {loading ? <LoadingSpinner /> : ""}
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
