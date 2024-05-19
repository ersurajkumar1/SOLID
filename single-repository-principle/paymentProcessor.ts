import { Order } from "./order";

export class PaymentProcessor {
    
    processPayment(order: Order) {
        console.log('Payment processing ....');
        console.log('Payment processed successfully');
        console.log('Added to accouting system');
        console.log('Email sent to customer');
    }
}