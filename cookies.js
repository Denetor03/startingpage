var idCounter = 2;
try{
    idCounter = localStorage.getItem("idCounter");
}
catch(e){}

var saves = ["test test 0", "test test 1"];
console.log(localStorage.getItem("saves"));


if(localStorage.getItem("saves") != null){
    saves += localStorage.getItem("saves");    
}

saves.forEach(resync);


function add()
{
    var url = document.getElementById("input").value;
    var name = document.getElementById("input2").value;  
    
    idCounter++;
    if(saves != null){
        saves = saves + ", " +  url + " " + name + " " + idCounter ;
    }
    else{
        saves = url + " " + name + " " + idCounter;
    }
    create(url, name, idCounter);
    save();
    console.log(localStorage.getItem("saves"));

}

function resync(item) {
    var eintrag = [];
    eintrag = item.split(" ");
    console.log(item)
    create(eintrag[0], eintrag[1], eintrag[2]);

}



function create(url, name, id){
    let div = document.createElement('div');
    div.classList.add("grid-item");
    div.id = id;
    div.innerHTML = `<a href="${url}">${name}</a> <button onclick="remove(${id})">Remove</button>`;
    let text = document.createTextNode("");
    div.appendChild(text);
    document.body.appendChild(div)
    
}

function remove(id)
{
    document.getElementById(id).remove();
}

function save() {
    localStorage.setItem("saves", saves);
    localStorage.setItem("idCounter", idCounter);
}

function deletesaves() {
    localStorage.removeItem("saves");
    localStorage.removeItem("idCounter");
}