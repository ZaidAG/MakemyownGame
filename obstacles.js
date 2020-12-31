class Obstacles{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            resetitution:0,
            friction:5.5
        }
        this.width=width;
        this.height=height;
        this.body=Matter.Body.rect(x,y,this.width,this.height);
    }
    display(){
      var pos=this.body.position
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(x,y,this.width,this.height);
    }
}