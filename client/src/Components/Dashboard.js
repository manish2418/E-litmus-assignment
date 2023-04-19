import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Dashboard(props) {
  const val1 = props.user?.count.ans1;
  const val2 = props.user?.count.ans2;
  const val3 = props.user?.count.ans3;
  const names = props.user?.name === undefined ? "User" : props.user.name;
  const email =
    props.user?.email === undefined ? "User@gmail.com" : props.user?.email;
  const answer = (val1 + val2 + val3 + 0) / 3;
  console.log(props);
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
              <h1 class="sm:text-3xl  text-2xl font-medium title-font text-white ">
                PROGRESS DASHBOARD
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3 m-auto">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Progress Report
                    </h2>
                  </div>
                  <h3 class="text-gray-900 text-lg title-font font-medium">
                    {names} :- {email}
                  </h3>
                  <div class="flex-grow">
                    {/* <p class="leading-relaxed text-base">Porgress Report</p> */}
                    <br />
                    <ProgressBar completed={Math.round(answer * 100)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;