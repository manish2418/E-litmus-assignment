import { React, useEffect, useState } from "react";
import axios from "axios";
function Content(props) {
  console.log(props);
  const name = props.user?.email.split(" ")[0].toLocaleLowerCase();
  var val1 = props.user?.count.ans1;
  var val2 = props.user?.count.ans2;
  var val3 = props.user?.count.ans3;
  var answer1 = props.user?.answer.ans_1;
  var answer2 = props.user?.answer.ans_2;
  var answer3 = props.user?.answer.ans_3;

  const [check, setCheck] = useState({
    check1: val1 > 0 ? "invisible" : "visible",
    check2: val2 > 0 ? "invisible" : "visible",
    check3: val3 > 0 ? "invisible" : "visible",
  });

  const [incorrect, setincorrect] = useState(0);
  const [data, setdata] = useState({
    ans_1: answer1,
    ans_2: answer2,
    ans_3: answer3,
  });
  const [data2, setdata2] = useState({
    ans1_count: val1,
    ans2_count: val2,
    ans3_count: val3,
  });
  const { ans_1, ans_2, ans_3 } = data;
  const { check1, check2, check3 } = check;
  const { ans1_count, ans2_count, ans3_count } = data2;
  const handleChange = async (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (ans1_count === 1) {
      console.log("helo1");
      setCheck({ ...check, check1: "invisible" });
    }
    if (ans2_count === 1) {
      console.log("helo2");
      setCheck({ ...check, check2: "invisible" });
    }
    if (ans3_count === 1) {
      console.log("helo3");
      setCheck({ ...check, check3: "invisible" });
    }
    if (name) {
      axios.post(
        "http://localhost:5043/auth/check",
        {
          ans1: ans1_count,
          ans2: ans2_count,
          ans3: ans3_count,
          email: name,
          ans_1: ans_1,
          ans_2: ans_2,
          ans_3: ans_3,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }, [
    ans1_count,
    ans2_count,
    ans3_count,
    check1,
    check2,
    check3,
    val1,
    val2,
    val3,
  ]);

  const handleSubmit = async (e) => {
    //PUZZLE 1
    let x = 0;
    if (ans_1 == "development") {
      x = 1;
      setCheck({ ...check, check1: "invisible" });
      setdata2({
        ...data2,
        ans1_count: 1,
      });
      setdata({ ...data, ans_1: "completed" });
    }

    //PUZZLE 2
    else if (ans_2 == "Y2ljYWRhIDMzMDEgZXZlcnl3aGVyZQ==") {
      x = 1;

      setCheck({ ...check, check2: "invisible" });
      setdata2({
        ...data2,

        ans2_count: 1,
      });
      setdata({ ...data, ans_2: "completed" });
    }

    //PUZZLE 3
    else if (ans_3 == "26") {
      x = 1;
      setCheck({ ...check, check3: "invisible" });
      setdata2({
        ...data2,

        ans3_count: 1,
      });

      setdata({ ...data, ans_3: "completed" });
    }

    // if (ans2 == "Manish") {
    // }
    if (x === 0) {
      setincorrect(incorrect - 1);
      alert("Incorrect Answer");
    }
    if (incorrect === -2) {
      alert("You Failed the Puzzle");
      setincorrect(0);
      setCheck({
        ...check,
        check1: "visible",
        check2: "visible",
        check3: "visible",
      });
      setdata2({ ...data, ans1_count: 0, ans2_count: 0, ans3_count: 0 });
      setdata({ ...data, ans_1: "", ans_2: "", ans_3: "" });
    }
  };

  // console.log(correct + " " + incorrect);
  return (
    <>
      <section class={`${check1} text-gray-600 body-font relative m-3.5`}>
        <div class="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2 ">
          <div class="flex flex-col text-center w-full mb-12  ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Game Number 1
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Gaming Instruction
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto ">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 ">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-black">
                    Problem 1: Search answer in given problem statement!
                  </label>
                  <br />
                  <br />
                  <a class="text-blue-600" target="_blank" href="/article1">
                    Problem Statement
                  </a>
                </div>
              </div>
              <div class={`${check1 == "visible" ? "invisible" : "visible"}`}>
                Task 1 Completed Congrats
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Answer
                  </label>
                  <input
                    type="text"
                    id="ans-text"
                    name="ans_1"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={ans_1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
        <section class={`${check2} text-gray-600 body-font relative`}>
          <div class="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Game Number 2
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Gaming Instruction
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 ">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-black">
                      Problem 2: Search answer in given problem statement!
                    </label>
                    <br />
                    <br />
                    <a class="text-blue-600" target="_blank" href="/article2">
                      Problem Statement
                    </a>
                  </div>
                </div>
                <div class={`${check2 == "visible" ? "invisible" : "visible"}`}>
                  Task 2 Completed Congrats
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Answer
                    </label>
                    <input
                      type="text"
                      id="ans-text"
                      name="ans_2"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={ans_2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
        <section class={`${check3} text-gray-600 body-font relative m-3.5`}>
          <div class="container px-5 py-24 mx-auto bg-gray-100 rounded-3xl opacity-80 w-1/2">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Game Number 3
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Gaming Instruction
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 ">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-black">
                      Problem 3: Search answer in given problem statement!
                    </label>
                    <br />

                    <br />
                    <a class="text-blue-600" target="_blank" href="/article3">
                      Problem Statement
                    </a>
                  </div>
                </div>
                <div class={`${check3 == "visible" ? "invisible" : "visible"}`}>
                  Task 3 Completed Congrats
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Answer
                    </label>
                    <input
                      type="text"
                      id="ans-text"
                      name="ans_3"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={ans_3}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
