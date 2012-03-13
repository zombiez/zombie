var IE = document.all?true:false;
if (!IE) document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;
document.onclick = shoot;
var tempX = 0; var tempY = 0;
angle; radians; sin; cos; keycheckleft; keycheckright; keycheckdown; keycheckup;
movingup; movingdown; movingleft; movingright; myx; myy; shooting; travel; xsin; xcos;
function getMouseXY(e) {
if (IE) { // grab the x-y pos.s if browser is IE
tempX = event.clientX + document.body.scrollLeft;
tempY = event.clientY + document.body.scrollTop;
}
else {  // grab the x-y pos.s if browser is NS
tempX = e.pageX;
tempY = e.pageY;
}  
if (tempX < 0){tempX = 0;}
if (tempY < 0){tempY = 0;}
var temp = $("#player").css("left");
var temp2 = $("#player").css("width");
var xpos = parseFloat(temp)+parseFloat(temp2)/2;
var temp = $("#player").css("top");
var temp2 = $("#player").css("height");
var ypos = parseFloat(temp)+parseFloat(temp2)/2;
radians = Math.atan2(tempY-ypos,tempX-xpos);
angle = radians * (180/Math.PI);
sin = Math.sin(radians);
cos = Math.cos(radians);
atan = Math.atan(radians);
$("#player").rotate(angle);
}
function load()
{
document.createElement("player");
$("<player id='player'></player>").appendTo("body");
document.createElement("bullet");
shooting = false;
animate = 1;
keycheckleft = false;
keycheckright = false;
keycheckdown = false;
keycheckup = false;
movingleft =  null;
movingright =  null;
movingdown =  null;
movingup =  null;
xpos = window.innerWidth/2 - parseFloat($("#player").css("width"))/2;
ypos = window.innerHeight/2 - parseFloat($("#player").css("height"))/2;
$("#player").css({"left":xpos});
$("#player").css({"top":ypos});
bgxpos = -1062+window.innerWidth/2;
bgypos = -2018+window.innerHeight/2;
myx = 1062;
myy = 2018;
$("#background").css({"background-position":bgxpos+" "+bgypos});
}
function keystroke(e)
{
var key;
key = (window.event) ? event.keyCode : e.keyCode;
if (key==65)
{
if (keycheckleft) return;
keycheckleft = true;
moveleft();
movingleft = setInterval("moveleft()",50);
clearInterval(movingright); clearInterval(movingdown); clearInterval(movingup);
}
if (key==68)
{
if (keycheckright) return;
keycheckright = true;
moveright();
movingright = setInterval("moveright()",50);
clearInterval(movingleft); clearInterval(movingdown); clearInterval(movingup);
}
if (key==83)
{
if (keycheckdown) return;
keycheckdown = true;
movedown();
movingdown = setInterval("movedown()",50);
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingup);
}
if (key==87)
{
if (keycheckup) return;
keycheckup = true;
moveup();
movingup = setInterval("moveup()",50);
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingdown);
}
}
function keyunstroke(e)
{
var key;
key = (window.event) ? event.keyCode : e.keyCode;
if (key==65)
{
keycheckleft = false;
clearInterval(movingleft);
}
if (key==68)
{
keycheckright = false;
clearInterval(movingright);
}
if (key==83)
{
keycheckdown = false;
clearInterval(movingdown);
}
if (key==87)
{
keycheckup = false;
clearInterval(movingup);
}
if (keycheckleft)
{
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingdown); clearInterval(movingup);
moveleft();
movingleft = setInterval("moveleft()",50);
}
if (keycheckright)
{
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingdown); clearInterval(movingup);
moveright();
movingright = setInterval("moveright()",50);
}
if (keycheckdown)
{
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingdown); clearInterval(movingup);
movedown();
movingdown = setInterval("movedown()",50);
}
if (keycheckup)
{
clearInterval(movingleft); clearInterval(movingright); clearInterval(movingdown); clearInterval(movingup);
moveup();
movingup = setInterval("moveup()",50);
}
}
function moveleft()
{
var xpos = parseFloat($("#player").css("left"));
var ypos = parseFloat($("#player").css("top"));
myx+=5*sin;
myy-=5*cos;
if (myx < window.innerWidth/2 || myx > 3000-window.innerWidth/2)
{
xpos+=5*sin;
var bgxpos = parseFloat($("#background").css("background-position"));
}
if (myy < window.innerHeight/2 || myy > 3000-window.innerHeight/2)
{
ypos-=5*cos;
var bgypos = $("#background").css("background-position");
bgypos = parseFloat(bgypos.substr(bgypos.indexOf("x")+1,bgypos.length));
}
if (myx >= window.innerWidth/2 && myx <= 3000-window.innerWidth/2)
var bgxpos = -myx + window.innerWidth/2;
if (myy >= window.innerHeight/2 && myy <= 3000-window.innerHeight/2)
var bgypos = -myy + window.innerHeight/2;
$("#background").css({"background-position":bgxpos+" "+bgypos});
$("#player").css({"left":xpos});
$("#player").css({"top":ypos});
animation();
}
function moveright()
{
var xpos = parseFloat($("#player").css("left"));
var ypos = parseFloat($("#player").css("top"));
myx-=5*sin;
myy+=5*cos;
if (myx < window.innerWidth/2 || myx > 3000-window.innerWidth/2)
{
xpos-=5*sin;
var bgxpos = parseFloat($("#background").css("background-position"));
}
if (myy < window.innerHeight/2 || myy > 3000-window.innerHeight/2)
{
ypos+=5*cos;
var bgypos = $("#background").css("background-position");
bgypos = parseFloat(bgypos.substr(bgypos.indexOf("x")+1,bgypos.length));
}
if (myx >= window.innerWidth/2 && myx <= 3000-window.innerWidth/2)
var bgxpos = -myx + window.innerWidth/2;
if (myy >= window.innerHeight/2 && myy <= 3000-window.innerHeight/2)
var bgypos = -myy + window.innerHeight/2;
$("#background").css({"background-position":bgxpos+" "+bgypos});
$("#player").css({"left":xpos});
$("#player").css({"top":ypos});
animation();
}
function movedown()
{
var xpos = parseFloat($("#player").css("left"));
var ypos = parseFloat($("#player").css("top"));
myx-=4*cos;
if (collision_x(myx,myy))
myx+=4*cos;
myy-=4*sin;
if (collision_y(myx,myy))
myy+=4*sin;
if (myx < window.innerWidth/2 || myx > 3000-window.innerWidth/2)
{
xpos-=4*cos;
if (collision_x(myx-cos,myy))
xpos+=4*cos;
var bgxpos = parseFloat($("#background").css("background-position"));
}
if (myy < window.innerHeight/2 || myy > 3000-window.innerHeight/2)
{
ypos-=4*sin;
if (collision_y(myx,myy-sin))
ypos+=4*sin;
var bgypos = $("#background").css("background-position");
bgypos = parseFloat(bgypos.substr(bgypos.indexOf("x")+1,bgypos.length));
}
if (myx >= window.innerWidth/2 && myx <= 3000-window.innerWidth/2)
var bgxpos = -myx + window.innerWidth/2;
if (myy >= window.innerHeight/2 && myy <= 3000-window.innerHeight/2)
var bgypos = -myy + window.innerHeight/2;
$("#background").css({"background-position":bgxpos+" "+bgypos});
$("#player").css({"left":xpos});
$("#player").css({"top":ypos});
animation();
}
function moveup()
{
var xpos = parseFloat($("#player").css("left"));
var ypos = parseFloat($("#player").css("top"));
myx+=6*cos;
if (collision_x(myx,myy))
myx-=6*cos;
myy+=6*sin;
if (collision_y(myx,myy))
myy-=6*sin;
if (myx < window.innerWidth/2 || myx > 3000-window.innerWidth/2)
{
xpos+=6*cos;
if (collision_x(myx+cos,myy))
xpos-=6*cos;
var bgxpos = parseFloat($("#background").css("background-position"));
}
if (myy < window.innerHeight/2 || myy > 3000-window.innerHeight/2)
{
ypos+=6*sin;
if (collision_y(myx,myy+sin))
ypos-=6*sin;
var bgypos = $("#background").css("background-position");
bgypos = parseFloat(bgypos.substr(bgypos.indexOf("x")+1,bgypos.length));
}
if (myx >= window.innerWidth/2 && myx <= 3000-window.innerWidth/2)
var bgxpos = -myx + window.innerWidth/2;
if (myy >= window.innerHeight/2 && myy <= 3000-window.innerHeight/2)
var bgypos = -myy + window.innerHeight/2;
$("#background").css({"background-position":bgxpos+" "+bgypos});
$("#player").css({"left":xpos});
$("#player").css({"top":ypos});
animation();
}
function collision_x(myx,myy)
{return false;}
function collision_y(myx,myy)
{return false;}
function animation()
{
animate++;
if (animate==11) animate=1;
if (animate>5)
$("#player").css({"background-image":"url('jerry2.png')"});
else
$("#player").css({"background-image":"url('jerry1.png')"});
}
function shoot()
{
if (!shooting)
{
shooting = true;
var xpos = parseFloat($("#player").css("left")) + parseFloat($("#player").css("width"))/2;
var ypos = parseFloat($("#player").css("top")) + parseFloat($("#player").css("height"))/2;
fire(xpos,ypos,sin,cos);
$("#player").css({"background-image":"url('jerry3.png')"});
setTimeout("imagereset()",250);
setTimeout("cooldown()",750);
}
}
function imagereset()
{
if (!keycheckup && !keycheckdown && !keycheckleft && !keycheckright)
$("#player").css({"background-image":"url('jerry1.png')"});
}
function cooldown()
{
shooting = false;
clearInterval(travel);
$("bullet").remove();
}
function fire(bulletx,bullety,fsin,fcos)
{ 
$("<bullet id='bullet'></bullet>").appendTo("body");
$("bullet").css({"left":bulletx});
$("bullet").css({"top":bullety});
xsin = fsin;
xcos = fcos;
travel = setInterval("bullet()",25);
}
function bullet()
{
var bulletx=parseFloat($("bullet").css("left"));
var bullety=parseFloat($("bullet").css("top"));
bulletx+=20*xcos; 
bullety+=20*xsin;
$("bullet").css({"left":bulletx});
$("bullet").css({"top":bullety});
}
/*
function collision_x(myx,myy)
{
if (myy < 2230 && myy > 1965 || myy < 1857 && myy > 1680 || myy < 1505 && myy > 1353)
{
if (myx < 695 + parseFloat($("#player").css("width"))/2)
return true;
if (myx > 1397 - parseFloat($("#player").css("width"))/2)
return true;
}
if (myy < 1964 && myy > 1856 || myy < 1681 && myy > 1504)
{
if (myx < 940 + parseFloat($("#player").css("width"))/2)
return true;
if (myx > 1155 - parseFloat($("#player").css("width"))/2)
return true;
}
if (myy < 1352 && myy > 1283)
{
if (myx < 1024 + parseFloat($("#player").css("width"))/2)
return true;
if (myx > 1099 - parseFloat($("#player").css("width"))/2)
return true;
}
if (myy < 1284 && myy > 872)
{
if (myx < 981 + parseFloat($("#player").css("width"))/2)
return true;
if (myx > 1133 - parseFloat($("#player").css("width"))/2)
return true;
}
if (myy < 873 && myy > 738)
{
if (myx < 981 + parseFloat($("#player").css("width"))/2)
return true;
if (myx > 1558 - parseFloat($("#player").css("width"))/2)
return true;
}
}
function collision_y(myx,myy)
{
if (myx > 700 && myx < 1024 || myx > 1099 && myx < 1397)
{
if (myy > 2230 - parseFloat($("#player").css("height"))/2)
return true;
if (myy < 1353 + parseFloat($("#player").css("height"))/2 && myy > 1315)
return true;
}
if (myx > 1156 && myx < 1397)
{
if (myy > 1509 - parseFloat($("#player").css("height"))/2 && myy < 1559 || myy > 1861 - parseFloat($("#player").css("height"))/2 && myy < 1911 || 
myy < 1682 + parseFloat($("#player").css("height"))/2 && myy > 1632 || myy < 1968 + parseFloat($("#player").css("height"))/2 && myy > 1918)
return true;
}
if (myx > 700 && myx < 938)
{
if (myy > 1509 - parseFloat($("#player").css("height"))/2 && myy < 1559 || myy > 1861 - parseFloat($("#player").css("height"))/2 && myy < 1911 || 
myy < 1682 + parseFloat($("#player").css("height"))/2 && myy > 1632 || myy < 1968 + parseFloat($("#player").css("height"))/2 && myy > 1918)
return true;
}
if (myx > 981 && myx < 1024 || myx > 1100 && myx < 1133)
{
if (myy > 1281 - parseFloat($("#player").css("height"))/2 && myy < 1315)
return true;
}
if (myx > 981 && myx < 1558)
{
if (myy < 739 + parseFloat($("#player").css("height"))/2)
return true;
if (myx > 1115 && myy > 890 - parseFloat($("#player").css("height"))/2 && myy < 940)
return true;
}
}
*/
