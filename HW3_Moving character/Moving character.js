let LeftShow = false;
let TopShow = false;
let RightShow = false;

let necklaceX = 300;
let necklaceY = 310;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(210, 200, 190);
  noStroke();

  // 머리카락
  fill(102, 77, 56);
  ellipse(300, 175, 185, 165);
  rect(215, 170, 170, 135, 30);
  
  // 얼굴
  fill(253, 241, 230);
  ellipse(300, 195, 165, 180);
  
  // 귀
  fill(253, 241, 230);
  ellipse(220, 205, 18, 28);
  ellipse(380, 205, 18, 28);
  
  // 앞머리
  fill(102, 77, 56);
  arc(250, 140, 120, 80, radians(-30), radians(130));
  arc(350, 140, 120, 80, radians(50), radians(-130));

  beginShape();
  vertex(210, 180);
  vertex(240, 115);
  vertex(310, 100);
  vertex(280, 150);
  endShape(CLOSE);
  beginShape();
  vertex(320, 160);
  vertex(390, 180);
  vertex(350, 110);
  vertex(290, 100);
  endShape(CLOSE);

  // 눈썹
  stroke(120, 90, 70);
  strokeWeight(2);
  noFill();
  arc(265, 188, 30, 10, PI + 0.3, TWO_PI - 0.3);
  arc(335, 188, 30, 10, PI + 0.3, TWO_PI - 0.3);

  // 눈
  if (mouseY < height / 2) {
    noStroke();
    fill(10);
    circle(265, 205, 18);
    circle(335, 205, 18);

    fill(255);
    circle(262, 202, 6);
    circle(332, 202, 6);
  } 
  else {
    noFill();
    stroke(80, 60, 50);
    strokeWeight(3);
    arc(265, 206, 20, 10, PI, TWO_PI);
    arc(335, 206, 20, 10, PI, TWO_PI);
  }

  // 코
  noStroke();
  fill(235, 200, 180);
  circle(300, 230, 10);

  // 입
  fill(170, 70, 60);
  arc(300, 255, 45, 22, 0, PI);

  // 볼터치
  fill(255, 180, 190, 180);
  ellipse(250, 235, 28, 18);
  ellipse(350, 235, 28, 18);

  // 상반신
  fill(58, 118, 51);
  rect(180, 310, 240, 100, 60, 60, 0, 0);

  fill(45, 95, 40);
  triangle(300, 310, 240, 310, 270, 335);
  triangle(300, 310, 360, 310, 330, 335);

  fill(30, 70, 30);
  circle(300, 350, 7);
  circle(300, 375, 7);

  // 목
  fill(253, 241, 230);
  rect(285, 280, 30, 30);
  triangle(285, 310, 315, 310, 300, 330);

  // 목걸이
  stroke(200);
  strokeWeight(1.5);
  noFill();
  arc(necklaceX, necklaceY-15, 40, 20, 0.2, PI - 0.2);
  
  noStroke();
  fill(255, 215, 0);
  circle(necklaceX, necklaceY, 8);
  
  // Top
  fill(232, 77, 122);
  rect(255, 35, 90, 50, 8);

  if (TopShow) {
    fill(255);
    textSize(24);
    textStyle(BOLD);
    text("p5*", 285, 68);
  }

  // 왼쪽 폭죽
  fill(255, 170, 60);
  triangle(98, 204, 122, 204, 110, 226);
  ellipse(110, 203, 24, 8);
  
  if (LeftShow) {
    fill(255, 70, 70);
    circle(78, 172, 8);
    fill(80, 170, 255);
    circle(110, 162, 8);
    fill(255, 210, 70);
    circle(141, 175, 9);

    fill(120, 220, 120);
    rect(68, 192, 8, 8, 2);
    fill(255, 120, 210);
    rect(145, 194, 8, 8, 2);

    fill(255, 160, 40);
    triangle(90, 176, 96, 166, 101, 178);
    fill(100, 220, 255);
    triangle(110, 173, 115, 160, 120, 173);
    fill(255, 100, 180);
    triangle(128, 178, 136, 168, 139, 181);
    fill(255, 230, 120);
    triangle(74, 185, 81, 178, 84, 188);
    fill(170, 255, 170);
    triangle(138, 187, 145, 180, 148, 190);
  }
  
  // 오른쪽 폭죽
  fill(255, 170, 60);
  triangle(478, 204, 502, 204, 490, 226);
  ellipse(490, 203, 24, 8);
  
  if (RightShow) {
    fill(255, 70, 70);
    circle(458, 172, 8);
    fill(80, 170, 255);
    circle(490, 162, 8);
    fill(255, 210, 70);
    circle(521, 175, 9);

    fill(120, 220, 120);
    rect(448, 192, 8, 8, 2);
    fill(255, 120, 210);
    rect(525, 194, 8, 8, 2);

    fill(255, 160, 40);
    triangle(470, 176, 476, 166, 481, 178);
    fill(100, 220, 255);
    triangle(490, 173, 495, 160, 500, 173);
    fill(255, 100, 180);
    triangle(508, 178, 516, 168, 519, 181);
    fill(255, 230, 120);
    triangle(454, 185, 461, 178, 464, 188);
    fill(170, 255, 170);
    triangle(518, 187, 525, 180, 528, 190);
  }
}

function mousePressed() {
  if (mouseX >= 255 && mouseX <= 345 && mouseY >= 35 && mouseY <= 85) TopShow = !TopShow;
  if (dist(mouseX, mouseY, 110, 210) <= 35) LeftShow = !LeftShow;
  if (dist(mouseX, mouseY, 490, 210) <= 35) RightShow = !RightShow;
}

function keyPressed() {
  if (key === 's') saveGif('HW3_김미림', 5);
  
  if (keyCode === LEFT_ARROW)       necklaceX = necklaceX - 5;
  else if (keyCode === RIGHT_ARROW) necklaceX = necklaceX + 5;
  else if (keyCode === UP_ARROW)    necklaceY = necklaceY - 5;
  else if (keyCode === DOWN_ARROW)  necklaceY = necklaceY + 5;
}