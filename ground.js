class Ground{
    constructor(x,y,height,width){
        var options={
            isStatic:true,
            resetitution:0,
            friction:10
        }
        this.height=height
        this.width=width
        this.body=Bodies.rect(x,y,this.width,this.height);
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