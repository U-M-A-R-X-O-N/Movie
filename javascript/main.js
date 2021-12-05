let avengersMarvel = movies.slice(20, 40);

let elCinema = document.querySelector("#cinema");

elCinema.innerHTML = null;

for (let i = 0; i <= avengersMarvel.length; i++) {
  let newBlock = document.createElement("div");
  let newBlocktTag = document.createElement("div");
  let newBlocktTagBtn = document.createElement("div");
  let newImage = document.createElement("img");
  let newHeader = document.createElement("h5");
  let newParagraphYear = document.createElement("p");
  let newParagraphStar = document.createElement("p");
  let newBtnLink = document.createElement("a");
  let newBtnFirst = document.createElement("button");
  let newBtnSecond = document.createElement("button");

  newBlock.setAttribute("class", "bg-white mb-3");

  newImage.setAttribute("class", "rounded-top");
  newImage.setAttribute(
    "src",
    `http://i3.ytimg.com/vi/${avengersMarvel[i].ytid}/maxresdefault.jpg`
  );
  newImage.setAttribute("alt", "this image");
  newImage.setAttribute("width", "350");
  newImage.setAttribute("height", "230");

  newBlocktTag.setAttribute("class", "border p-3");

  newHeader.setAttribute("class", "h5 text-sucsses");
  newHeader.textContent = avengersMarvel[i].Title;

  newParagraphYear.setAttribute("class", "bg-white");
  newParagraphYear.textContent = "Year: " + avengersMarvel[i].movie_year;

  newParagraphStar.setAttribute("class", "bg-white");
  newParagraphStar.textContent = "Star: " + avengersMarvel[i].imdb_rating;

  newBlocktTagBtn.setAttribute(
    "class",
    "d-flex align-items-center justify-content-between"
  );

  newBtnLink.setAttribute("class", "btn  btn-outline-info");
  newBtnLink.setAttribute(
    "href",
    `https://www.youtube.com/watch?v=${avengersMarvel[i].ytid}`
  );
  newBtnLink.textContent = "Watch trailer";

  newBtnFirst.setAttribute("class", "btn  btn-outline-info");
  newBtnFirst.textContent = "More info";

  newBtnSecond.setAttribute("class", "btn  btn-outline-info");
  newBtnSecond.textContent = "Bookmark";

  elCinema.appendChild(newBlock);
  newBlock.appendChild(newImage);
  newBlock.appendChild(newBlocktTag);

  newBlocktTag.appendChild(newHeader);
  newBlocktTag.appendChild(newParagraphYear);
  newBlocktTag.appendChild(newParagraphStar);
  newBlocktTag.appendChild(newBlocktTagBtn);

  newBlocktTagBtn.appendChild(newBtnLink);
  newBlocktTagBtn.appendChild(newBtnFirst);
  newBlocktTagBtn.appendChild(newBtnSecond);
}

console.log(elCinema);

