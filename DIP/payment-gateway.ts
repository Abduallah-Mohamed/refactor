// create a payment gateway class based on DIP principle
// DIP: Dependency Inversion Principle
// High-level modules should not depend on low-level modules. Both should depend on abstractions.
interface PaymentGateway {
    processPayment(amount: number, cardNumber: number, cvv: number, expiryDate: string): void; 
}

// paypal implementation of paymentGateway
class PaypalPaymentGateway implements PaymentGateway {
    processPayment(amount: number, cardNumber: number, cvv: number, expiryDate: string): void {
        // process payment using paypal
    }
}

// paymentService Class is a high-level module
// it should not depend on low-level modules
// it should depend on abstractions
// if we want to change the payment gateway, we can do it without changing the paymentService class
class PaymentService {
    paymentGateway: PaymentGateway;
    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }
    processPayment(amount: number, cardNumber: number, cvv: number, expiryDate: string) {
        this.paymentGateway.processPayment(amount, cardNumber, cvv, expiryDate);
    }
}