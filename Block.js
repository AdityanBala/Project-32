var Dead = 0;

class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 0;
        World.add(world, this.body);
      }

      score(){
        if(this.visibility < 0 && this.visibility > -105){
          Score++;
        }
      }

      display(){
        var angle = this.body.angle;
        if(this.body.speed < 10 && this.body.speed !== 0){ 
            push();
            //fill("green");
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
          Dead = 1;

          //if(Dead === 1){
              World.remove(world,this.body);
              //Matter.Body.setStatic(this.body,true);
              //fill("red");
              //push();
              this.visibility = this.visibility - 1;
              //tint(255,this.visibility);
              //rectMode(CENTER);
              //rect(this.body.position.x, this.body.position.y, this.width, this.height);
              //pop();
          //}
          
        }
        
      }
}
