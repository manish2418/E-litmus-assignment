import React from "react";

function Article2() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://i.insider.com/5696bf1ee6183e26008b937f?width=761&format=jpeg"
            />
          </div>
          <div class="lg:flex-grow bg-gray-100 rounded-3xl m-1.5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Are you thinking about Cicada3301?
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Cicada 3301 is a nickname given to three sets of puzzles posted
              under the name "3301" online between 2012 and 2014. The first
              puzzle started on January 4, 2012, on 4chan and ran for nearly a
              month. A second round began one year later on January 4, 2013, and
              then a third round following the confirmation of a fresh clue
              posted on Twitter on January 4, 2014. The third puzzle has yet to
              be solved. The stated intent was to recruit "intelligent
              individuals" by presenting a series of puzzles to be solved; no
              new puzzles were published on January 4, 2015. A new clue was
              posted on Twitter on January 5, 2016. Cicada 3301 posted their
              last verified OpenPGP-signed message in April 2017, denying the
              validity of any unsigned puzzle.
            </p>
            <div>
              <h3>Clues</h3>
              <ol class="list-decimal	">
                <li>3301 is Something want to say</li>
                <li>Read the Question carefully</li>
                <li>Use provide page features </li>
                <li>Think out of the box</li>
                <li>Try to encode some hint provided in problem statement</li>
              </ol>
            </div>

            <p>
              Decode the text "cicada 3301 everywhere" into Base64 from below
              link
            </p>

            <a
              class="text-blue-600"
              target="_blank"
              href="https://base64.guru/converter/encode/text"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article2;
