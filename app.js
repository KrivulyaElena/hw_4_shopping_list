var addBtn = document.getElementById('form');
addBtn.addEventListener('submit', function (e) {
    e.preventDefault();
    var li = document.createElement('li');
    var inputText = document.getElementById('newItem').value;
    var t = document.createTextNode(inputText);

    if (inputText === '') {
        document.getElementById('newItem').classList.add("red-border");

    } else {
        var checkbox = document.createElement('input');
        var span = document.createElement('span');
        span.className = 'item';
        span.appendChild(t);
        checkbox.className = "check";
        checkbox.setAttribute('type', 'checkbox');
        li.appendChild(checkbox);
        li.appendChild(span);
        document.getElementById('shopList').appendChild(li);
        document.getElementById('newItem').value = '';
        document.getElementById('newItem').classList.remove("red-border");
    }
})

var coordinate = document.getElementById('coordinate');
window.addEventListener('mouseout', function (e) {
    //  if(e.clientY < 0){
    //     alert('noooo');
    //  }
    coordinate.innerText = 'x=' + e.clientX + '; y= ' + e.clientY;
})

var dragLine = document.getElementById('drag');
var thumbElem = document.getElementById('drag-item');
thumbElem.onmousedown = function (e) {
    var thumbCoords = getCoords(thumbElem);
    var shiftX = e.pageX - thumbCoords.left;
    var sliderCoords = getCoords(dragLine);
    document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;   
        if (newLeft < 0) {
            newLeft = 0;
        }
        var rightEdge = dragLine.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        thumbElem.style.left = newLeft + 'px';
    }
    document.onmouseup = function(){
        document.onmousemove = document.onmouseup = null;
    };
    return false;
};
thumbElem.ondragstart = function () {
    return false;
};
function getCoords(elem){
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}