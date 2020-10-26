class bob {
    constructor(x, y, r){
        var options = {
            
            friction:0.07,
            density:1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
      
        World.add(world, this.body);
    }
    display(){
        var bobPos = this.body.position
        
        push()
        translate(bobPos.x, bobPos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("blue");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}