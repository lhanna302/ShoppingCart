import fs from 'fs';
import Shipment from '../src/models/shipment.js';
import Customer from '../src/models/customer.js';
import Item from '../src/models/item.js';

const args = process.argv;
if(args.length < 4){
    throw new Error("Please include the paths of both orders and prices. See the README for more information.");
}
const ordersFile = args[2];
const pricesFile = args[3];

const orders = JSON.parse(fs.readFileSync(ordersFile));
const prices = JSON.parse(fs.readFileSync(pricesFile));

const items = Object.keys(prices).map(k => ({"sku": k, "price": prices[k]}));;

const customerOrders = orders.orders;
for(let i = 0; i < customerOrders.length; i++){
    const requestedItem = items.find(x => x.sku.toLowerCase() == customerOrders[i].sku.toLowerCase());
    const customer = {
        id: customerOrders[i].customerId, 
        credits: customerOrders[i].credits,
    };
   console.log(Shipment.createOrder(customer, requestedItem));
}