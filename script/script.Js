
    let picturediv = document.getElementById('pictures');
    let fixedsearches = ["elephant", "hedgehog", "puppy", "penguin"];
    let giphyAPITrend =
        `https://api.giphy.com/v1/gifs/trending?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&limit=24&rating=G`;
    let tendenciasdiv = document.getElementById('gifTendencias');



    function checkMode() {
        if (sessionStorage.getItem("mode") === "dark") {
          document.getElementById("styles").href = './styles/main-dark.css';
      }
      else if (sessionStorage.getItem("mode") === "light") {
        document.getElementById("styles").href = './styles/main.css';
      }
    }
    checkMode();
  


    function getGifsByTerm() {
        fixedsearches.forEach(searchterm => { 
            searchUrl = 'https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q=' +
                searchterm + '&limit=1&offset=0&rating=G&lang=en';
            fetch(searchUrl) //pasa las 4 url como parámetro, una vez cada una
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    json.data.forEach(item => {
                        var source = item.images.original.url;
                        const nuevacaja = document.createElement('div')
                        nuevacaja.classList.add('gifBox');
                        picturediv.appendChild(nuevacaja);

                        const nuevotitle = document.createElement('div')
                        nuevotitle.classList.add('gifboxTitle');
                        nuevacaja.appendChild(nuevotitle);

                        const giftitle = document.createElement('p')
                        giftitle.classList.add('gifboxp');
                        nuevotitle.appendChild(giftitle);
                        giftitle.innerHTML = item.title;

                        const imgyboton = document.createElement('div')
                        imgyboton.classList.add('gifandbutton');
                        nuevacaja.appendChild(imgyboton);

                        const nuevaImagen = document.createElement('img')
                        nuevaImagen.classList.add('gif');
                        imgyboton.appendChild(nuevaImagen);
                        nuevaImagen.src = source;

                        const botonvermas = document.createElement('button')
                        botonvermas.classList.add('vermas');
                        imgyboton.appendChild(botonvermas);
                        
                        
                        botonvermas.onclick = function() {

                            document.getElementById("gifTendencias").innerHTML = '';
                            let searchSection = document.getElementById("gifTendencias");
                            var str = document.getElementById("tendenciastitle").innerHTML; 
                            var res = str.replace("Tendencias", "Resultados");
                            document.getElementById("tendenciastitle").innerHTML = res;

    let searchitemsurl = 'https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q='
    + searchterm + '&limit=24&offset=0&rating=G&lang=en';
            fetch(searchitemsurl) 
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    json.data.forEach (item => {
                    let newurl = item.images.original.url;    
                    const segundabox = document.createElement('div');
                    searchSection.appendChild(segundabox);
                    segundabox.classList.add('gifBox2');
                    const segundogif = document.createElement('img');
                    segundabox.appendChild(segundogif);
                    segundogif.src = newurl;
                    segundogif.classList.add('gif2');
                })
        })
    };

                        const textoBoton = document.createElement('p')
                        textoBoton.classList.add('verMas');
                        botonvermas.appendChild(textoBoton);

                        var vermastext = document.createTextNode("Ver más");
                        textoBoton.appendChild(vermastext);

                        const close = document.createElement('img');
                        close.classList.add('closebutton');
                        close.src = "assets/button3.svg";
                        nuevotitle.appendChild(close);

                    })
                })
        })
    }

    getGifsByTerm();


    function trendingGifs() {
        fetch(giphyAPITrend)
            .then(response => {
                return response.json();
            })
            .then(json => {
                json.data.forEach(item => {
                    var gifurl = item.images.original.url;
                    var bottomp = item.title;
                    var bottomarray = bottomp.split(" ", 4);

                    for(i=0; i<bottomarray.length; i++) {
                        var toadd = ("#" + bottomarray[0] + " " + "#" + bottomarray[1] + " " +
                        "#" + bottomarray[2] + " " + "#" + bottomarray[3]);
                    }

                    const segundabox = document.createElement('div');
                    tendenciasdiv.appendChild(segundabox);
                    segundabox.classList.add('gifBox2');

                    const segundogif = document.createElement('img');
                    segundabox.appendChild(segundogif);
                    segundogif.src = gifurl;
                    segundogif.classList.add('gif2');
                
                    const afterdiv = document.createElement('div');
                    segundabox.appendChild(afterdiv);
                    afterdiv.classList.add('afterdiv');

                    var nuevop = document.createElement('p');
                    var node = document.createTextNode(toadd);
                    nuevop.appendChild(node);
                    nuevop.classList.add('aftergif');
                    afterdiv.appendChild(nuevop);
                })
            })
            .catch(err => console.log(err));
    }

    trendingGifs();


    document.getElementById('userSearch').onclick = function showdiv() {
        document.getElementById('extend').style.display = "flex";
    }
    document.getElementById('userSearch').onmouseleave = function hidediv() {
        document.getElementById('extend').style.display = "none";
    }

    document.getElementById('extend').onmousemove = function showme() {
        document.getElementById('extend').style.display = "flex";
    }

    document.getElementById('mysearch').onmousemove = function showme() {
        document.getElementById('extend').style.display = "flex";
    }
    document.getElementById('mysearch').onmouseleave = function hideme() {
        document.getElementById('extend').style.display = "none";
    }
    

function getSearchResultsValues() {

    document.getElementById("gifTendencias").innerHTML = '';
    document.getElementById("tendenciastitle").innerHTML = "Resultados";

    fetch('https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q=' + n + '&limit=24&offset=0&rating=G&lang=en')
        .then(response => {
          return response.json();
        })

            .then(json => {
                json.data.forEach (item => {
                    var gifurl = item.images.original.url;
                    var bottomp = item.title;
                    var bottomarray = bottomp.split(" ", 4);

                    for(i=0; i<bottomarray.length; i++) {
                        var toadd = ("#" + bottomarray[0] + " " + "#" + bottomarray[1] + " " +
                        "#" + bottomarray[2] + " " + "#" + bottomarray[3]);
                    }

                    const segundabox = document.createElement('div');
                    tendenciasdiv.appendChild(segundabox);
                    segundabox.classList.add('gifBox2');

                    const segundogif = document.createElement('img');
                    segundabox.appendChild(segundogif);
                    segundogif.src = gifurl;
                    segundogif.classList.add('gif2');
                
                    const afterdiv = document.createElement('div');
                    segundabox.appendChild(afterdiv);
                    afterdiv.classList.add('afterdiv');

                    var nuevop = document.createElement('p');
                    var node = document.createTextNode(toadd);
                    nuevop.appendChild(node);
                    nuevop.classList.add('aftergif');
                    afterdiv.appendChild(nuevop);

  })

return data
})
.catch((error) => {
return error
})
}

  function getSearchResultsSuggestionsNumberOne() {
    n = "bad mood";
    getSearchResultsValues();
    console.log(n);
  }

  function getSearchResultsSuggestionsNumberTwo() {
    n = "good mood";
    getSearchResultsValues();
    console.log(n);
  }

  function getSearchResultsSuggestionsNumberThree() {
    n = "so-so";
    getSearchResultsValues();
    console.log(n);
  }



    function valueSearch(searchValue) {
        let sectiontohide = document.getElementById("gifTendencias");
            sectiontohide.style.display = "none";

        let searchSection = document.getElementById("results");

        var str = document.getElementById("tendenciastitle").innerHTML; 
        var res = str.replace("Tendencias", "Resultados");
        document.getElementById("tendenciastitle").innerHTML = res;


            searchValue = document.getElementById('userSearch').value;
             console.log(searchValue);

                document.getElementById("results").innerHTML = "";

              let searchitemsurl = 'https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q='
                + searchValue + '&limit=24&offset=0&rating=G&lang=en';

               searchUrl = 'https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q=' +
                searchValue + '&limit=1&offset=0&rating=G&lang=en';

                 fetch(searchitemsurl) //pasa las 4 url como parámetro, una vez cada una
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    json.data.forEach (item => {

                    var gifurl = item.images.original.url;

                    const segundabox = document.createElement('div');
                    searchSection.appendChild(segundabox);
                    segundabox.classList.add('gifBox2');

                    const segundogif = document.createElement('img');
                    segundabox.appendChild(segundogif);
                    segundogif.src = gifurl;
                    segundogif.classList.add('gif2');

                    })

                })

            }


function showmenu() {
    const modes = document.getElementById("coloroptions");

    if (modes.style.display === "none") {
        modes.style.display = "flex";
      } else {
        modes.style.display = "none";
      }

}

    function darkMode(){
        document.getElementById('styles').href = './styles/main-dark.css';
        document.getElementById('coloroptions').style.display = 'none';
        sessionStorage.setItem("mode", "dark")
        document.getElementById('logo').src = './assets/gifOF_logo_dark.png'
    }

      function lightMode(){
        document.getElementById('styles').href = './styles/main.css';
        document.getElementById('coloroptions').style.display = 'none';
        sessionStorage.setItem("mode", "light")
        document.getElementById('logo').src = './assets/gifOF_logo.png'
      }


      function checkMode() {
        if (sessionStorage.getItem("mode") === "dark") {
          document.getElementById("styles").href = './styles/main-dark.css';
          document.getElementById('logo').src = './assets/gifOF_logo_dark.png'
      }
      else if (sessionStorage.getItem("mode") === "light") {
        document.getElementById("styles").href = './styles/main.css';
        document.getElementById('logo').src = './assets/gifOF_logo.png'
      }
  
      }
  
      checkMode();
  