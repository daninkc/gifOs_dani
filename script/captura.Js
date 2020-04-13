console.log("Hello World!");

    var image = document.getElementById('videocontainer');
    var secondimage = document.getElementById('secondpreview');
    var thirdimage = document.getElementById('thirdpreview')
    var arr = [];
    var divfornew = document.getElementById('here');
    var myvideo = document.getElementById('isavideo');
    var downloadref = document.getElementById('btn-download');
    var first = document.getElementById("window1");
    var second = document.getElementById("window2");
    var third = document.getElementById("window3");
    var fourth = document.getElementById("window4");
    var fifth = document.getElementById("window5");
    var sixth = document.getElementById("window6");
    var smallprev = document.getElementById("small");


    function checkMode() {
      if (sessionStorage.getItem("mode") === "dark") {
        document.getElementById("capturastyles").href = './styles/main-dark.css';
        document.getElementById('logo1').src = './assets/gifOF_logo_dark.png'
    }
    else if (sessionStorage.getItem("mode") === "light") {
      document.getElementById("capturastyles").href = './styles/main.css';
      document.getElementById('logo1').src = './assets/gifOF_logo.png'
    }

    }

    checkMode();

    function move() {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 0.2);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }


    document.getElementById("btn-cancel").onclick = function hideShow() {
      first.style.display = "none";
    }




  function addto() {
  
        for (i = 0; i <localStorage.length; i++ ){
        arr[i]=localStorage.key(i); if(localStorage.key(i)==='danisgif' ) {
        arr.splice(i, 1); }
        }
        console.log(arr);
  
        arr.forEach(keyvalue => {
  
        var x = localStorage.getItem(keyvalue);
        var xparsed = JSON.parse(x);
  
        var urlmygif = xparsed.data.images.original.url;
  
        var divfornew = document.getElementById('here');
  
        const obtainedbox = document.createElement('div');
        obtainedbox.classList.add('obtgifbox');
        divfornew.appendChild(obtainedbox);
  
        const imagen2 = document.createElement('img')
        imagen2.classList.add('obtgif');
        obtainedbox.appendChild(imagen2);
        imagen2.src = urlmygif;
  
        }) }

        addto();



    function hideShow1(one, two) {
      first.style.display = "none";
      second.style.display = "flex";
    }

    function hideShow2() {
      second.style.display = "none";
      third.style.display = "flex";
    }

    function hideShow3() {
      third.style.display = "none";
      fourth.style.display = "flex";
    }

    function hideShow6() {
      fourth.style.display = "none";
      second.style.display = "flex";
    }

    function hideShow4() {
      fifth.style.display = "none";
      first.style.display = "block"
    }

    function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({
    video: true
    })
    .then(function(stream) {
      myvideo.srcObject = stream;
      myvideo.play();
      callback && callback(stream);
    })
    .catch(function(error) {
    console.error(error);
    alert("Ups, necesitamos tu cámara! Actualiza la página y vuelve a intentarlo");
    });
    }
  
  
    function stopRecordingCallback() {
  
    console.log('Stopped recording');
    var sourceSet = URL.createObjectURL(recorder.getBlob());
    thirdimage.src = sourceSet;
    console.log(sourceSet);

    let form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');
  
    console.log(form.get('file'));
    
  
    document.getElementById("btn-upload").onclick = function postgif() {

        var i = 0;
  
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar2");
          var width = 1;
          var id = setInterval(frame, 40);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
            }
          }
        }

      finishupload = setTimeout(function(){ 
        fifth.style.display = "none";
        sixth.style.display = "block";
      }, 5000);


      fourth.style.display = "none";
      fifth.style.display = "flex";

      downloadref.href = sourceSet;

  
    fetch('https://upload.giphy.com/v1/gifs?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH', {
    method: "POST",
    body: form
    })
    .then(response => {
    console.log(response.status);
    return response.json();
    })
    .then(data => {
    console.log(data);
    var dataid = data.data.id;
    console.log(dataid);

  
    fetch("https://api.giphy.com/v1/gifs/" + dataid + "?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH")
    .then(response => {
    return response.json();
    })
    .then(object => {
    console.log(object);

    
    urltodld = object.data.images.original.url;
    smallprev.src = urltodld;
    console.log(urltodld);


    var aninput = document.getElementById("emptyfield");
    aninput.value = urltodld;
    
    localStorage.setItem(dataid, JSON.stringify(object));
    
      var y = localStorage.getItem(dataid);
        var yparsed = JSON.parse(y);                          //la convierto
        var urlmygif = yparsed.data.images.original.url;      //obtengo la url
  
        const obtainedbox = document.createElement('div');    //creo el div
        obtainedbox.classList.add('obtgifbox');
        divfornew.appendChild(obtainedbox);                   //lo adjunto a la caja
  
        const imagen2 = document.createElement('img')         //creo la imagen
        imagen2.classList.add('obtgif');
        obtainedbox.appendChild(imagen2);                     //la adjunto al div
        imagen2.src = urlmygif;                               //le asigno source
  
        })
  
        })
  
        }
  
        recorder.stream.stop();
        recorder = null;
  
        localStorage.getItem('file');
        
        }
  




        var recorder;
  
        function startRecordingNow() {
        this.disabled = true;
        captureCamera
        (function(stream) {
        recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
        },
  
        
        onGifPreview: function(gifURL) {
        secondimage.src = gifURL;
        }
        });
  
        recorder.startRecording();
  
        
  
        // release camera on stopRecording
        recorder.stream = stream;
  
        });
        };
  
        function stopRecordingNow() {
        this.disabled = true;
        recorder.stopRecording(stopRecordingCallback);
        };


        function myStopFunction() {
          clearTimeout(finishupload);
          fifth.style.display = "none";
          first.style.display = "block";
        }


        document.getElementById("btn-done").onclick = function hideall() {
          sixth.style.display = "none";
        }


        function copytext() {
      
         navigator.clipboard.writeText(urltodld);
             
      alert("Yay! Ya tenés tu enlace copiado al portapapeles");

    }


    function move() {
      var i = 0;

      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 0.2);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }


    window.onload = function() {
      pantalla = document.getElementById("time");
   }

   var isMarch = false; 
   var acumularTime = 0; 
   function start () {
            if (isMarch == false) { 
               timeInicial = new Date();
               control = setInterval(cronometro,10);
               isMarch = true;
               }
            }
   function cronometro () { 
            timeActual = new Date();
            acumularTime = timeActual - timeInicial;
            acumularTime2 = new Date();
            acumularTime2.setTime(acumularTime); 
            cc = Math.round(acumularTime2.getMilliseconds()/10);
            ss = acumularTime2.getSeconds();
            mm = acumularTime2.getMinutes();
            if (cc < 10) {cc = "0"+cc;}
            if (ss < 10) {ss = "0"+ss;} 
            if (mm < 10) {mm = "0"+mm;}
            pantalla.innerHTML = mm+" : "+ss+" : "+cc;
            }
   
   function stop () { 
            if (isMarch == true) {
               clearInterval(control);
               isMarch = false;
               }     
            }      
   
   function reset () {
            if (isMarch == true) {
               clearInterval(control);
               isMarch = false;
               }
            acumularTime = 0;
            pantalla.innerHTML = "00 : 00 : 00";
            }
   