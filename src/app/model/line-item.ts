import { Request } from "./request";
import { Product } from "./product";

export class LineItem {
    request: Request;
    products: Product[];
    quantity: number;

    constructor(request: Request, 
        products: Product[], quantity: number = 1) {
            this.request = request;
            this.products = products;
            this.quantity = quantity;
    }
}
