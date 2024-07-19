<!---
Hi! We're happy you opened this file, not everyone does!
To let us know you did, paste a capybara picture
in the How to Run section 😊
These will be extra points for you!
-->

# React Developer Interview Assignment

## Introduction

This is an interview exercise for the Digital Products team of [xtream](https://www.linkedin.com/company/xtream-srl). In
the following sections, you will find a number of challenges that we ask you to implement. You **DO NOT NECESSARILY need
to complete 100% of them**: you can choose to complete as many as you want.

:watch: We give you **1 week** to submit a solution, so that you can do it at your own pace. We are aware that you might
have other commitments, so we are not expecting you to work on this full-time. You will be evaluated based on the
quality of your work, not on the time you spent on it.

### Deliverables

Simply fork this repository and work on it as if you were working on a real-world project assigned to you. A week from
now, we will assess your work.

:heavy_exclamation_mark: **Important**: At the end of this README, you will find a "How to run" section that is not
written out. Please, write there instructions on how to run your code: we will use this section to evaluate your work.

### Evaluation

Your work will be assessed according to several criteria. As an example, these include:

- Code quality
- Design Patterns
- Project Structure
- Work quality (commits, branches, workflow, tests, ...)
- Provided Documentation

#### A Friendly Reminder:

We’re all about embracing the latest in AI, including GPT and similar technologies. They’re great tools that can provide
a helping hand, whether it’s for generating ideas, debugging, or refining solutions. However, for this coding challenge,
we’re really keen to see your personal touch. We're interested in your thought process, decision-making, and the
solutions you come up with.

Remember, while using AI tools can be incredibly helpful, the essence of this task is to showcase your skills and
creativity. Plus, be prepared to dive into the details of your code during the technical interview. Understanding the '
why' and 'how' behind your decisions is crucial, as it reflects your ability to critically engage with the technology
you're using.

So, feel free to lean on AI for support, but ensure your work remains distinctly yours. We're looking for a blend of
technical savvy and individual flair. Dive in, get creative, and let’s see what you can create. Excited to see your
work. Happy coding! 🚀💼👩‍💻

### Let's get started

We do understand that some topics might be unfamiliar for you. Therefore, pick any number of challenges and try to
complete them.

:heavy_exclamation_mark:**Important**: you might feel like the tasks are somehow too broad, or the requirements are not
fully elicited. **This is done on purpose**: we want to give you the freedom to make your own choices and to put as
fewer constraints as possible on your work. We appreciate if you could record any decisions, assumptions and doubts,
together with any questions that you will ask in a real-world scenario. If you want to choose our stack instead, we
generally work with TypeScript and React.

---

### Problem Domain

Your task is to build a web application for RecipeBook, a community-driven recipe sharing platform. Users can browse
recipes, add new recipes, and leave comments and ratings. The application should allow users to search for recipes by
ingredients or cuisine and filter results based on dietary preferences. Do no consider authentication and authorization.

If you need some inspiration, you can take a look at [UI example folder](./ui-examples), where you can find some
generated screenshots of the application. Consider them as a starting point of a more complex application with respect
to the one that you have to build, but feel free to design your own UI.

Inside the [server](./server) directory there is a simple server that you can use to fetch the data. We suggest you to
read the instruction to setup it in the [server README](./server/README.md), you should find all the api endpoints that
you need to complete the challenges.

#### Challenge #1: Recipe List

Create the first RecipeBook page: the recipe list! Each recipe have a name, a photo, a list of ingredients
and many more details that you can find in the data model. Consider to avoid to show all the recipes at once to reduce
the browser load.

#### Challenge #2: Search and Filter

Add a search bar and a list of filters based on cuisine, difficulty and dietary preferences (e.g., vegetarian, gluten-free).

### Challenge #3: Add a Recipe

Design a form that allows users to add new recipes by providing details such as the recipe name, ingredients,
instructions, cuisine type, and dietary preference and an image.

### Challenge #4: Recipe Details and Comments

Develop a recipe details page where users can view the full recipe, including ingredients, instructions, and user
comments. Enable users to add comments and rate the recipe, displaying the average rating and updating the list of
comments.

![alt text](https://www.zooplus.it/magazine/wp-content/uploads/2024/01/capibara.jpeg)

# Recipe Book App

### Description

Recipe Book App is a web application that allows users to share and browse their own recipes. Users can add new recipes, filter existing ones, view recipe details, and leave comments.

## Main feature (Challenge)

1. **View Recipes** : Users can view all available recipes in the app.

2. **Add Recipes**: Users can add their own recipes using a simple form.

3. **Filter Recipes**: Users can filter recipes based on cuisine, difficulty and dietary preferences (e.g., vegetarian, gluten-free).

4. **View Recipe Details**: Users can view the details of a single recipe and leave comments.

## Technologies

- **React**: Used for building the user interface.

- **TypeScript**: Used to provide more stability to the code by adding types to classic JavaScript.

- **Axios**: Used for making HTTP requests.

- **CSS**: Used instead of Tailwind because, when used with proper class naming conventions, it can make the code cleaner.

- **FontAwesome**: Used for Icons.

- **Vite**: Used as the bundler.

- **ESLint**: Used for maintaining consistent code style.

## How to run

To install and set up the project, follow these steps:

1. Start the server. Check the README inside the server folder for instructions on how to start the server.

2. Clone the project repository to your local directory.

3. From the root folder of the project, run the command:

   ```bash
   cd client
   ```

4. Once in the client folder, run the command:

   ```bash
   npm install
   ```

5. After installing the dependencies, start the development server with the command:

   ```bash
   npm run dev
   ```

Now you can access the application in your browser at http://localhost:5173.
