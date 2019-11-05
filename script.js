function loadMusic(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "[YOUR API KEY]"
        },
        method: "GET"
    }).then(function(res){
        return res.json()
    }).then(function(tracks){
        console.log(tracks)
        var albumsDiv = document.querySelector("#albums")
        albumsDiv.innerHTML = "";
        tracks.data.forEach(track => {
            albumsDiv.innerHTML += `
                <div class="col-sm-2">
                    <img src="${track.album.cover}" />
                    <span>${track.title} </span>
                </div>
            `
        })
    });
}



<div class="card col-sm-6 col-md-4 col-lg-2 text-white">
                    
                    <img class="card-img-top" src="${track.album.cover}" />
                    <div class="card-body"> 
                      <h6 class="card-title">${track.title_short} </h6>
                      </div>
                </div>