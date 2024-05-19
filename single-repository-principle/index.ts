import { Invoice } from "./invoice";
import { Product, Order } from "./order";
import { PaymentProcessor } from "./paymentProcessor";
import { PricingCalculator } from "./pricingCalculator";

const product1 = new Product('1', 'Iphone', 1000);
const product2 = new Product('2', 'X box', 5000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);
