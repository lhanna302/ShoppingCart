const fs = require('fs');
const Shipment = require('./models/shipment');
const Customer = require('./models/customer');
const Item = require('./models/item');

const arguments = process.argv;
if(arguments.length < 4){
    throw new Error("Please include the paths of both orders and prices. See the README for more information.");
}
const ordersFile = arguments[2];
const pricesFile = arguments[3];

const orders = JSON.parse(fs.readFileSync(ordersFile));
const prices = JSON.parse(fs.readFileSync(pricesFile));

const items = Object.keys(prices).map(k => ({"sku": k, "price": prices[k]}));;

const customerOrders = orders.orders;
for(i = 0; i < customerOrders.length; i++){
    const requestedItem = items.find(x => x.sku.toLowerCase() == customerOrders[i].sku.toLowerCase());
    const customer = {
        id: customerOrders[i].customerId, 
        credits: customerOrders[i].credits,
    };
   let shipment = Shipment.createOrder(customer, requestedItem);
   console.log(customer.id, shipment.createOrder(customer.credits, requestedItem));
}