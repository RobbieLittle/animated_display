//  Robbie Little
//  Assignment 2 - Interactive Display
//  1701ICT - Creative Coding
//  S2841513

var cnv, wx, wy, data, v, completed, b1, b2, b3, information, r, video, videoTest;
var playing = true; // boolean for playing = true
var totalFiles = 27; // total files in all folders to display is 27
var obj = []; // loads content information array into indicies

function preload() {
  
}

function setup() {
    cnv = createCanvas(100, 100);
    centerCanvas();
    background(220);
    
    loadJSON("fileinfo.json" , gotData);
    
    selectFile();
    
    // pull array out of JSON to begin to arrange information with selectFile();
    
    // info = data.information[0]; // information is now an array
    var v = 0;
    //filepath = String(info.folders[obj[v].folder].file[obj[v].sfile]);
    filepath = String(info.folders[obj[1].folder].file[obj[1].sfile]);
    print("information: " + info);
    print("filepath: " + filepath);
    
    video = createVideo(filepath);
    //video.hide();
    video.loop();
  
    // set variables to equal interactive buttons

    b1 = createButton('Previous');
    b2 = createButton('Play');
    b3 = createButton('Next');

    b2.mousePressed(toggleVid);
}

//  button.mousePressed(toggleVid); // button listener

function draw() {
  image(video, 0, 0, wx, hy);
}

function centerCanvas() {
    wx = (windowWidth - width) / 2;
    hy = (windowHeight - height) / 2;
    cnv.position(wx, hy);
}

function windowResized() {
    centerCanvas();
}

// selectFile: creates a 3 object array using Info(), stores random variable and calls JSON information

function selectFile() {
  for (var i = 0; i < 3; i++) {
    obj[i] = new Info(r, sfile, data.info[0].totalFiles);
    print('random: ' + obj[i].r);
    print('selected file: ' + obj[i].sfile);
    return obj[i];
  }
}

//    if (obj.length < 2) {
//        obj.push(new Info());
//    } else if (obj.length < 2) {
//        obj.splice(0, 1);
//    } else {
//        print('Error: selectFile function');
//    }
//    create 3 objects for playback (prev = obj[0], now = obj[1], next = obj[2])
//    for (var i = 0; i < 2; i++) { 
//    }

// toggleVid: Function that toggles playing or pausing the video.

function toggleVid() {
  if (playing == true) {
    video.pause();
    b2.html('Play');
  } else {
    video.loop();
    b2.html('Pause');
  }
  playing = !playing;
}

function gotData(data) { // load URL into data using function gotData()
    print(data);
}