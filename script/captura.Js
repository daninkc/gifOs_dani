console.log("Hello World!");


    var image = document.getElementById('videocontainer');
    var secondimage = document.getElementById('secondpreview');
    var thirdimage = document.getElementById('thirdpreview')
    var arr = [];
    var divfornew = document.getElementById('here');
    var myvideo = document.getElementById('isavideo');
    var downloadref = document.getElementById('btn-download');
  
  
  
    function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({
    video: true
    })
    .then(function(stream) {
      myvideo.srcObject = stream;
      myvideo.play();
    callback(stream);
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
    localStorage.setItem(dataid, JSON.stringify(object));
    
      var y = localStorage.getItem(dataid);
      console.log(y);
        var yparsed = JSON.parse(y);              //la convierto
        var urlmygif = yparsed.data.images.original.url;      //obtengo la url
  
        const obtainedbox = document.createElement('div');    //creo el div
        obtainedbox.classList.add('obtgifbox');
        divfornew.appendChild(obtainedbox);                   //lo adjunto a la caja
  
        const imagen2 = document.createElement('img')         //creo la imagen
        imagen2.classList.add('obtgif');
        obtainedbox.appendChild(imagen2);                     //la adjunto al div
        imagen2.src = urlmygif;                               //le asigno source
        console.log(urlmygif);
        
  
  
        })
  
        })
  
        }
  
        recorder.stream.stop();
        recorder = null;
  
        localStorage.getItem('file');
  
        }
  
        var recorder; // globally accessible
  
        document.getElementById('btn-start-recording').onclick = function() {
        this.disabled = true;
        captureCamera(function(stream) {
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
  
        document.getElementById('btn-stop-recording').onclick = function() {
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

        