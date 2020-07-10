class Drawing {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
         this.x = x;
         this.y =y ;
         this.w = w;
         this.y = y
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER)
  fill("black");
        rect(pos.x,pos.y,this.w,this.h);
    }
}