var ex_btn = document.getElementById('ex_btn');
var edu_btn = document.getElementById('edu_btn');

ex_btn.addEventListener('click',function(){
    var eduContent = document.getElementById('education');
    eduContent.style.display = "none";
    var exContent = document.getElementById('exprience');
    exContent.style.display="block"
})

edu_btn.addEventListener('click',function(){
    var eduContent = document.getElementById('education');
    eduContent.style.display = "block";
    var exContent = document.getElementById('exprience');
    exContent.style.display="none"
})