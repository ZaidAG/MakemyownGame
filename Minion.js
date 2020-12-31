class miniEvil{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            resetitution:1,
            friction:0.5
        }
        this.height=height;
        this.width=width;
        this.body=Matter.Body.rect(x,y,width,height);
    }
    attacks(){

    }
    display(){
    var pos=this.body.position;
    push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     rect(x,y,this.width,this.height);
     pop();
    }
}