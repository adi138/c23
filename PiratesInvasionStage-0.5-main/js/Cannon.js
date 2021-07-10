class Cannon{
constructor(x,y,w,h){
this.width=w
this.height=h
this.x=x
this.y=y

}
display(){
rect(150,100,this.width,this.height)
arc(this.x,this.y,100,230,PI,TWO_PI)
}
}