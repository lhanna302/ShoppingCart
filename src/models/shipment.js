class Shipment {
    constructor(customer, shipment, remainingCredits){
        this.customer = customer;
        this.shipment = shipment;
        this.remainingCredits = remainingCredits;
    }

    static createOrder(customer, item){
        console.log('create order');
        let shipment = [];
        shipment.push(item);
        let quantity = Math.floor(item.price/credits);
        let remainingCredits = 0;
        switch(item.sku){
            case "stuffedanimal":
                if(quantity % 5 == 0){
                    shipment.push({ // re-examine this.
                        sku: "stuffedAnimal",
                        quantity: quantity + Math.floor(quantity/5),
                    });
                }
            case "crayon":
                if(quantity % 2 == 0){
                    shipment.push({
                        sku: "balloon",
                        quantity: Math.floor(quantity/2),
                    });
                }
                if(quantity > 5 ){
                    const price = Math.ceil(item.price * .9);
                    quantity = Math.floor(price/credits);
                }
        }
        return new Shipment(customer, shipment, remainingCredits);
    }
}
