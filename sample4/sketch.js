let startTime;
let backgroundRColor = 235;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);

  startTime = millis();
}

function draw() {

  let elapsedTime = millis() - startTime;

  if (elapsedTime > 2000) {
    backgroundRColor = random(200, 255);
    startTime = millis();
  }

  background(backgroundRColor, 230, 220);

  let t = frameCount * 0.03;

  let flowerSize = 1 + 0.1 * sin(t);
  let moveY = 8 * cos(t);
  let moveX = 6 * cos(t);

  // 꽃1 색 변화
  let c1 = color(240, 170, 180);
  let c2 = color(180, 100, 120);

  let flowerColor1 = lerpColor(c1, c2, (sin(t) + 1) / 2);

  // 꽃2 가운데 원 색 변화
  let c3 = color(20);
  let c4 = color(180);

  let flowerColor2 = lerpColor(c3, c4, (sin(t) + 1) / 2);

  // 꽃3 색 변화
  let c5 = color(170, 80, 255);
  let c6 = color(90, 120, 250);

  let flowerColor3 = lerpColor(c5, c6, (cos(t) + 1) / 2);

  // 랜덤 선 색
  let RandomColor = random(0, 150);

  noStroke();

  // 배경 도형
  fill(160, 180, 160, 180);
  quad(0, 320, 600, 280, 600, 400, 0, 400);

  fill(250, 210, 150);
  circle(110, 150, 160);

  fill(180, 210, 230);
  ellipse(470, 210, 250, 150);

  noFill();
  stroke(RandomColor);
  strokeWeight(2);
  arc(300, 200, 400, 250, radians(30), radians(170));
  arc(290, 130, 400, 240, radians(200), 0);

  fill(150, 150, 170);
  noStroke();
  triangle(599, 1, 400, 1, 599, 150);

  //도형 눈 크기 변화
  stroke(100, 90, 80);
  strokeWeight(6 + 5 * sin(t));
  point(85, 85);
  point(100, 95);
  
  point(460, 150);
  point(480, 150);
  
  point(500, 60);
  point(520, 75);

  noStroke();

  // 줄기
  fill(90, 140, 90);

  rect(220, 170, 6, 230);
  rect(300, 120, 8, 280);
  rect(380, 160, 7, 240);

  // 잎 움직임
  fill(120, 180, 130);

  arc(205 + moveX, 260, 60, 30, 0, radians(210));
  arc(245 - moveX, 310, 60, 30, PI, radians(390));

  arc(280 + moveX, 220, 60, 30, 0, PI);
  arc(325 - moveX, 305, 60, 30, PI, radians(360));

  ellipse(360 + moveX, 260, 50, 10);
  ellipse(410 - moveX, 350, 50, 10);

  // 꽃 1
  push();
  translate(223, 160 + moveY);
  scale(flowerSize);
  
  fill(flowerColor1);
  arc(0, 0, 75, 75, PI, radians(360));

  fill(220, 90, 100);
  arc(0, 0, 75, 75, 0, PI);

  fill(250, 230, 100);
  ellipse(0, 0, 24, 24);
  pop();

  // 꽃 2
  push();
  translate(300, 110 - moveY);
  scale(1 + 0.06 * cos(t));
  
  fill(240, 200, 90);
  arc(0, 0, 70, 70, PI, radians(360));

  fill(230, 180, 70);
  arc(0, 0, 70, 70, 0, PI);

  fill(flowerColor2);
  ellipse(0, 0, 20, 20);
  pop();

  // 꽃 3
  push();
  translate(380, 150 + moveY);
  scale(1 + 0.07 * sin(t + 1));

  fill(170, 195, 235);
  arc(0, 0, 85, 85, PI, radians(360));

  fill(flowerColor3);
  arc(0, 0, 85, 85, 0, PI);

  fill(245);
  ellipse(0, 0, 26, 26);
  pop();
}

// GIF 저장
function keyPressed() {
  if (key == 's' || key == 'S') {
    saveGif('abstract_flower_animation', 5);
  }
}