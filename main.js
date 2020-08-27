var video = document.querySelector("#videoElement");
var img = document.querySelector("#photo-holder");
var canvas = document.getElementById("myCanvas");
var takePhoto = document.getElementById("take-photo");
var button = document.getElementById('btn-download');

button.addEventListener('click', function(e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err0r) {
            console.log("Something went wrong!");
        });
}

// takePhoto.onclik = function() {
//     concole.log("clik");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//     // Other browsers will fall back to image/png
//     img.src = canvas.toDataURL('image/png');
// }
takePhoto.addEventListener('click', () => {
    console.log(canvas.width);
    console.log(video.width);
    // Draw the video frame to the canvas.
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    img.src = canvas.toDataURL('image/png');
});

// (function() {

//     var width = 320; // We will scale the photo width to this
//     var height = 0; // This will be computed based on the input stream

//     var streaming = false;

//     var video = null;
//     var canvas = null;
//     var photo = null;
//     var startbutton = null;

//     function startup() {
//         video = document.getElementById('videoElement');
//         canvas = document.getElementById('myCanvas');
//         photo = document.getElementById('photo-holder');
//         startbutton = document.getElementById('take-photo');

//         navigator.mediaDevices.getUserMedia({
//                 video: true,
//                 audio: false
//             })
//             .then(function(stream) {
//                 video.srcObject = stream;
//                 video.play();
//             })
//             .catch(function(err) {
//                 console.log("An error occurred: " + err);
//             });

//         video.addEventListener('canplay', function(ev) {
//             if (!streaming) {
//                 height = video.videoHeight / (video.videoWidth / width);

//                 if (isNaN(height)) {
//                     height = width / (4 / 3);
//                 }

//                 video.setAttribute('width', width);
//                 video.setAttribute('height', height);
//                 canvas.setAttribute('width', width);
//                 canvas.setAttribute('height', height);
//                 streaming = true;
//             }
//         }, false);

//         startbutton.addEventListener('click', function(ev) {
//             takepicture();
//             ev.preventDefault();
//         }, false);

//         clearphoto();
//     }


//     function clearphoto() {
//         var context = canvas.getContext('2d');
//         context.fillStyle = "#AAA";
//         context.fillRect(0, 0, canvas.width, canvas.height);

//         var data = canvas.toDataURL('image/png');
//         photo.setAttribute('src', data);
//     }

//     function takepicture() {
//         var context = canvas.getContext('2d');
//         if (width && height) {
//             canvas.width = width;
//             canvas.height = height;
//             context.drawImage(video, 0, 0, width, height);

//             var data = canvas.toDataURL('image/png');
//             photo.setAttribute('src', data);
//         } else {
//             clearphoto();
//         }
//     }

//     window.addEventListener('load', startup, false);
// })();