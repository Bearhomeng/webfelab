/**
 * Created by mm on 2015/5/16.
 */
window.onload = function () {
    function startDrag() {
        event.dataTransfer.setData("DownloadURL",this.getAttribute("data-downloadurl"));
    }
    var circles =document.querySelectorAll(".dragItems div");
    for(var i=0; i< circles.length; i++) {
        circles[i].addEventListener('dragstart',startDrag,false);
    }
};