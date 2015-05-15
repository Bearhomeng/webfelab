/**
 * Created by mm on 2015/5/15.
 */
//========================5============================
//移动的黄色脸
var x = 0;
var speed = 6;
var moveSmile = document.getElementById('moveSmile');
var smileCtx5 = moveSmile.getContext('2d');
function animate() {
    var reqAnimFrame = window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || window.oRequestAnimationFrame;
    reqAnimFrame(animate);
    x += speed;
    if (x <= 0 || x >= 600) {
        speed = -speed;
    }
    drawFace();
}
function drawFace() {
    smileCtx5.clearRect(0, 0, 800, 200);
    //画脸
    smileCtx5.beginPath();
    smileCtx5.fillStyle = '#F1F42E';
    smileCtx5.arc(x + 100, 100, 99, 0, Math.PI * 2);
    smileCtx5.fill();
//画嘴巴
    smileCtx5.moveTo(x + 170, 100);
    smileCtx5.arc(x + 100, 100, 70, 0, Math.PI);
    smileCtx5.stroke();
//画左眼
    smileCtx5.beginPath();
    smileCtx5.fillStyle = 'black';
    smileCtx5.moveTo(x + 60, 65);
    smileCtx5.arc(x + 60, 65, 12, 0, Math.PI * 2);
    smileCtx5.fill();
//画右眼
    smileCtx5.beginPath();
    smileCtx5.moveTo(x + 140, 65);
    smileCtx5.arc(x + 140, 65, 12, 0, Math.PI * 2);
    smileCtx5.fill();
}
animate();