function setup() {
  createCanvas(1200,1200);
  
}

function draw() {
  background(0);
  //creating first box
  rect(20,40,20,200); 
  rect(250,40,20,200) 
  rect(20,40,230,20);
  rect(20,230,250,20);

  //creating second box
  rect(700,40,20,200);
  rect(930,40,20,200);
  rect(700,40,250,20);
  rect(700,230,250,20);

  //creating third box
  rect(20,500,20,200);
  rect(250,500,20,200);
  rect(30,500,230,20);
  rect(20,700,250,20);

  //creating forth box
  rect(700,500,20,200);
  rect(950,500,20,200);
  rect(710,500,250,20);
  rect(700,700,270,20);

  //creating the ending box
  rect(400,300,200,200);

  //creating four dots  for first box
  ellipse(200,100,50);
  ellipse(100,100,50);
  ellipse(100,200,50);
  ellipse(200,200,50);

  //creating four dots for second box
  ellipse(770,110,50);
  ellipse(870,110,50);
  ellipse(770,200,50);
  ellipse(870,200,50);

  //creating four dots for second box
  ellipse(100,575,50);
  ellipse(200,575,50);
  ellipse(100,650,50);
  ellipse(200,650,50);

  //creating four dots for second box
  ellipse(770,575,50);
  ellipse(900,575,50);
  ellipse(770,650,50);
  ellipse(900,650,50);

  drawSprites();
}