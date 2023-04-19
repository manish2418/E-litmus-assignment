import React from "react";

function Article3() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover  h-[76vh] rounded-3xl object-center rounded"
              alt="hero"
              src="https://www.wikihow.com/images/thumb/8/8d/Play-Hide-and-Seek-Tiggy-Step-3-Version-3.jpg/v4-460px-Play-Hide-and-Seek-Tiggy-Step-3-Version-3.jpg.webp"
            />
          </div>
          <div class="lg:flex-grow bg-gray-100 rounded-3xl m-1.5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Let's See what is Hide&Seek Really?
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Hide-and-seek (sometimes known as hide-and-go-seek) is a popular
              children's game in which at least two players (usually at least
              three)conceal themselves in a set environment, to be found by one
              or more seekers. The game is played by one chosen player
              (designated as being "it") counting to a predetermined number with
              eyes closed while the other players hide. After reaching this
              number, the player who is "it" calls "Ready or not, here I come!"
              or "Coming, ready or not!" and then attempts to locate all
              concealed players A puzzle is a game, problem, or toy that tests a
              person's ingenuity or knowledge. In a puzzle, the solver is
              expected to put pieces together (or take them apart) in a logical
              way, in order to arrive at the correct or fun solution of the
              puzzle. There are different genres of puzzles, such as crossword
              puzzles, word-search puzzles, number puzzles, relational puzzles,
              and logic puzzles. The academic study of puzzles is called
              enigmatology.
            </p>
            <div>
              <h3>Clues</h3>
              <ol class="list-decimal	">
                <li>Everything is clear when your vision is strong</li>
                <li>Exisiting thing never gonna hide</li>
                <li>See the things in diffrent way</li>
                <li>Everything is in front of you</li>
                <li>Just Calculate it</li>
              </ol>
            </div>

            <p>
              Two find your third problem answer just normally visit the webiste
              whose link is given below you will see nothing in page but when
              you select all or you can use ctrl+a in your keyboard you will
              find your answer.
            </p>
            <a
              class="text-blue-600"
              target="_blank"
              href="https://hide-seek.vercel.app/"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article3;
