/**
 * Created by mm on 2015/5/16.
 */
window.onload = function(){
    var circles = document.querySelectorAll('.dragItems div');
    for(var i=0;i<circles.length;i++){
        //������ק��ʼ�¼�
        circles[i].addEventListener('dragstart',startDrag,false);
        //������ק�����¼�
        circles[i].addEventListener('dragend',endDrag,false);
    }
    function startDrag(event){
        this.style.border = '5px solid pink';
        //����MIME����
        event.dataTransfer.setData("text", this.className);
    }
    function endDrag(event){
        this.style.border = '';
        //this.style.display = 'none';
    }

    var dragTarg = document.querySelector('.dragTarg');
    //��������Ԫ���Ͻ�Ԫ�ص��¼�
    dragTarg.addEventListener('dragenter', function(e){
        this.style.border = '3px #aaa dashed';
    });
    //��������Ԫ���뿪��Ԫ�ص��¼�
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