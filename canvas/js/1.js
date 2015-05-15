/**
 * Created by mm on 2015/5/15.
 */
var myCanvas = document.getElementById('myCanvas');
var myContext = myCanvas.getContext('2d');
var ctx = myContext;

ctx.beginPath();
for (var i = 0; i < 201; i++) {
    ctx.moveTo(0, i);
    ctx.lineTo(200, i);
    i += 10;
}

for (i = 10; i < 201; i++) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 200);
    i += 10;
}
ctx.stroke();


