"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var type_graphql_1 = require("type-graphql");
var User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        type_graphql_1.Field(function () { return type_graphql_1.ID; }),
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text', { unique: true }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "password", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "email", void 0);
    User = tslib_1.__decorate([
        type_graphql_1.ObjectType(),
        typeorm_1.Entity()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
