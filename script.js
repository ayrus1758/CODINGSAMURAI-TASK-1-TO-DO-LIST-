const inputbox = document.getElementById("search_input");
const ListContainer = document.getElementById("task_list");

function addTask() {
    if (inputbox.value === '') {
        alert('you must write something!!!!!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= inputbox.value;
        ListContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    saveData ();
}

ListContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ();

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData ();
    }
},false);

function saveData (){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showdata(){
    ListContainer.innerHTML = localStorage.getItem("data");

}
showdata();
