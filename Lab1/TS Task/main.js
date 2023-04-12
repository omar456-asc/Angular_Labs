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
// Abstract class Account
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
// Saving_Account class
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saving_Account.prototype.debitAmount = function (amount) { };
    Saving_Account.prototype.creditAmount = function (amount) { };
    Saving_Account.prototype.getBalance = function () {
        return this.balance;
    };
    Saving_Account.prototype.addCustomer = function () { };
    Saving_Account.prototype.removeCustomer = function () { };
    return Saving_Account;
}(Account));
// Current_Account class
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Current_Account.prototype.debitAmount = function (amount) { };
    Current_Account.prototype.creditAmount = function (amount) { };
    Current_Account.prototype.getBalance = function () {
        return this.balance;
    };
    Current_Account.prototype.addCustomer = function () { };
    Current_Account.prototype.removeCustomer = function () { };
    return Current_Account;
}(Account));
