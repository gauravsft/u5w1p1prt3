

var start = 1;
function setTime() {
    setInterval(imageShow, 2000);
}

function imageShow() {
    var image;
    if (start == 1) {
        image = "image/1.jpg";
    }
    else if (start == 2) {
        image = "image/2.jpg";
    }
    else if (start == 3) {
        image = "image/3.jpg";
    }
    else if (start == 4) {
        image = "image/4.jpg"
    }
    else if (start == 5) {
        image = "image/5.jpg";
    }
    else if (start == 6) {
        image = "image/6.jpg";
    }
    else if (start == 7) {
        image = "image/7.jpg";
    }
    else if (start == 8) {
        image = "image/8.jpg";
    }
    else if (start == 9) {
        image = "image/9.jpg";
    }
    else {
        start = 1;
        image = "image/1.jpg";
    }
    document.getElementById("data").src = image;
    start++;
}



// movies Data ;

var moviesData = [
    {
        name: "The Shawshank Redemption",
        realeaseDate: "1994",
        poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr2KpBDmOaA_Sp4qW9U3YMaQaBZbDhf9aAvEUPJk9hTrAE8aX0h85XMIwYwuvWt7pSTk&usqp=CAU",
        IMDB: 9.2,
    },
    {
        name: " The Godfather",
        realeaseDate: "1972",
        poster_url: "https://wallpaperaccess.com/full/1107711.jpg",
        IMDB: 9.2,
    },
    {
        name: "The Dark Knight",
        realeaseDate: "2008",
        poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zg5dA5cJX5SHVelSlPdbDRJ7WmorlBmpxVtQ44keRiN0u32tfKVp4QcdZByD2Q6nC78&usqp=CAU",
        IMDB: 9.0,
    },
    {
        name: " The Good, the Bad and the Ugly",
        realeaseDate: "1996",
        poster_url: "https://ih1.redbubble.net/image.1084494606.3667/fposter,small,wall_texture,product,750x1000.jpg",
        IMDB: 8.8,
    },
    {
        name: " Forrest Gump ",
        realeaseDate: "1994",
        poster_url: "https://i.ytimg.com/an/Mj9IA9tTfio/7642531020657881441_mq.jpg?v=5f5bf0ff",
        IMDB: 8.8,
    },
    {
        name: "Fight Club",
        realeaseDate: "1999",
        poster_url: "https://m.media-amazon.com/images/I/71QPnEkXygS._SY679_.jpg",
        IMDB: 8.8,
    },
    {
        name: "Parasite",
        realeaseDate: "2019",
        poster_url: "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg",
        IMDB: 8.8,
    },

    {
        name: "American Beauty",
        realeaseDate: "1999",
        poster_url: "https://m.media-amazon.com/images/I/41VpuHa6zIL._SY445_.jpg",
        IMDB: 8.3,
    },
    {
        name: " The Dark Knight Rises",
        realeaseDate: "2012",
        poster_url: "https://m.media-amazon.com/images/I/81eN6gOwodL._AC_SY879_.jpg",
        IMDB: 8.3,
    },
    {
        name: "Joker ",
        realeaseDate: "2019",
        poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNjoXCHteGSTvNpTo7WdvAkgfFWSi-KcZgOjrnf513jK2zXS-vmI-7bAICQSuRbeBY9E&usqp=CAU",
        IMDB: 8.3,
    },
];

// sorting function

var filterData = JSON.parse(JSON.stringify(moviesData));

document.querySelector('#sorting').addEventListener('change', function () {
    var sortType = document.querySelector('#sorting').value;
    console.log(sortType)
    if (sortType === 'none') {
        moviesDisplay(moviesData);
    }
    else if (sortType == "sort-lh") {
        filterData.sort(function (a, b) { return a.IMDB - b.IMDB });
        moviesDisplay(filterData);
        
    }
    else if (sortType == "sort-hl") {
        filterData.sort(function (a, b) { return b.IMDB - a.IMDB });
        moviesDisplay(filterData);
        
    }
});

localStorage.setItem('movies', JSON.stringify(moviesData));


function moviesDisplay(moviesData) {
    document.querySelector('#movies').innerHTML = '';
    moviesData.forEach(function (movie) {
        var box = document.createElement("div");

        var name = document.createElement("h3");
        name.innerText = movie.name;
        var realeaseDate = document.createElement("h5");
        realeaseDate.innerText = "realeaseDate: " + movie.realeaseDate

        var rating = document.createElement("h5");
        rating.innerText = "IMDB-Rating: " + movie.IMDB;

        var img = document.createElement("img");
        img.src = movie.poster_url;
        box.append(img, name, realeaseDate, rating,);
        document.querySelector("#movies").append(box);
    });

}
moviesDisplay(moviesData);








