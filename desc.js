const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const main = document.getElementById("main");
const places = document.getElementById("seat");

const data = localStorage.getItem("movieData");
// const suggested_0 = localStorage.getItem("suggested0")
// const suggested_1 = localStorage.getItem("suggested1")
// const suggested_2 = localStorage.getItem("suggested2")
// const suggested_3 = localStorage.getItem("suggested3")
// const sugg0 = JSON.parse(suggested_0);
// const sugg1 = JSON.parse(suggested_1);
// const sugg2 = JSON.parse(suggested_2);
// const sugg3 = JSON.parse(suggested_3);
const movie = JSON.parse(data);
// const suggetions = [sugg0,sugg1,sugg2,sugg3]
console.log(movie);
getMovies(API_URL)
async function getMovies(url) {
  const res = await fetch(url)
  console.log(res)
  const data = await res.json()
  console.log(data)
  suggestedMovies(data.results)
}

places.innerHTML = "";
main.innerHTML = "";

const seats = [
  {
    seat: "seat1",
    price: "25GEL",
    pasi : 25,
  },
  {
    seat: "seat2",
    price: "25GEL",
    pasi : 25,
  },
  {
    seat: "seat3",
    price: "25GEL",
    pasi : 25,
  },
  {
    seat: "seat4",
    price: "25GEL",
    pasi : 25,
  },
  {
    seat: "seat5",
    price: "25GEL",
    pasi : 25,
  },
];

const movieEl = document.createElement("div")

movieEl.classList.add("single_movie_info")

movieEl.innerHTML = `
<div class="banner_img">
    <img src="${IMG_PATH + movie.backdrop_path}" alt="${movie.title}">
</div>
<div class="row">
    <div class="col-6">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    </div>
    <div class="col-6">
            <div class="single_movie_info">
                <h3>${movie.title}</h3>
                <p>
                    ${movie.vote_average}
                </p>
                <p>
                    ${movie.overview}
                </p>
                <p>
                ${movie.original_language}
                </p>
                <p>
                ${movie.release_date}
                </p>
            </div>
    </div>
</div>
`
main.appendChild(movieEl)

//adgilebi
let total = 0;
function updateTotal(value) {
  total += value
  seat1.innerHTML=`<p>total: ${total} GEL</p>`
  console.log(`Total: ${total}`)
  localStorage.setItem("totalPrice", JSON.stringify(total))
}
seats.forEach((seat) => {
  const seatEl = document.createElement("div")

  seatEl.classList.add("seat_places")
  seatEl.innerHTML = `
        <h1>${seat.seat}</h1>
        <h2>${seat.price}</h2>
    `
  seatEl.addEventListener("click", (e) => {
    seatEl.classList.toggle("selected")
    if (seatEl.classList.contains("selected")) {
      seatEl.classList.add("seat_places_clicked")
      seatEl.innerHTML = `
        <h1>${seat.seat}</h1>
        <h2>${seat.price}</h2>
        <h3>selected</h3>
      `
      updateTotal(seat.pasi);
      console.log(`Seat ${seat.seat} selected! Price: ${seat.price}`)
    } else {
      seatEl.classList.remove("seat_places_clicked")
      seatEl.innerHTML = `
        <h1>${seat.seat}</h1>
        <h2>${seat.price}</h2>
      `
      updateTotal(-seat.pasi);
      console.log(`Seat ${seat.seat} deselected.`)
    }
  })
  places.appendChild(seatEl)
})
const seat1= document.createElement("div");
seat1.classList.add("seat_places");
seat1.innerHTML=`<p>total: 0 GEL</p>`
seat1.addEventListener("click", (e) => {
  window.location.href = "payment.html"
})
places.appendChild(seat1);

//shemotavazebuli filmebi

function suggestedMovies(movieSug){
  console.log(movieSug)
  console.log(movieSug.length)
  
  movieSuggestion.innerHTML = ""
  const suggest = []
  let selectedIndices = [];

  for (let i = 0; i < 4; i++) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * movieSug.length);
    } while (selectedIndices.includes(randomIndex));
    selectedIndices.push(randomIndex);

    suggest.push(movieSug[randomIndex]);
  }
  // for(let i = 0;i<4;i++){
  //   let randomIndex = Math.floor(Math.random() * movieSug.length);
    
  //   suggest.push(movieSug[randomIndex])
  // }
  console.log(suggest)
  suggest.forEach((movie) => {
    console.log(movie)
    const {title, poster_path, vote_average, overview} = movie

    const movie1 = document.createElement("div")
    movie1.classList.add('movie')

    movie1.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie_info">
                <h3>${title}</h3>
                <span class="vote ${getClassByRate(vote_average)}">
                    ${vote_average}
                </span>
                <p>
                    ${overview}
                </p>
            </div>
        `
    movieSuggestion.appendChild(movie1)
    movie1.addEventListener("click", (e) => {
        localStorage.setItem("movieData", JSON.stringify(movie))
        window.location.href = "movie.html"
    })
})

}

// function suggestedMovies(movieSug) {
//   console.log(movieSug)

//   movieSuggestion.innerHTML = ""

//   movieSug.forEach((movie) => {
//       console.log(movie)
//       const {title, poster_path, vote_average, overview} = movie

//       const movie1 = document.createElement("div")
//       movie1.classList.add('movie')

//       movie1.innerHTML = `
//           <img src="${IMG_PATH + poster_path}" alt="${title}">
//               <div class="movie_info">
//                   <h3>${title}</h3>
//                   <span class="vote ${getClassByRate(vote_average)}">
//                       ${vote_average}
//                   </span>
//                   <p>
//                       ${overview}
//                   </p>
//               </div>
//           `
//       movieSuggestion.appendChild(movie1)
//       movie1.addEventListener("click", (e) => {
//           localStorage.setItem("movieData", JSON.stringify(movie))
//           window.location.href = "movie.html"
//       })
//   })

// }
function getClassByRate(vote){
  if(vote >=7) {
      return "green"
  } else if ( vote >= 5) {
      return "orange"
  } else {
      return "red"
  }
}
// suggestedMovies(suggetions)