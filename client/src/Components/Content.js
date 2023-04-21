import { React, useState } from "react";

import axios from "axios";
function Content(props) {
  const name = props.user?.email?.split(" ")[0].toLocaleLowerCase();

  const [values, setValues] = useState({
    val1: props.user?.count?.ans1 || 0,
    val2: props.user?.count?.ans2 || 0,
    val3: props.user?.count?.ans3 || 0,
  });
  const { val1, val2, val3 } = values;

  const [Answer, setAnswer] = useState({
    answer1: props.user?.answer?.ans_1 || "",
    answer2: props.user?.answer?.ans_2 || "",
    answer3: props.user?.answer?.ans_3 || "",
  });
  const { answer1, answer2, answer3 } = Answer;

  const [incorrect, setincorrect] = useState(0);
  const [data, setdata] = useState({
    ans_1: answer1,
    ans_2: answer2,
    ans_3: answer3,
  });
  const { ans_1, ans_2, ans_3 } = data;

  const handleChange = async (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //PUZZLE 1
    let x = 0;
    if (ans_1 === "development") {
      x = 1;

      axios.post(
        "http://localhost:5043/auth/check",
        {
          ans1: 1,
          ans2: val2,
          ans3: val3,
          email: name,
          ans_1: "completed",
          ans_2: answer2,
          ans_3: answer3,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAnswer({ ...Answer, answer1: "completed" });
      setValues({ ...values, val1: 1 });
      setdata({ ...data, ans_1: "completed" });
    }

    //PUZZLE 2
    else if (ans_2 === "Y2ljYWRhIDMzMDEgZXZlcnl3aGVyZQ===") {
      x = 1;

      axios.post(
        "http://localhost:5043/auth/check",
        {
          ans1: val1,
          ans2: 1,
          ans3: val3,
          email: name,
          ans_1: answer1,
          ans_2: "completed",
          ans_3: answer3,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAnswer({ ...Answer, answer2: "completed" });
      setValues({ ...values, val2: 1 });

      setdata({ ...data, ans_2: "completed" });
    }

    //PUZZLE 3
    else if (ans_3 === "26") {
      x = 1;
      axios.post(
        "http://localhost:5043/auth/check",
        {
          ans1: val1,
          ans2: val2,
          ans3: 1,
          email: name,
          ans_1: answer1,
          ans_2: answer2,
          ans_3: "completed",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAnswer({ ...Answer, answer3: "completed" });
      setValues({ ...values, val3: 1 });

      setdata({ ...data, ans_3: "completed" });
    }

    // if (ans2 === "Manish") {
    // }
    if (x === 0) {
      setincorrect(incorrect - 1);
      alert("Incorrect Answer");
    }
    if (incorrect === -2) {
      alert("You Failed the Puzzle");
      setincorrect(0);
      axios.post(
        "https://e-litmus-assignment-production.up.railway.app/auth/check",
        {
          ans1: 0,
          ans2: 0,
          ans3: 0,
          email: name,
          ans_1: "",
          ans_2: "",
          ans_3: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setdata({ ...data, ans_1: "", ans_2: "", ans_3: "" });
    }
  };
  console.log(values);
  return (
    <>
      <section
        className={`${
          answer1 === "completed" ? "invisible" : "visible"
        } text-gray-600 body-font relative m-3.5`}
      >
        <div className="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2 ">
          <div className="flex flex-col text-center w-full mb-12  ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Game Number 1
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Gaming Instruction
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 ">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-black"
                  >
                    Problem 1: Search answer in given problem statement!
                  </label>
                  <br />
                  <br />
                  <a className="text-blue-600" target="_blank" href="/article1">
                    Problem Statement
                  </a>
                </div>
              </div>

              <div
                className={`${
                  ans_1 === "completed" ? "visible" : "invisible"
                } text-white`}
              >
                Task 1 Completed Congrats
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    id="ans-text"
                    name="ans_1"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={ans_1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second Game */}
      <>
        <section
          className={`${
            ans_2 === "completed" ? "invisible" : "visible"
          } text-gray-600 body-font relative m-3.5`}
        >
          <div className="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Game Number 2
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Gaming Instruction
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 ">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black"
                    >
                      Problem 2: Search answer in given problem statement!
                    </label>
                    <br />
                    <br />
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href="/article2"
                    >
                      Problem Statement
                    </a>
                  </div>
                </div>
                <div
                  className={`${
                    ans_2 === "completed" ? "visible" : "invisible"
                  } text-white`}
                >
                  Task 2 Completed Congrats
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Answer
                    </label>
                    <input
                      type="text"
                      id="ans-text"
                      name="ans_2"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={ans_2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* Third Game */}
      <>
        <section
          className={`${
            ans_3 === "completed" ? "invisible" : "visible"
          } text-gray-600 body-font relative m-3.5`}
        >
          <div className="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Game Number 3
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Gaming Instruction
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 ">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black"
                    >
                      Problem 3: Search answer in given problem statement!
                    </label>
                    <br />

                    <br />
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href="/article3"
                    >
                      Problem Statement
                    </a>
                  </div>
                </div>
                <div
                  className={`${
                    ans_3 === "completed" ? "visible" : "invisible"
                  } text-white`}
                >
                  Task 3 Completed Congrats
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Answer
                    </label>
                    <input
                      type="text"
                      id="ans-text"
                      name="ans_3"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={ans_3}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Content;
