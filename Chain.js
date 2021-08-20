class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    birdrelease(){
this.chain.bodyA=null
    }


    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB
        strokeWeight(20);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}