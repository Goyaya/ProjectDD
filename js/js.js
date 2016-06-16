/**
 * Created by YangZi on 2016/6/15.
 */
function imgTranslate() {
    var index = 0;
    //��ȡ����ͼƬ������Բ����������ڲ�������ͼƬ�����Ϳ�����������idΪindex-img-list
    var container = document.getElementById('index-img-list');
    //��ȡ�����ڰ���ͼƬ������
    var images = container.firstElementChild;
    //��ȡͼƬ��������̬��������
    var imgCount = images.children.length;
    //alert(imgCount);
    images.width = 100 * imgCount + '%';

    //���´���controls
    var controls = document.getElementById('controls');
    var controlCount = controls.childElementCount;
    var controlArr = controls.children;

    setInterval(function(){
        index = index + 1 < imgCount ? index+1 : 0;
        for (var i = 0; i < controlCount; i++){
            controlArr[i].classList.remove('active');
        }
        controlArr[index].classList.add('active');
        //�ƶ�ͼƬ
        images.style.webkitTransform = 'translate3d(-'+ index*100/imgCount+'%,0,0'+')';
        images.style.transform='translate3d(-'+index*100.00/imgCount+'%,0,0)';
    },3000);
}

function onTableItemClick(e) {
    //��ȡҪ��ʾ�ĺ���ID
    var activeID = e.getAttribute('href').substring(1);
    //����ID��ȡҪ��ʾ�ĺ���
    var activePlan = document.getElementById(activeID);
    //�ı�table����״̬
    change(e);
    //�ı���ʾ����״̬
    change(activePlan);
    event.preventDefault();
}
function change(e) {
    var changeEle = e.parentElement.children;
    var changeCount = changeEle.length;
    for (var i = 0; i < changeCount; i++) {
        changeEle[i].classList.remove('active');
    }
    e.classList.add('active');
}