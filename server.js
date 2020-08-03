"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let server = Http.createServer();
    let saveCanvas;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Hilal:12345@endabgabe.xoi33.mongodb.net/<dbname>?retryWrites=true&w=majority"; //"mongodb+srv://test:12345@cluster0-4eh0n.mongodb.net/<dbname>?retryWrites=true&w=majority";
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    connectDatabase(databaseUrl);
    async function connectDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoCLient = new Mongo.MongoClient(_url, options);
        await mongoCLient.connect();
        saveCanvas = mongoCLient.db("Zauberbild").collection("Pictures");
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        saveCanvas.insert(_order);
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map