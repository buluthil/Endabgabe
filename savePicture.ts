namespace Endabgabe {

    export interface PictureProperties {

        type: string;
        positionX: number;
        positionY: number;
        velocityX: number;
        velocityY: number;
        size: number;
    }

    export function savePicture(): void {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            insertPicture(user);
        } else {
            alert("Your picture hasn't been saved");
        }
    }

    function insertPicture(_name: string): void {
        let information: PictureProperties[] = [];
        information.push();
        for (let entry of symbols) {
            let form: PictureProperties = {
            "type": entry.getType(),
            "positionX": Math.floor(entry.position.x),
            "positionY": Math.floor(entry.position.y),
            "velocityX": Math.floor(entry.velocity.x),
            "velocityY": Math.floor(entry.velocity.y),
            "size": entry.size,
            }
        information.push(form);
        }
        sendData(information, _name)
        console.log(information);
    }

    async function sendData(_information: PictureProperties[], _name: string): Promise<void> {
        let name: string = _name;
        let canvasInfo: string[] = [];
        let width: string = Math.floor(canvaswidth).toString();
        let height: string = Math.floor(canvasheight).toString();
        let pensil: string = Math.floor(pensilThickness).toString();
        let pensilcolor: string = colorofpensil;
        canvasInfo.push(width, height, pensil, canvasbackground, pensilcolor);

        let canvasLook: string = JSON.stringify(canvasInfo);
        let canvasQuery: URLSearchParams = new URLSearchParams(canvasLook);

        let info: string = JSON.stringify(_information);
        let query: URLSearchParams = new URLSearchParams(info);
        
        let response: Response = await fetch (url + "?savePicture&" + name + canvasQuery.toString() + "&" + query.toString());
        await fetch(url + "?insertName&" + name);

        let responseText: string = await response.text();
        if (responseText != "") {
            alert("Your picture " + name + " has been saved!")
        } else {
            alert("Error occured");
        }
    }
}