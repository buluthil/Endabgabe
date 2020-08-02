"use strict";
var Endabgabe;
(function (Endabgabe) {
    function savePicture() {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            insertPicture(Endabgabe.user);
        }
        else {
            alert("Your picture hasn't been saved");
        }
    }
    Endabgabe.savePicture = savePicture;
    function insertPicture(_name) {
        let information = [];
        information.push();
        for (let entry of Endabgabe.symbols) {
            let form = {
                "type": entry.getType(),
                "positionX": Math.floor(entry.position.x),
                "positionY": Math.floor(entry.position.y),
                "velocityX": Math.floor(entry.velocity.x),
                "velocityY": Math.floor(entry.velocity.y),
                "size": entry.size,
            };
            information.push(form);
        }
        sendData(information, _name);
        console.log(information);
    }
    async function sendData(_information, _name) {
        let name = _name;
        let canvasInfo = [];
        let width = Math.floor(Endabgabe.canvaswidth).toString();
        let height = Math.floor(Endabgabe.canvasheight).toString();
        let pensil = Math.floor(Endabgabe.pensilThickness).toString();
        let pensilcolor = Endabgabe.colorofpensil;
        canvasInfo.push(width, height, pensil, Endabgabe.canvas.style.background, pensilcolor);
        let canvasLook = JSON.stringify(canvasInfo);
        let canvasQuery = new URLSearchParams(canvasLook);
        let info = JSON.stringify(_information);
        let query = new URLSearchParams(info);
        let response = await fetch(Endabgabe.url + "?savePicture&" + name + canvasQuery.toString() + "&" + query.toString());
        await fetch(Endabgabe.url + "?insertName&" + name);
        let responseText = await response.text();
        if (responseText != "") {
            alert("Your picture " + name + " has been saved!");
        }
        else {
            alert("Error occured");
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=savePicture.js.map