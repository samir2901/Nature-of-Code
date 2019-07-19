class Walker{
    constructor(){
        this.x = (width/2);
        this.y = (height/2);
        this.speed = 2;
    }
    move(){
        var choice = int(random(4));
        if(choice == 0){
            this.x += this.speed;
        }else if(choice == 1){
            this.x -= this.speed;
        }else if(choice == 2){
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