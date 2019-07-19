class Walker{
    constructor(){
        this.x = (width/2);
        this.y = (height/2);
        this.speed = 2;
    }
    move(){
        var choice = random(1);
        if(choice < 0.4){
            this.x += this.speed;
        }else if(choice < 0.6){
            this.x -= this.speed;
        }else if(choice < 0.8){
            this.y += this.speed;
        }else{
            this.y -= this.speed;
        }
        this.x = constrain(this.x, 0, width-10);
        this.y = constrain(this.y, 0, height-10);
    }
    show(){
        strokeWeight(4);
        stroke(0);
        point(this.x,this.y);
    }

}