/**
 * Created by mm on 2015/5/16.
 */
window.onload = function(){
    var circles = document.querySelectorAll('.dragItems div');
    for(var i=0;i<circles.length;i++){
        //监听拖拽开始事件
        circles[i].addEventListener('dragstart',startDrag,false);
        //监听拖拽结束事件
        circles[i].addEventListener('dragend',endDrag,false);
    }
    function startDrag(event){
        this.style.border = '5px solid pink';
        //设置MIME类型
        event.dataTransfer.setData("text", this.className);
    }
    function endDrag(event){
        this.style.border = '';
        //this.style.display = 'none';
    }

    var dragTarg = document.querySelector('.dragTarg');
    //监听其他元素拖进元素的事件
    dragTarg.addEventListener('dragenter', function(e){
        this.style.border = '3px #aaa dashed';
    });
    //监听其他元素离开该元素的事件
    dragTarg.addEventListener('dragleave', function(e){
        this.style.border = '3px solid black';
    });

    function dropit(event){
        event.preventDefault();
        var myElement = document.querySelector('.dragItems > .'+ event.dataTransfer.getData('text'));
        this.appendChild(myElement,false);
    };
    dragTarg.addEventListener('dragover', function(e){
        e.preventDefault();
    });
    dragTarg.addEventListener('drop',dropit, false);
}