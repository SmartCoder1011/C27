class chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:30
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        strokeWeight(4);
        line(posA.x,posA.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }

}