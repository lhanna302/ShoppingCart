These instructions assume a pwd of the project.


To run:

`node src/index.js data/orders.json data/prices.json` where the paths for the arguments can be anything, as long as they are in the JSON format and contain the expected data in the expected order.

Caveats:
- I would not use a synchronous function in real life.  If this code were run on a server, it should use `readFile(...)` instead of `readFileSync(...)` to avoid tying up server resources.  I went with a blocking function in this case to quickly read the JSON.
- I should have checked to make sure the incoming JSON would not result in a buffer overflow, but I was unsure what resources the computer running the app would have.
- I should have written tests as I wrote code (starting with the obvious, easiest case first), instead of trying to work out the trickier logic and never getting to tests.  Every item type should have its own tests, with more tests for `stuffedanimal` and `crayon`.  
- I tried to do this in an organized, object-oriented way, and I wasn't fully successful.
- There is no error checking for the validity and applicability of the JSON files.  This is a dangerously naive design decision.
- I should have included a cleaner run script.

Questions I wish I had saved time to ask:
- What is the priority of work here?  Is this an MVP where I need to hit the core functionality to show to investors immediately?  Or is the priority on maintainability?  That answer would have definitely influenced my design choices.
- Do I need to persist a customer's remaining credits?
- What's the pipeline to get daily prices like?  
    - Was it necessary to take JSON files as command line arguments?  Or would I have been able to expect that a new file would be uploaded every day in the same spot?  If so, I would have included that location in a config file as a default.