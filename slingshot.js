class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}