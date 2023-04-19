class planet {
  constructor(dimensi, jarak, sudut, kecepatan){
    this.dimensi = dimensi;
    this.jarak = jarak;
    this.sudut = sudut;
    this.kecepatan = kecepatan;
  }
}

let v = 3;
const matahari = new planet(25,0,0,0);
const bumi = new planet(5,75,1,1/3*v);
let rotasibulan = 1;



const merkurius = new planet(3,30,1,1*v)
const venus = new planet(5,50,1,1/2*v)
const mars = new planet(5,90,1,1/4*v)
const jupiter = new planet(15,125,1,1/5*v)


function setup() {
    createCanvas(1320, 540);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  
  matahariShow();
  bumiShow();
  merkuriusShow();
  venusShow();
  marsShow();
  jupiterShow();

}

//Matahari
function matahariShow(){
  noStroke();
  fill('orange');
  circle(matahari.jarak,matahari.jarak,matahari.dimensi);
}

//Bumi
function bumiShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,212);
  
  //planet
  rotate(bumi.sudut);
  noStroke();
  fill('dodgerblue');
  circle(bumi.jarak,bumi.jarak,bumi.dimensi);
  bumi.sudut += bumi.kecepatan;
  
  //Bulan
  fill('white');
  translate(bumi.jarak,bumi.jarak);
  rotate(rotasibulan);
  circle(10,10,2);
  pop()
  rotasibulan += 1
}

//Merkurius
function merkuriusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,85);

  //planet
  rotate(merkurius.sudut);
  noStroke();
  fill('orange');
  circle(merkurius.jarak,merkurius.jarak,merkurius.dimensi);
  pop();
  merkurius.sudut += merkurius.kecepatan;
}

//Venus
function venusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,142);

  //planet
  rotate(venus.sudut);
  noStroke();
  fill('#937D64');
  circle(venus.jarak,venus.jarak,venus.dimensi);
  pop();  
  venus.sudut += venus.kecepatan;
}

//Mars
function marsShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,254);

  //planet
  rotate(mars.sudut);
  noStroke();
  fill('red');
  circle(mars.jarak,mars.jarak,mars.dimensi);
  pop();
  mars.sudut += mars.kecepatan;
}

//Jupiter
function jupiterShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,355);

  //planet
  rotate(jupiter.sudut);
  noStroke();
  fill(251, 127, 80);
  circle(jupiter.jarak,jupiter.jarak,jupiter.dimensi);
  pop();
  jupiter.sudut += jupiter.kecepatan;
}
