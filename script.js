//canvas - fishing scene

//canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

//top left corner (0,0)
//top right corner (0.400)
//bottom left corner (400,0)
//bottome right corner(400,400)
//start animation
requestAnimationFrame(draw);
//sun x and y variables
let sunX = 0;
let sunY = 0;
let moonX1 = 325;
let moonY1 = -45;
let moonX2 = 350;
let moonY2 = -55;
let skyR = 173;
let skyG = 216;
let skyB = 231;
//building lights
let w1R = 225;
let w1G = 242;
let w1B = 241;
let w2R = 225;
let w2G = 242;
let w2B = 241;
let w3R = 225;
let w3G = 242;
let w3B = 241;
//very close-by window
let mainWindow2R = 138;
let mainWindow2G = 215;
let mainWindow2B = 227;
//curtains
curtainCloseSpeed = 2;
curtainX2 = 329;
curtainX1 = 181;
curtainX3 = 401;
//stars
let stars1 = 0;
let stars2 = 0;
let stars3 = 0;
//drawing fucntionnn
function draw() {
  //sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, 500, 500);
  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(sunX, sunY, 50, 0, 2 * Math.PI);
  ctx.fill();
  //moon
  ctx.fillStyle = "rgb(219, 207, 180)";
  ctx.beginPath();
  ctx.arc(moonX1, moonY1, 45, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.beginPath();
  ctx.arc(moonX2, moonY2, 45, 0, 2 * Math.PI);
  ctx.fill();
  //stars
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(10, 59, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(24, 22, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(80, 34, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(100, 14, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(34, 44, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(90, 80, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(59, 19, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(120, 34, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(100, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(300, 59, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(48, 22, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(450, 34, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(200, 14, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(225, 44, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(450, 80, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(477, 19, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(344, 34, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(228, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(353, 50, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(432, 59, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(333, 22, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(324, 34, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(354, 14, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(242, 44, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(150, 80, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(256, 19, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 34, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(328, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(479, 50, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(120, 34, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(100, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(300, 59, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(48, 22, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(450, 34, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(200, 14, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(225, 44, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(450, 80, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(477, 19, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(344, 34, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(228, 120, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(353, 50, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(432, 59, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(333, 22, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(324, 34, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(354, 14, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(242, 44, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(150, 80, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(256, 19, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(180, 34, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(328, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(479, 50, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.arc(400, 20, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(410, 180, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(389, 120, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(379, 140, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.arc(414, 60, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 150, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(200, 120, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(255, 145, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(213, 185, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(190, 80, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(320, 80, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(383, 82, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(355, 78, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars3})`;
  ctx.beginPath();
  ctx.arc(250, 60, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(270, 77, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(275, 39, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(300, 5, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars2})`;
  ctx.beginPath();
  ctx.arc(215, 90, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = `rgba(225,225,225, ${stars1})`;
  ctx.beginPath();
  ctx.arc(250, 100, 3, 0, 2 * Math.PI);
  ctx.fill();
  //buildingggs
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 80, 75, 500);
  ctx.fillStyle = "darkgrey";
  ctx.fillRect(75, 135, 80, 500);
  ctx.fillStyle = "rgb(10,30,47)";
  ctx.fillRect(270, 100, 100, 500);
  ctx.fillStyle = "grey";
  ctx.fillRect(225, 160, 80, 500);
  //building 2 window (overlapped)
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(135, 191, 13, 13);
  ctx.fillRect(116, 237, 13, 10);
  ctx.fillRect(135, 237, 13, 10);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(79, 237, 13, 10);
  ctx.fillRect(135, 214, 13, 13);

  ctx.fillRect(97, 237, 13, 10);

  //building 4 window (overlappped)
  ctx.fillRect(233, 191, 11, 11);
  ctx.fillRect(250, 191, 11, 11);
  ctx.fillRect(267, 296, 11, 11);
  ctx.fillRect(284, 296, 11, 11);

  //buildings
  ctx.fillStyle = "rgb(35, 50, 63)";
  ctx.fillRect(140, 200, 125, 500);
  ctx.fillStyle = "rgb(23, 20, 55)";
  ctx.fillRect(350, 200, 125, 500);
  //building 6 window (overlapped)
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(422, 210, 14, 14);
  ctx.fillRect(422, 234, 14, 14);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(422, 258, 14, 14);
  ctx.fillRect(422, 282, 14, 14);

  //buulding
  ctx.fillStyle = "rgb(25, 42, 70)";
  ctx.fillRect(425, 50, 75, 500);

  //window
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(150, 249, 19, 19);
  ctx.fillRect(179, 249, 19, 19);

  //building
  ctx.fillStyle = "rgb(25, 42, 66)";
  ctx.fillRect(0, 250, 200, 500);
  //building 7 window (overlapped)
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(145, 275, 36, 30);
  //window building
  ctx.fillStyle = "darkgrey";
  ctx.fillRect(150, 300, 1000, 500);

  //window
  ctx.fillStyle = "rgb(138, 215, 227)";
  ctx.fillRect(180, 330, 150, 105);
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(180, 330);
  ctx.lineTo(330, 330);
  ctx.lineTo(330, 435);
  ctx.lineTo(180, 435);
  ctx.lineTo(180, 330);
  ctx.stroke();
  //window 2
  ctx.fillStyle = `rgb(${mainWindow2R}, ${mainWindow2G}, ${mainWindow2B})`;
  ctx.fillRect(400, 330, 155, 105);
  ctx.beginPath();
  ctx.moveTo(500, 330);
  ctx.lineTo(400, 330);
  ctx.lineTo(400, 435);
  ctx.lineTo(500, 435);
  ctx.lineTo(500, 330);
  ctx.stroke();

  //window person
  //head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 370, 20, 0, 2 * Math.PI);
  ctx.stroke();
  //colour
  ctx.fillStyle = "rgb(219, 181, 132)";
  ctx.arc(250, 370, 20, 0, 2 * Math.PI);
  ctx.fill();
  //torso
  ctx.beginPath();
  ctx.moveTo(250, 390);
  ctx.lineTo(250, 435);
  ctx.stroke();
  //right arm
  ctx.beginPath();
  ctx.moveTo(250, 410);
  ctx.lineTo(280, 385);
  ctx.stroke();
  //left arm
  ctx.beginPath();
  ctx.moveTo(250, 400);
  ctx.lineTo(235, 435);
  ctx.stroke();
  //face
  //left eye
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(242, 365, 2, 0, 2 * Math.PI);
  ctx.fill();
  //rigth eye
  ctx.beginPath();
  ctx.arc(258, 365, 2, 0, 2 * Math.PI);
  ctx.fill();
  // //smile
  ctx.beginPath();
  ctx.arc(250, 370, 10, 25.5, 2.75);
  ctx.stroke();

  //curtains (window1)
  ctx.fillStyle = "rgb(121, 147, 181)";
  ctx.beginPath();
  ctx.moveTo(180, 330);
  ctx.lineTo(curtainX1, 330);
  ctx.lineTo(curtainX1, 435);
  ctx.lineTo(180, 435);
  ctx.lineTo(180, 330);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(180, 330);
  ctx.lineTo(330, 330);
  ctx.lineTo(330, 435);
  ctx.lineTo(curtainX2, 435);
  ctx.lineTo(curtainX2, 330);
  ctx.fill();
  //curtains(window2)

  ctx.fillStyle = `rgb(134, 92, 103)`;
  ctx.beginPath();
  ctx.moveTo(500, 330);
  ctx.lineTo(400, 330);
  ctx.lineTo(400, 435);
  ctx.lineTo(curtainX3, 435);
  ctx.lineTo(curtainX3, 330);
  ctx.fill();
  //windows :(
  ctx.fillStyle = "rgb(225, 242, 241)";
  //building 1 windows
  ctx.fillRect(3, 95, 12, 12);
  ctx.fillRect(20, 95, 12, 12);
  ctx.fillRect(37, 95, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(54, 95, 12, 12);
  ctx.fillRect(3, 117, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(20, 117, 12, 12);
  ctx.fillRect(37, 117, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(54, 117, 12, 12);
  ctx.fillRect(3, 139, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(20, 139, 12, 12);
  ctx.fillRect(37, 139, 12, 12);
  ctx.fillRect(54, 139, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(3, 161, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(20, 161, 12, 12);
  ctx.fillRect(37, 161, 12, 12);
  ctx.fillRect(54, 161, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(3, 183, 12, 12);
  ctx.fillRect(20, 183, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(37, 183, 12, 12);
  ctx.fillRect(54, 183, 12, 12);
  ctx.fillRect(3, 205, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(20, 205, 12, 12);
  ctx.fillRect(37, 205, 12, 12);
  ctx.fillRect(54, 205, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(3, 227, 12, 12);
  ctx.fillRect(20, 227, 12, 12);
  ctx.fillRect(37, 227, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(54, 227, 12, 12);
  //building 2 windows
  ctx.fillRect(79, 145, 13, 13);
  ctx.fillRect(97, 145, 13, 13);

  ctx.fillRect(116, 145, 13, 13);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(135, 145, 13, 13);
  ctx.fillRect(79, 168, 13, 13);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(97, 168, 13, 13);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(116, 168, 13, 13);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(135, 168, 13, 13);
  ctx.fillRect(79, 191, 13, 13);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(97, 191, 13, 13);
  ctx.fillRect(116, 191, 13, 13);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(79, 214, 13, 13);
  ctx.fillRect(97, 214, 13, 13);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(116, 214, 13, 13);
  //building 3 windows
  ctx.fillRect(150, 220, 19, 19);
  ctx.fillRect(179, 220, 19, 19);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(208, 220, 19, 19);

  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(237, 220, 19, 19);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(208, 249, 19, 19);
  ctx.fillRect(237, 249, 19, 19);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(208, 277, 19, 19);
  ctx.fillRect(237, 277, 19, 19);
  //building 4 windows
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(233, 170, 11, 11);
  ctx.fillRect(250, 170, 11, 11);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(267, 170, 11, 11);
  ctx.fillRect(284, 170, 11, 11);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(267, 191, 11, 11);
  ctx.fillRect(284, 191, 11, 11);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(267, 212, 11, 11);
  ctx.fillRect(284, 212, 11, 11);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(267, 233, 11, 11);
  ctx.fillRect(284, 233, 11, 11);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(267, 254, 11, 11);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(284, 254, 11, 11);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(267, 275, 11, 11);
  ctx.fillRect(284, 275, 11, 11);
  //building 5 windows
  ctx.fillRect(278, 110, 10, 10);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(293, 110, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(308, 110, 10, 10);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(323, 110, 10, 10);
  ctx.fillRect(338, 110, 10, 10);
  ctx.fillRect(353, 110, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(278, 130, 10, 10);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(293, 130, 10, 10);
  ctx.fillRect(308, 130, 10, 10);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(323, 130, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(338, 130, 10, 10);
  ctx.fillRect(353, 130, 10, 10);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(278, 150, 10, 10);
  ctx.fillRect(293, 150, 10, 10);
  ctx.fillRect(308, 150, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(323, 150, 10, 10);
  ctx.fillRect(338, 150, 10, 10);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(353, 150, 10, 10);
  ctx.fillRect(308, 170, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(323, 170, 10, 10);
  ctx.fillRect(338, 170, 10, 10);
  ctx.fillRect(353, 170, 10, 10);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(308, 190, 10, 10);
  ctx.fillRect(323, 190, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(338, 190, 10, 10);
  ctx.fillRect(353, 190, 10, 10);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(308, 210, 10, 10);
  ctx.fillRect(323, 210, 10, 10);
  ctx.fillRect(338, 210, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(308, 230, 10, 10);
  ctx.fillRect(323, 230, 10, 10);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(338, 230, 10, 10);
  ctx.fillRect(308, 250, 10, 10);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(323, 250, 10, 10);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(338, 250, 10, 10);
  ctx.fillRect(308, 270, 10, 10);

  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(323, 270, 10, 10);
  ctx.fillRect(338, 270, 10, 10);
  ctx.fillRect(308, 290, 10, 10);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(323, 290, 10, 10);
  ctx.fillRect(338, 290, 10, 10);
  //building 6 windows
  ctx.fillRect(355, 210, 14, 14);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(377, 210, 14, 14);
  ctx.fillRect(399, 210, 14, 14);
  ctx.fillRect(355, 234, 14, 14);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(377, 234, 14, 14);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(399, 234, 14, 14);
  ctx.fillRect(355, 258, 14, 14);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(377, 258, 14, 14);
  ctx.fillRect(399, 258, 14, 14);
  ctx.fillRect(355, 282, 14, 14);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(377, 282, 14, 14);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(399, 282, 14, 14);
  //building 7 windowsa
  ctx.fillRect(434, 60, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(453, 60, 12, 12);
  ctx.fillRect(472, 60, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(491, 60, 12, 12);
  ctx.fillRect(434, 80, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(453, 80, 12, 12);
  ctx.fillRect(472, 80, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(491, 80, 12, 12);
  ctx.fillRect(434, 100, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(453, 100, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(472, 100, 12, 12);
  ctx.fillRect(491, 100, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(434, 120, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(453, 120, 12, 12);
  ctx.fillRect(472, 120, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(491, 120, 12, 12);
  ctx.fillRect(434, 140, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(453, 140, 12, 12);
  ctx.fillRect(472, 140, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(491, 140, 12, 12);
  ctx.fillRect(434, 160, 12, 12);
  ctx.fillRect(453, 160, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(472, 160, 12, 12);
  ctx.fillRect(491, 160, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(434, 180, 12, 12);
  ctx.fillRect(453, 180, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(472, 180, 12, 12);
  ctx.fillRect(491, 180, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(434, 200, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(453, 200, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(472, 200, 12, 12);
  ctx.fillRect(491, 200, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(434, 220, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(453, 220, 12, 12);
  ctx.fillRect(472, 220, 12, 12);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(491, 220, 12, 12);
  ctx.fillRect(434, 240, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(453, 240, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(472, 240, 12, 12);
  ctx.fillRect(491, 240, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(434, 260, 12, 12);
  ctx.fillRect(453, 260, 12, 12);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(472, 260, 12, 12);
  ctx.fillRect(491, 260, 12, 12);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(434, 280, 12, 12);
  ctx.fillRect(453, 280, 12, 12);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(472, 280, 12, 12);
  ctx.fillRect(491, 280, 12, 12);
  //building 7
  ctx.fillRect(10, 275, 36, 30);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(55, 275, 36, 30);
  ctx.fillRect(100, 275, 36, 30);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(10, 320, 36, 30);
  ctx.fillRect(55, 320, 36, 30);
  ctx.fillStyle = `rgb(${w3R}, ${w3G}, ${w3B})`;
  ctx.fillRect(100, 320, 36, 30);
  ctx.fillRect(145, 320, 5, 30);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(10, 365, 36, 30);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(55, 365, 36, 30);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(100, 365, 36, 30);
  ctx.fillRect(145, 365, 5, 30);
  ctx.fillRect(10, 410, 36, 30);
  ctx.fillStyle = `rgb(${w1R}, ${w1G}, ${w1B})`;
  ctx.fillRect(55, 410, 36, 30);
  ctx.fillRect(100, 410, 36, 30);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(145, 410, 5, 30);
  ctx.fillStyle = "rgb(225, 242, 241)";
  ctx.fillRect(10, 455, 36, 30);
  ctx.fillRect(55, 455, 36, 30);
  ctx.fillStyle = `rgb(${w2R}, ${w2G}, ${w2B})`;
  ctx.fillRect(100, 455, 36, 30);
  ctx.fillRect(145, 455, 5, 30);

  //aNimation
  //keybaord handler
  if (curtainX3 < 500 && sunX > 140) {
    curtainX3 = curtainX3 + curtainCloseSpeed;
  }
  if (curtainX1 < 250 && sunX > 180) {
    curtainX1 = curtainX1 + curtainCloseSpeed;
  }
  if (curtainX2 > 250 && sunX > 190) {
    curtainX2 = curtainX2 - curtainCloseSpeed;
  }
  // // Keyboard handler
  // document.addEventListener("keypress", keyboardHandler);

  // function keyboardHandler(event) {
  //   if (event.code == "KeyT") {
  //     console.log("You pressed the T key!!");
  //     // poleColor = "purple";
  //   }

  // the sunsetting

  if (sunX <= 275) {
    sunX = sunX + 0.25;
  }
  if (sunY <= 275) {
    sunY = sunY + 0.25;
  }
  //blue (darker)
  if (sunX <= 125 && sunY <= 125) {
    if (skyR >= 113) {
      skyR -= 2;
    }
    if (skyG >= 159) {
      skyG -= 4;
    }
    if (skyB >= 209) {
      skyB -= 2;
    }
  }
  //pinkish sunset colour
  if (sunX > 125 && sunY > 125 && sunX <= 150 && sunY <= 150) {
    if (skyR <= 238) {
      skyR += 2;
    }
    if (skyG >= 93) {
      skyG -= 2.5;
    }
    if (skyB >= 108) {
      skyB -= 2.5;
    }
  }
  //ornage sunset colour
  if (sunX > 150 && sunY > 150 && sunX <= 225 && sunY <= 225) {
    if (skyR <= 232) {
      skyR += 1;
    }
    if (skyG <= 150) {
      skyG += 1;
    }
    if (skyB >= 62) {
      skyB -= 1;
    }
  }
  //midnigth colour
  if (sunX > 225 && sunY > 225 && sunX <= 275 && sunY <= 275) {
    if (skyR >= 50) {
      skyR -= 2;
    }
    if (skyG >= 70) {
      skyG -= 2;
    }
    if (skyB <= 80) {
      skyB += 1;
    }
  }

  //lights turning off
  if (sunX >= 225) {
    if (w1R >= 50) {
      w1R -= 5;
    }
    if (w1G >= 60) {
      w1G -= 5;
    }
    if (w1B >= 64) {
      w1B -= 5;
    }
  }
  if (sunX >= 190) {
    if (w2R >= 50) {
      w2R -= 5;
    }
    if (w2G >= 60) {
      w2G -= 5;
    }
    if (w2B >= 64) {
      w2B -= 5;
    }
  }
  if (sunX >= 125) {
    if (w3R >= 50) {
      w3R -= 5;
    }
    if (w3G >= 60) {
      w3G -= 5;
    }
    if (w3B >= 64) {
      w3B -= 5;
    }
  }
  if (sunX >= 125) {
    if (w3R >= 50) {
      w3R -= 5;
    }
    if (w3G >= 60) {
      w3G -= 5;
    }
    if (w3B >= 64) {
      w3B -= 5;
    }
  }
  if (sunX >= 125) {
    if (w3R >= 50) {
      w3R -= 5;
    }
    if (w3G >= 60) {
      w3G -= 5;
    }
    if (w3B >= 64) {
      w3B -= 5;
    }
  }
  if (sunX >= 125) {
    if (mainWindow2R >= 50) {
      mainWindow2R -= 5;
    }
    if (mainWindow2G >= 60) {
      mainWindow2G -= 5;
    }
    if (mainWindow2B >= 64) {
      mainWindow2B -= 5;
    }
  }
  //moon moving in
  if (sunX > 275) {
    if (moonY1 <= 70) {
      moonY1 = moonY1 + 1;
    }
    if (moonX1 >= 160) {
      moonX1 = moonX1 - 1.5;
    }
  }
  if (sunX > 275) {
    if (moonY2 <= 60) {
      moonY2 = moonY2 + 1;
    }
    if (moonX2 >= 185) {
      moonX2 = moonX2 - 1.5;
    }
  }
  //stars start appearing
  if (sunX > 250) {
    if (stars1 <= 1) {
      stars1 = stars1 + 0.01;
    }
  }
  if (sunX > 260) {
    if (stars2 <= 1) {
      stars2 = stars2 + 0.025;
    }
  }
  if (sunX > 275) {
    if (stars3 <= 1) {
      stars3 = stars3 + 0.01;
    }
  }

  requestAnimationFrame(draw);
}
