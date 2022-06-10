
document.getElementById("label").innerHTML = "Test";
var idCounter = 0;
function add()
{
    var url = document.getElementById("input").value;
    var name = document.getElementById("input2").value;
    idCounter++;

    let div = document.createElement('div');
    div.classList.add("grid-item");
    div.id = idCounter;
    div.innerHTML = `<a href="${url}">${name}</a> <button onclick="remove(${idCounter})">Remove</button>`;
    let text = document.createTextNode("");
    div.appendChild(text);
    document.body.appendChild(div)


}
function remove(id)
{
    document.getElementById(id).remove();
}