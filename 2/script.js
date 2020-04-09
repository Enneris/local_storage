text=document.getElementById('text');
prev=document.getElementById('prev');
next=document.getElementById('next');
showhist=document.getElementById('showhist');
let history=[];
let i=history.length-1;
let value0=0;
let j=0;
text.addEventListener('input',function(){
    history.push(text.value);
    value0=[text.value];
    i=history.length-1;
    localStorage.setItem(localStorage.length,text.value)
     j++;
    localStorage.setItem('j',j);
    console.log(j)
})
window.addEventListener('DOMContentLoaded',function(){
    j=localStorage.getItem('j');
    console.log(j)
    history.push(localStorage.getItem(j));
})
prev.addEventListener('click',function(){
    if(history[--i]===undefined){
        showhist.innerHTML='Конец истории';
    }else{
           showhist.innerHTML=history[i]; 
    }

})
next.addEventListener('click',function(){
    if(history[++i]===undefined){
        showhist.innerHTML='Конец истории';
    }else{
           showhist.innerHTML=history[i]; 
    }
})
