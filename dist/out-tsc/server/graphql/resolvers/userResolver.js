"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var type_graphql_1 = require("type-graphql");
var userType_1 = require("../types/userType");
var bcrypt = require("bcryptjs");
var User_1 = require("../../entity/User");
var UserResolver = /** @class */ (function () {
    function UserResolver() {
    }
    UserResolver.prototype.user = function (email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, User_1.User.findOne({ email: email })];
            });
        });
    };
    UserResolver.prototype.register = function (firstName, lastName, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(password, 10)];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, User_1.User.create({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: hash
                            }).save()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        type_graphql_1.Query(function () { return User_1.User; }),
        tslib_1.__param(0, type_graphql_1.Arg('email')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserResolver.prototype, "user", null);
    tslib_1.__decorate([
        type_graphql_1.Mutation(function () { return User_1.User; }),
        tslib_1.__param(0, type_graphql_1.Arg('firstName')),
        tslib_1.__param(1, type_graphql_1.Arg('lastName')),
        tslib_1.__param(2, type_graphql_1.Arg('email')),
        tslib_1.__param(3, type_graphql_1.Arg('password')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, String, String, String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserResolver.prototype, "register", null);
    UserResolver = tslib_1.__decorate([
        type_graphql_1.Resolver(userType_1.UserType)
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
