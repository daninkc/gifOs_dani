    let picturediv = document.getElementById('pictures');
    let fixedsearches = ["elephant", "hedgehog", "puppy", "penguin"];
    let giphyAPITrend =
        `https://api.giphy.com/v1/gifs/trending?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&limit=24&rating=G`;
    let tendenciasdiv = document.getElementById('gifTendencias');

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
                        close.src = "/button3.svg";
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

                    const segundabox = document.createElement('div');
                    tendenciasdiv.appendChild(segundabox);
                    segundabox.classList.add('gifBox2');

                    const segundogif = document.createElement('img');
                    segundabox.appendChild(segundogif);
                    segundogif.src = gifurl;
                    segundogif.classList.add('gif2');

                })
            })

            .catch(err => console.log(err));
    }

    trendingGifs();


  


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
        
    }
      function lightMode(){
        document.getElementById('styles').href = './styles/main.css';
        document.getElementById('coloroptions').style.display = 'none';
      }
