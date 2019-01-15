"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = process.env.PORT || 5000;
var URL = process.env.URL || 'http://localhost';
app_1.default.listen(PORT, function () {
    // tslint:disable-next-line
    console.log("\uD83D\uDE80 Server is listening on " + URL + ":" + PORT + "/graphql");
});
