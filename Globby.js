class Glob{
    constructor(x,y,radius){
        var options={
          isStatic:false,
          resetitution:10,
          friction:0.5,
        }
        this.radius=radius
        this.body=Matter.Body.circle(x,y,this.radius,options);
    }
    attacks(){
        
    }
    weapons(){

    }
    display(){
     var pos=this.body.position
     push();
     translate(pos.x,pos.y);
     ellipseMode(CENTER)
     ellipse(x,y,this.radius);
     pop();
    }
}