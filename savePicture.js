"use strict";
var Endabgabe;
(function (Endabgabe) {
    let options;
    function savePicture() {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            for (let i = 0; i < options.length; i++) {
                if (options[i] == name) {
                    alert("Please choose a different name");
                    Endabgabe.getUserName();
                    return;
                }
            }
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
        let name = _name.replace(" ", "_");
        let canvasInfo = [];
        let width = Math.floor(Endabgabe.canvaswidth).toString();
        let height = Math.floor(Endabgabe.canvasheight).toString();
        let pensil = Math.floor(Endabgabe.pensilThickness).toString();
        let pensilcolor = Endabgabe.colorofpensil;
        canvasInfo.push(width, height, pensil, Endabgabe.canvasbackground, pensilcolor);
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
        findPictures();
    }
    // Beispiel genommen an KoehlerAI's Endabgabe zur Weiterberarbeitung der Daten welche in Datenbank gespeichert wurden
    async function findPictures() {
        let response = await fetch(Endabgabe.url + "?" + "getPicture=yes");
        let responseText = await response.text();
        createDatalist(responseText);
    }
    function createDatalist(_response) {
        let picturecollection = document.getElementById("picturecollection");
        options = _response.split(",");
        while (picturecollection.firstChild) {
            picturecollection.removeChild(picturecollection.firstChild);
        }
        for (let entry of options) {
            if (entry = "") {
                //skip this
            }
            else {
                let option = document.createElement("option");
                option.setAttribute("name", entry);
                option.value = entry;
                picturecollection.appendChild(option);
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=savePicture.js.map