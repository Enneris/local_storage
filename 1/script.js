text=document.getElementById('text');
text.addEventListener('input',function(){
    let x = text.value;
    localStorage.setItem('text',x);
})
window.document.addEventListener('DOMContentLoaded',function(event){
    function a(){
        text.value = localStorage.getItem('text'); 
    } 
    setTimeout(a, 100);
},false)