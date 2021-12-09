// console.log(newNormalizeMovies);

// // let result = newNormalizeMovies.title.

// // console.log(result);
// let searchedMovies = []

// newNormalizeMovies.forEach(function (moviesItem){
//   let check = moviesItem.title.match(searchMovieText);

//   if(check){
//     searchedMovies.push(moviesItem)
//   }

// })

let avengersMarvel = movies.slice(0, 40);

let elCinema = document.querySelector("#cinema");
let elFilms = document.querySelector("#films");
let elSearchText = document.querySelector("#exampleInputText");
let elSearchNumber = document.querySelector("#exampleInputNumber");

elCinema.innerHTML = null;

let newNormalizeMovies = avengersMarvel.map((movieItem) => ({
  title: movieItem.Title.toString(),
  categories: movieItem.Categories,
  rating: movieItem.imdb_rating,
  year: movieItem.movie_year,
  imageUrl: `http://i3.ytimg.com/vi/${movieItem.ytid}/maxresdefault.jpg`,
  youtubeUrl: `https://www.youtube.com/watch?v=${movieItem.ytid}`,
}));
console.log(newNormalizeMovies);

function renderMovies(moviesArr, cinema) {
  moviesArr.forEach((movie) => {
    let newBlock = document.createElement("div");
    let newBlocktTag = document.createElement("div");
    let newBlocktTagBtn = document.createElement("div");
    let newImage = document.createElement("img");
    let newHeader = document.createElement("h4");
    let newParagraphYear = document.createElement("p");
    let newParagraphStar = document.createElement("p");
    let newBtnLink = document.createElement("a");
    let newBtnFirst = document.createElement("button");
    let newBtnSecond = document.createElement("button");

    newBlock.setAttribute("class", "bg-white mb-3");

    newImage.setAttribute("class", "rounded-top");
    newImage.setAttribute("src", movie.imageUrl);
    newImage.setAttribute("alt", "this image");
    newImage.setAttribute("width", "350");
    newImage.setAttribute("height", "230");

    newBlocktTag.setAttribute("class", "border p-3");

    newHeader.setAttribute("class", "h4 text-sucsses");
    newHeader.textContent = movie.title;

    newParagraphYear.setAttribute("class", "bg-white");
    newParagraphYear.textContent = "Year: " + movie.year;

    newParagraphStar.setAttribute("class", "bg-white");
    newParagraphStar.textContent = "Star: " + movie.rating;

    newBlocktTagBtn.setAttribute(
      "class",
      "d-flex align-items-center justify-content-between"
    );

    newBtnLink.setAttribute("class", "btn  btn-outline-info");
    newBtnLink.setAttribute("href", movie.youtubeUrl);
    newBtnLink.textContent = "Watch trailer";

    newBtnFirst.setAttribute("class", "btn  btn-outline-info");
    newBtnFirst.textContent = "More info";

    newBtnSecond.setAttribute("class", "btn  btn-outline-info");
    newBtnSecond.textContent = "Bookmark";

    cinema.appendChild(newBlock);
    newBlock.appendChild(newImage);
    newBlock.appendChild(newBlocktTag);

    newBlocktTag.appendChild(newHeader);
    newBlocktTag.appendChild(newParagraphYear);
    newBlocktTag.appendChild(newParagraphStar);
    newBlocktTag.appendChild(newBlocktTagBtn);

    newBlocktTagBtn.appendChild(newBtnLink);
    newBlocktTagBtn.appendChild(newBtnFirst);
    newBlocktTagBtn.appendChild(newBtnSecond);
  });
}

renderMovies(newNormalizeMovies, elCinema);

elSearchText.addEventListener("input", (evt) => {
  evt.preventDefault();

  let addSearchMovie = [];

  var loremMovie = elSearchText.value.trim();

  let searchMovieText = new RegExp(loremMovie, "gi");

  newNormalizeMovies.forEach((movieItem) => {
    let searchResult = movieItem.title.match(searchMovieText);
    if (searchResult) {
      addSearchMovie.push(movieItem);
    }
  });

  if(addSearchMovie.length > 0) {
    elCinema.innerHTML = null;
    renderMovies(addSearchMovie, elCinema);
  } else {
    elCinema.innerHTML = "Bunday nomli kino yo'q!";
  }

});
