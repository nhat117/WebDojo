"use strict";
exports.__esModule = true;
exports.PaymentSlip = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var PaymentSlip = /** @class */ (function () {
    function PaymentSlip(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    PaymentSlip.prototype.print = function () {
        return "".concat(this.recipient, " payed $").concat(this.amount, " for ").concat(this.details);
    };
    return PaymentSlip;
}());
exports.PaymentSlip = PaymentSlip;
