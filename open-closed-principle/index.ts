interface IPaymentProcessor {
    processPayment(amount: number): void;
}

/**
 * This class is open for extension but closed for modification
 */
class PaymentProcesor {

    processor: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    prcessPayment (amount: number) {
        this.processor.processPayment(amount);
    }
}

/**
 * This class is closed for extension but open for modification
 */
class CreditCardPaymentProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing payment of ${amount} using credit card`);
        return true;
    }
}

const creditCardProcessor = new CreditCardPaymentProcessor();

const paymentProcessor = new PaymentProcesor(creditCardProcessor);
paymentProcessor.prcessPayment(100);

