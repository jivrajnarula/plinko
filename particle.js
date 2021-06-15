class Particle {
    constructor (x,y,r){ 
        var options={
			isStatic:false,
			restitution:0.5,
			friction:1.5
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.color=color( random(0,255), random (0,255), random (0,255))
		World.add(world, this.body);
    } 
    
    display() {
        var particlepos=this.body.position;		
        push()
        translate(particlepos.x, particlepos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r*2, this.r*2)
        pop()
    }
}