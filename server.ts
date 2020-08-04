import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {

    let server: Http.Server = Http.createServer();
    let saveCanvas: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    
    let databaseUrl: string = "mongodb+srv://Hilal:12345@endabgabe.xoi33.mongodb.net/<dbname>?retryWrites=true&w=majority"; //"mongodb+srv://test:12345@cluster0-4eh0n.mongodb.net/<dbname>?retryWrites=true&w=majority";

    console.log("Server starting on port:" + port);

    server.listen(port);
    server.addListener("request", handleRequest);
    connectDatabase(databaseUrl);

    async function connectDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoCLient: Mongo.MongoClient = new Mongo.MongoClient (_url, options);
        await mongoCLient.connect();
        saveCanvas = mongoCLient.db("Zauberbild").collection("Pictures");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
            
        }

        _response.end();
    }

    function storeOrder(_order: any): void {
        saveCanvas.insert(_order);
    }
}