import { Product } from "./order";

export class PricingCalculator {
    calculatePricing(products: Product[]) {
        return products.reduce((acc, product) => acc + product.price, 0);
    }
}