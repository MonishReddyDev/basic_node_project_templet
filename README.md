This is a basic nodejs project templete.Which any one can use it.
By keeping some of the most impportant core node principles and project management recommandations.
Feel free to change anything.

`src`-> Inside the src folder all the actual source code regarding the project reside,
this will not include any kind of tests(you might want to make saperate tests folder)

Lets take a look inside the `src` folder

- `config`-> In this folder anything and everything regarding any configuration setup of a library
  or module will be done.For example setting up: `dotenv` So that can use this environment varaible anywhere in code
  in a cleaner fashion.

- `routes` -> In the routed folder we register a route and the corresponding middleware routes to it.

- `middlewares` -> They are just going to interscept the incomming request where we write validators ,auth etc
- `controllers`-> They are like last middlewares as post them to call your business logic.like the flow will be
  router-> contollers->service->db and do back in same order.

- `repositeries`-> This contains all the logic using which we interact with db by writing queries and all raw queries.
- `services` -> This containes the business logic and interact with repositeries and to db to get the data

`utils`-> It contains helpers ,error responses etc

`Project setup`

- Inside the `/src` folder execute follwong cmd
```
npx sequelize init
```
By executing this you will see the config.json file in src/config.json

- If you are setting up your development env write the username and pass of your db and in dilact mention you db you want to use same for Prod and test

Run the server

npm run dev

