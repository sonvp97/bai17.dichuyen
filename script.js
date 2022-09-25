/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveSpeed = function (){
    this.speed +=40;
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }

  this.moveLeft = function(){
    this.left -= 5;
    console.log('ok: ' + this.left);
  }

  this.moveTop = function(){
    this.top += 20;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function(){
    this.top -= 5;
    console.log('ok: ' + this.left);
  }

}

var hero = new Hero('RIGHT1.jpg', 20, 30, 200,20);

function start(){
    switch (Math.floor(Math.random()*5)){
      case 0:
        hero.moveRight();
        break;
      case 1:
        hero.moveLeft();
        break;
      case 2:
        hero.moveTop();
        break;
      case 3:
        hero.moveDown();
        break;
      case 4:
        hero.moveSpeed();
        break;
    }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();