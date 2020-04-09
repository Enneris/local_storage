text=document.getElementById('text');
prev=document.getElementById('prev');
next=document.getElementById('next');
showhist=document.getElementById('showhist');
let history=[];
let i=history.length-1;
text.addEventListener('input',function(){
    history.push(text.value);
    console.log(text.value);
    i=history.length-1;
    localStorage.setItem('val',text.value)
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

