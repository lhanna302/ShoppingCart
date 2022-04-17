These instructions assume a pwd of the project


To run:

`node src/index.js data/orders.json data/prices.json` where the paths for the arguments can be anything, as long as they are in the JSON format and contain the expected data in the expected order.

Caveats:
- I would not use a synchronous function in real life.  If this code were run on a server, it should use `readFile(...)` instead of `readFileSync(...)` to avoid tying up server resources.  I went with a blocking function in this case to quickly read the JSON.
- I should have checked to make sure the incoming JSON would not result in a buffer overflow, but I was unsure what resources the computer running the app would have.