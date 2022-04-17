## **Talkiatry Take Home Prompt**
Talkiatry is now an online retailer! We currently sell three items:

1. Balloons (SKU: "balloon")
2. Stuffed Animals (SKU: "stuffedanimal")
3. Crayon Boxes (SKU: "crayon")

We have a unique business model. Due to fluctuating prices for materials in the current 
economy, all items are "market priced." That is: they change daily. Instead of customers
ordering a number of items from us, they tell us what item they want (as a SKU) and how
much they're going to spend (as credits).

We then calculate how many of that item they've purchased.

It's a startup. We're innovating.

As a new business, we are also testing a few rebate programs and bonuses for large orders 
to encourage customers to buy more from us. The current programs we're testing are:

1. For every five Stuffed Animals they purchase, we send one Stuffed Animal for free!

2. For every two Crayon Boxes they purchase, we send one Balloon for free!

3. If they purchase more than five Crayon Boxes, we give them 10% off the Crayon Box price (rounding
the price up to the nearest dollar)!

These rebate offers stack - that is, if they purchase 25 Stuffed Animals, they will receive five
bonus Stuffed Animals, which then qualifies them for a sixth!

### **The Code Challenge**
Given:
1. A collection of orders (provided in `data/orders.json`), and
2. The day's market prices (provided in `data/prices.json`),

Write a program that, for each order, will:
1. Calculate which items we need to ship to the customer
2. Calculate how many of each item we need to ship to the customer
3. Calculate how many credits the customer will have remaining after the purchase
4. Write the orders to STDOUT (console.log is fine!)

Some guarantees:
1. Item SKU's used in orders.json will always exist in prices.json
2. Prices and credits will always be in whole dollar amounts
3. Orders will always specify only one item (but shipping might not!)

Some guidance:
1. DO provide a README.md with instructions on how to run your application!
2. DO structure the project. How do you organize your code?
3. DO provide unit tests where you think they are applicable
4. DO limit your time to three hours. You might not get to everything, and that's ok! We value
your time and prefer to put a ceiling on time commitment over test completion!
5. DO NOT use external libraries or frameworks aside from testing libraries

Sample Input and Output:  
For an order:
```
{
  "customerId": 1,
  "sku": "balloon",
  "credits": 53
}
```

We expect an output:
```
{
  "customerId": 1,
  "shipment": [
    {
      "sku": "balloon",
      "quantity": 10
    }
  ],
  "remainingCredits": 3
}
```
