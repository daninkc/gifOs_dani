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
    alert('Unable to capture your camera. Please check console logs.');
    console.error(error);
    });
    }
  
  
    function stopRecordingCallback() {
  
    console.log('Stopped recording');
    var sourceSet = URL.createObjectURL(recorder.getBlob());
    thirdimage.src = sourceSet;
    downloadref.href = sourceSet;
    console.log(sourceSet);

    let form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');
  
    console.log(form.get('file'));
  
    document.getElementById("btn-upload").onclick = function postgif() {

      fourth.style.display = "none";
      fifth.style.display = "flex";
  
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
    small.src = urltodld;
    console.log(urltodld);

    var aninput = document.getElementById("emptyfield");
    aninput.value = urltodld;
    
    localStorage.setItem(dataid, JSON.stringify(object));
    
      var y = localStorage.getItem(dataid);
        var yparsed = JSON.parse(y);              //la convierto
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
  

        setTimeout(function(){ 
          fifth.style.display = "none";
          sixth.style.display = "block";
        }, 7000);


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

        document.getElementById("btn-done").onclick = function hideall() {
          sixth.style.display = "none";
        }
