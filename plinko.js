class Plinko {
    constructor (x,y,r){ 
        var options={
			isStatic:true,
			restitution:1,
			friction:0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    } 
    
    display() {
        var plinkopos=this.body.position;		
        push()
        translate(plinkopos.x, plinkopos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
        fill(255,0,255)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r*2, this.r*2)
        pop()
    }
}