"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.BaseApiService = void 0;
var BaseApiService = /** @class */ (function () {
    function BaseApiService(endpoint) {
        this.endpoint = endpoint;
        this.apiUrl = 'https://example.com';
    }
    BaseApiService.prototype.getUrl = function () {
        return "".concat(this.apiUrl, "/").concat(this.endpoint);
    };
    return BaseApiService;
}());
exports.BaseApiService = BaseApiService;
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super.call(this, 'user') || this;
    }
    UserService.prototype.fetchData = function () {
        console.log(this.getUrl());
        return [];
    };
    return UserService;
}(BaseApiService));
exports.UserService = UserService;
var user = new UserService();
console.log(user.fetchData());
