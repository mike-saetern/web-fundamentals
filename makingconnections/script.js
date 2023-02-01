var change = document.querySelector("#name");
var requestbox = document.querySelector("#requestnum")
var connectbox = document.querySelector("#connectnum")

function editProfile(){
    change.innerText="John Smith";
}

function acceptUser(id){
    var element = document.querySelector(id);
    element.remove();
    requestbox.innerText--;
    connectbox.innerText++;
}

function declineUser(id){
    var element = document.querySelector(id);
    element.remove();
    requestbox.innerText--;
}

