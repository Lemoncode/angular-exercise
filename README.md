# Intro

The goal of this sample to is get started with Angular.

We will get as starting point an application that displays a list of github members that
belongs to an organization (in the starting excercise is hardcoded to _lemoncode_), and 
we will add an input element to let the user choose another organization to query.

# Excercise

- Start with the stating implementation that is located under the folder *00_start*.

- Let's install the needed dependencies.

```bash
npm install
```

- And start the application to check that everything is working as expected.

```bash
npm start
```

- If we check the current implementation we are getting a list of members belonging to lemoncode
organization, that's nice but we would like to let the user to be able to type the name of the 
orgnization he wants, hit ok and display the list of members for that organization.

- Hints:

  - Create a new property on MembersTableComponent with the current organization name (_lemoncode_ by default).
  - Create an input to hold the organization member name.
  - Tie up organization property change. Use ngModel (two way binding) directive to achieve this goal.
  - Use the organization property before running the query.

# Optional

As optional part of this exercise you can migrate it to ngrx. Just for simplicity, just handle in ngrx the input changes and read the new state on component. Do not handle load data side effect.

- Hints

    - Install @ngrx/store
    - Link store to app module (use forRoot)
    - Link store to feature module (use forFeature)
    - Create action for input organization changes
    - Create reducer
    - Dispatch action from component
    - Read the new state provide by ngrx

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 