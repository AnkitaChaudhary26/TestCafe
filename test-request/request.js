var http = require("http");

http.get('http://www.example.com', function (res) {
    var statusCode = res.statusCode;

    if (statusCode !== 200) {
        console.log(` Request Failed.\n Status Code: ${statusCode}`);

        res.resume();
        return;
    }

    console.log(` Request Success.\n Status Code: ${statusCode}`);
});