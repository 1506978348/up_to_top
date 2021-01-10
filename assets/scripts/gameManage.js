
cc.Class({
    extends: cc.Component,

    properties: {
        ball: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.director.getPhysicsManager().enabled = true;
        setInterval(() => {
            let a;
            Math.random() < 0.5 ? a = 300 : a = -300;
            this.ball.getComponent(cc.RigidBody).angularVelocity = a;
        }, 3000);

        this.initTouch();
    },
    initTouch() {
        this.node.on("touchstart", this.onTouchStart, this)
        this.node.on("touchmove", this.onTouchMove, this)
        this.node.on("touchend", this.onTouchEnd, this)
    },
    onTouchStart() {
        // let body = this.ball.getComponent(cc.RigidBody).linearVelocity
        this.ball.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 1000)



    },
    onTouchMove() { },
    onTouchEnd() {
        // this.ball.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,0)
    },

    start() {

    },

    update(dt) {
    },
});
