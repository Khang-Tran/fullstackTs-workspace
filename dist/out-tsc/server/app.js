"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var express = require("express");
var userResolver_1 = require("./graphql/resolvers/userResolver");
var apollo_server_express_1 = require("apollo-server-express");
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.configGraphql = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var schema;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, type_graphql_1.buildSchema({ resolvers: [userResolver_1.UserResolver] })];
                    case 1:
                        schema = _a.sent();
                        this.apolloServer = new apollo_server_express_1.ApolloServer({ schema: schema });
                        this.apolloServer.applyMiddleware({ app: this.app });
                        return [2 /*return*/];
                }
            });
        }); };
        this.app = express();
        this.configGraphql().catch(function (err) {
            // tslint:disable-next-line
            return console.log("Cannot create Apollo Server " + err.message);
        });
        typeorm_1.createConnection()
            .then(function () {
            // tslint:disable-next-line
            return console.log('TypeOrm connected.');
        })
            .catch(function (err) { return "Cannot connect to TypeOrm " + err.message; });
    }
    return App;
}());
exports.default = new App().app;
