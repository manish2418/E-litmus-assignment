import React from "react";

function Article1() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover rounded-3xl object-center rounded"
              alt="hero"
              src="https://m.media-amazon.com/images/I/81S9nEpO9KL._SL1500_.jpg"
            />
          </div>
          <div className="lg:flex-grow h-[71vh] bg-gray-100 rounded-3xl m-1.5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              What is Puzzle?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              A puzzle is a game, problem, or toy that tests a person's
              ingenuity or knowledge. In a puzzle, the solver is expected to put
              pieces together (or take them apart) in a logical way, in order to
              arrive at the correct or fun solution of the puzzle. There are
              different genres of puzzles, such as crossword puzzles,
              word-search puzzles, number puzzles, relational puzzles, and logic
              puzzles. The academic study of puzzles is called enigmatology.
            </p>
            <div>
              <h3>Clues</h3>
              <ol className="list-decimal	">
                <li>Answer starting letter start with d</li>
                <li>Answer consist of 11 letter</li>
                <li>Answer ends with letter t</li>
                <li>Answer consist 3 times e letter</li>
                <li>Trying to find out answer on problem statement page</li>
              </ol>
            </div>

            <p>
              Your answer for the problem is the third antonym word of puzzle
              which is present in the below link button
            </p>
            <a
              className="text-blue-600"
              target="_blank"
              href="https://thesaurus.yourdictionary.com/puzzle"
              rel="noreferrer"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article1;
