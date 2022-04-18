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
                    shipment = calculateStuffedAnimalShipment(shipment, quantity);
                }
                break;
            case CRAYON:
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
                    item.price = Math.ceil(item.price * .9);
                    quantity = Math.floor(remainingCredits/item.price);
                }
                break;
            case BALLOON:
                shipment.push({
                    sku: BALLOON,
                    quantity,
                });
                break;
        }
        remainingCredits = customer.updateCustomerCredits(remainingCredits, quantity * item.price)
        return new Shipment(customer, shipment, remainingCredits);
    }
}

function calculateStuffedAnimalShipment(shipment, quantity) {
    const index = shipment.findIndex(x => x.sku == STUFFED_ANIMAL);
    shipment[index].quantity += Math.floor(quantity / 5); //for every five, add one
    if (shipment.quantity % 5 == 0) { // if, after handling the initial addition, we have another set of five, add another freebie
        shipment.quantity++;
    }
    return shipment;
}

