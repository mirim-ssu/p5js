function setup() {
  createCanvas(600, 400);
  background(235, 230, 220); 

  noStroke();
  
  //배경
  fill(160, 180, 160, 180);
  quad(0, 320, 600, 280, 600, 400, 0, 400);

  fill(250, 210, 150);
  circle(110, 150, 160);
  
  fill(180, 210, 230);
  ellipse(470, 210, 250, 150);

  noFill();
  stroke(180, 160, 140);
  strokeWeight(2);
  arc(300, 200, 400, 250, radians(30), radians(170));
  arc(290, 130, 400, 240, radians(200), 0)
  
  fill(150, 150, 170);
  triangle(599, 1, 400, 1, 599, 150); 

  stroke(100, 90, 80);
  strokeWeight(6);
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
  
  // 잎
  fill(120, 180, 130);
  arc(205, 260, 60, 30, 0, radians(210));
  arc(245, 310, 60, 30, PI, radians(390));

  arc(280, 220, 60, 30, 0, PI);
  arc(325, 305, 60, 30, PI, radians(360));

  ellipse(360, 260, 50, 10); 
  ellipse(410, 350, 50, 10); 
  
  // 꽃 1
  fill(240, 170, 180);
  arc(223, 160, 75, 75, PI, radians(360));

  fill(220, 90, 100);
  arc(223, 160, 75, 75, 0, PI);

  fill(250, 230, 100);
  ellipse(223, 160, 24, 24);

  // 꽃 2
  fill(240, 200, 90);
  arc(300, 110, 70, 70, PI, radians(360));

  fill(230, 180, 70);
  arc(300, 110, 70, 70, 0, PI);

  fill(20);
  ellipse(300, 110, 20, 20);

  // 꽃 3
  fill(170, 195, 235);
  arc(380, 150, 85, 85, PI, radians(360));

  fill(90, 130, 220);
  arc(380, 150, 85, 85, 0, PI);

  fill(245);
  ellipse(380, 150, 26, 26);
}