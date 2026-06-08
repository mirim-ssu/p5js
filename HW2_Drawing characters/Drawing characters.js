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
  vertex(310,100);
  vertex(280,150);
  endShape(CLOSE);
  
  beginShape();
  vertex(320, 160);
  vertex(390,180);
  vertex(350,110);
  vertex(290,100);
  endShape(CLOSE);	

  // 눈썹
  stroke(120, 90, 70);
  strokeWeight(2);
  noFill();
  arc(265, 188, 30, 10, PI + 0.3, TWO_PI - 0.3);
  arc(335, 188, 30, 10, PI + 0.3, TWO_PI - 0.3);

  // 눈
  noStroke();
  fill(10);
  circle(265, 205, 18);
  circle(335, 205, 18);
  
  fill(255);
  circle(268, 202, 6);
  circle(338, 202, 6);

  // 코
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
  arc(300, 295, 40, 20, 0.2, PI - 0.2);

  noStroke();
  fill(255, 215, 0);
  circle(300, 310, 8);
}