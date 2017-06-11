'use script'

var changeColor = document.getElementById('change');

changeColor.addEventListener('click', function () {
    var par1 = document.getElementById('par1');
    par1.style.backgroundColor = 'red';
    
    var par2 = document.getElementById('par2');
    par2.style.backgroundColor = 'yellow';
});
