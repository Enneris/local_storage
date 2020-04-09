text=document.getElementById('text');
my_date=document.getElementById('my_date');
add=document.getElementById('add');
search=document.getElementById('search');
del=document.getElementById('del');
delall=document.getElementById('delall');


add.addEventListener('click',function(){
    if(text.value<1){
        alert('Вы ввели недостаточно символов');
    }
    localStorage.setItem(my_date.value,text.value);
})

search.addEventListener('click',function(){
    if(localStorage.getItem(my_date.value)==null){
        text.value='Такой записи не существует'
    }else{
        text.value=localStorage.getItem(my_date.value);
    }
})
del.addEventListener('click',function(){
    localStorage.removeItem(my_date.value);
})
delall.addEventListener('click',function(){
    localStorage.clear();
})