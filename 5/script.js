let text = document.getElementById('text');
let li = document.querySelectorAll('li');
let full_date = document.getElementById('full_date');
let save_but = document.getElementById('savebut');
let del_but = document.getElementById('delbut');
let calendar=document.getElementById('calendar');
let calenddiv=document.getElementById('calenddiv');
let len = localStorage.length;



function createCalendar(elem,year,month){
    let mon=month-1;
    let d=new Date(year,mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
      }
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      table += '</tr></table>';
      elem.innerHTML = table;
    }
    function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }

savebut.addEventListener('click',function(){
	if(text.value == "" || full_date.value == ""){
		alert('Необходимо заполнить все поля')
	}
	else{
        
		let my_date = full_date.value;
		let obj = {dat: my_date, note: text.value};
		let json = JSON.stringify(obj);
		localStorage.setItem(`obj${len}`, json);	
		load();
		len++;
	}
})

function load(){

	for(let i = 0; i < li.length; i++){
		json = localStorage.getItem(`obj${i}`);
		obj = JSON.parse(json);
		if(obj != null){
			li[i].innerHTML = obj.dat + "<br>" + obj.note;
		}
	}
}

del_but.addEventListener('click',function(){
    localStorage.clear();
	location.reload();
})
calendar.addEventListener('click',function(){
    if(text.value == "" || full_date.value == ""){
		alert('Необходимо заполнить все поля')
	}else{
        let date_elems=String(full_date.value).split('-');
        console.log(date_elems);
        let year=date_elems[0];
        let month=date_elems[1];
    createCalendar(calenddiv,year,month);
    }
    
})
load();