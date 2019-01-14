"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var type_graphql_1 = require("type-graphql");
var UserType = /** @class */ (function () {
    function UserType() {
    }
    tslib_1.__decorate([
        type_graphql_1.Field(),
        tslib_1.__metadata("design:type", String)
    ], UserType.prototype, "name", void 0);
    UserType = tslib_1.__decorate([
        type_graphql_1.ObjectType()
    ], UserType);
    return UserType;
}());
exports.UserType = UserType;
