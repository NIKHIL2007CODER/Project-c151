AFRAME.registerComponent('box' , {
    schema:{
        moveX : {type : "number" , default : 1}
    },
    init:function(){
        this.data.moveX+=1
    },
    tick:function(){
        this.data.moveX+=1
        var pos = this.el.getAttribute("rotation")
        pos.x = this.data.moveX
        this.el.setAttribute("rotation" , {x:pos.z, y:pos.x , z:pos.z})
    }
})