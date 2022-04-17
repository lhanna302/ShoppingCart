const STUFFED_ANIMAL = "stuffedanimal";
const CRAYON = "crayon";
const BALLOON = "balloon";

export default class Shipment {
    constructor(customer, shipment, remainingCredits){
        this.customerId = customer.id;
        this.shipment = shipment;
        this.remainingCredits = remainingCredits;
    }

    static createOrder(customer, item){
        let shipment = [];
        let remainingCredits = customer.credits;
        let quantity = Math.floor(remainingCredits/item.price);
        switch(item.sku){
            case STUFFED_ANIMAL:
                shipment.push({
                    sku: STUFFED_ANIMAL,
                    quantity: quantity,
                });
                if(quantity % 5 == 0){
                    let index = shipment.findIndex(x => x.sku == STUFFED_ANIMAL);
                    shipment[index].quantity += Math.floor(quantity/5);
                    if(shipment.quantity % 5 == 0) {
                        shipment.quantity++;
                    }
                }
                remainingCredits = remainingCredits - quantity * item.price;
                break;
            case CRAYON:
                let price = item.price
                shipment.push({
                    sku: CRAYON,
                    quantity: quantity,
                });
                if(quantity % 2 == 0){
                    shipment.push({
                        sku: BALLOON,
                        quantity: Math.floor(quantity/2),
                    });
                }
                if(quantity > 5 ){
                    price = Math.ceil(item.price * .9);
                    quantity = Math.floor(remainingCredits/price);
                }
                remainingCredits = remainingCredits - quantity * price;
                break;
            case BALLOON:
                shipment.push({
                    sku: BALLOON,
                    quantity,
                })
                remainingCredits = remainingCredits - quantity * item.price;
                break;
        }

        return new Shipment(customer, shipment, remainingCredits);
    }
}
