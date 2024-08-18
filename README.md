# T3A2-B_LuciLiving

Welcome to Real-Estate Blog **LuciLiving**!

## Link to Deployment...

[LuciLiving](https://t3a2-b-luciliving.onrender.com/)

## Link to Repo...

[Repo](https://github.com/Hmmmm-Josh/T3A2-B_LuciLiving)

### How to run?...

- Runs and deploys...
```
src/ $ npm run build

src/ $ npm start
```

- Runs local client...

```
src/client/ $ npm run dev
```

- Runs backend database...
```
src/ $ npm run dev
```

- If .env files are not created in startup, add them in to the `src` folder with...

```
MONGO = 'mongodb+srv://JoshNah:Guest1@luciliving.156vz.mongodb.net/LuciLiving?retryWrites=true&w=majority&appName=LuciLiving'

JWT_SECRET = "guest"
```

## Deviations from original plan

I had stuck with a lot of the same layout of my wireframes, as from Part A, but I did not yet complete my entire project as a result.
As for planning and trying to adhere to my plan seen in my Part A, I some pretty bad luck with my grandma dying in the middle of my final assessment and strained me more than I realised.


[Part A ](https://github.com/Hmmmm-Josh/T3A2-A)

## Features...

(I had not come so far as I thought, I had many other challenges on the way. I would like to come back and finish this someday. However, most of the testing, logging-in, and signing-out does work, as well as user creating with the user).

- Creating a profile.
- Logging in
- Signing in / out
- Ability to post (goes nowhere did not finish in time)
- Dark/Mode switch

### Library usage...

I had used several libraries within my Client side of things, and withing my API side of things. A few to name:
API:
- bcryptjs (implementation of hasing)

- cookie-parser (allows the extraction of cookie data from HTTP requests)

- dotenv (loads environments)

- express (provides a broad amount of features to create the client)

- jsonwebtoken (encrypts users passwords when transferring data)

- mongoose (ODM library)

- node (shares modules better between each files)

- nodemon (allows better ease for Node.js applications and automatic restarting)

- path (allows easier use of path's when not able to find home directory)

- slug (function to create slugs from strings, and removes special characters and spaces)

- reduxjs/toolkit 

- firebase (firebase allows running code in the web browser for testing)

- flowbite-react (open source UI component library for creating links, buttons, forms and such)

- mongodb (is the database for the backend development, and stored on the cloud)

- mongoose (is an ODM library for MongoDB, and allows for ease and transfer of files)

- react (is a JS library for creating user interfaces)

- react-dom (manages server requests amd rendering)

- react-icons (allows for simple text icons to be utilised)

- react-quill (This is a data/writing form, able to be inputted to create a simple writing form for anyone to use)

- react-redux (hooks react components and interacts with the react store)

- react-router-dom (implements dynamic routing within the web app)

- redux-persist(delays rendering of the apps UI till all data is retrieved)

### Working Links...

- /   (the homepage)
- /about
- /posts
- /signin (seems to be not connecting to database when signing/up in now)
- /signup (seems to be not connecting to database when signing/up in now)
- /create-post (seems to be not connecting to database when signing/up in now)

![5](./docs/5.png)

## Testing...

I used Insomnia to test my 'Posts' All seemed to be working until deployment.

![1](./docs/1.png)
![2](./docs/2.png)
![3](./docs/3.png)
![4](./docs/4.png)
