import { hasPrint } from "./InterFaceForClass";

export class Invoice implements hasPrint {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    print() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
} 

export class PaymentSlip implements hasPrint {
    constructor (
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}

    print() {
        return `${this.recipient} payed $${this.amount} for ${this.details}`;
    }
}