# MyDiBootCampApp
Content all XP EXERCICE : Exercice 1 - Exercice 2 - Exercice 3 
*********************************************************************************************************************************************************
## Exercise 1 : Creating A Basic Component In Angular
--------------

Instructions
************

In this exercise, you will create a basic component in Angular and use it in the root component of your application.

Open a terminal and navigate to the root directory of your Angular project.

Use the Angular CLI to generate a new component called “welcome” by running the ng generate command.

Open the file welcome.component.ts in your text editor. This is the TypeScript file for the component, containing the component’s class and logic.

Add a property called name to the component class and set it to a string value of your choice

Open the file welcome.component.html in your text editor. This is the template file for the component, written in HTML.

Add a paragraph element to the template and use interpolation to display a welcome message using the name property

Open the file app.module.ts in your text editor. This is the root module of your application, where you declare all the components, modules, and services that your application uses.

Import the WelcomeComponent and add it to the declarations array

Open the file app.component.html in your text editor. This is the template for the root component of your application.

Add the welcome component to the template by using its selector

Run the application by running the following command in the terminal

Open a web browser and navigate to http://localhost:4200 to see the welcome message displayed on the page.

Congratulations, you have successfully created and used a basic component in Angular!



## Exercise 2 : Creating And Using Components In Angular
--------------

Instructions
************

In this exercise, you will create two components in Angular and use them in the root component of your application.

Open a terminal and navigate to the root directory of your Angular project.

Use the Angular CLI to generate a new component called “header” by running the ng generate command.

Open the file header.component.ts in your text editor. This is the TypeScript file for the component, containing the component’s class and logic.

Add a property called title to the component class and set it to a string value of your choice

Open the file header.component.html in your text editor. This is the template file for the component, written in HTML.

Add an h1 element to the template and use interpolation to display the title property:

Use the Angular CLI to generate a new component called “footer” by running the ng generate command

Open the file footer.component.ts in your text editor. This is the TypeScript file for the component, containing the component’s class and logic.

Add a property called copyright to the component class and set it to a string value of your choice

Open the file footer.component.html in your text editor. This is the template file for the component, written in HTML.

Add a paragraph element to the template and use interpolation to display the copyright property:

Open the file app.module.ts in your text editor. This is the root module of your application, where you declare all the components, modules, and services that your application uses.

Import the HeaderComponent and FooterComponent and add them to the declarations array

Open the file app.component.html in your text editor. This is the template for the root component of your application.

Add the header and footer components to the template by using their selectors.



## Exercise 3 : Creating An Angular Component Using A Module
---------------

Instructions
************

First, create a new Angular module by using the Angular CLI command ng generate module myApp. This will create a new file called myApp.module.ts in the project’s src/app directory.

Next, create the greeting component using the Angular CLI command ng generate component greeting. This will create a new folder called greeting in the src/app directory, containing several files, including greeting.component.ts, greeting.component.html, and greeting.component.css.

In the greeting.component.ts file, import the Component symbol from the @angular/core module and add it to the component’s decorator. The decorator should also include a templateUrl property that points to the component’s HTML template file and a styleUrls property that points to the component’s CSS file. The component’s class should have a property called message that contains the greeting message.

In the greeting.component.html file, add an element that displays the greeting message.

In the myApp.module.ts file, import the GreetingComponent symbol and add it to the declarations array of the NgModule decorator. This will make the component available to be used in the module.

Finally, in the HTML template of the component that will use the greeting component, add an element with the app-greeting selector.

That’s it! The greeting component should now be displayed in the component that uses it, displaying the greeting message.



## Exercise 4 : Creating An Angular Component Using A Pipe
--------------

Instructions
************

Create a new Angular component called “product” that displays a product’s name and price. The component should use a pipe to format the price as currency. The component should be part of a module called “myApp”.

First, create a new Angular module by using the Angular CLI command ng generate module myApp. This will create a new file called myApp.module.ts in the project’s src/app directory.

Next, create the product component using the Angular CLI command ng generate component product. This will create a new folder called product in the src/app directory, containing several files, including product.component.ts, product.component.html, and product.component.css.

In the product.component.ts file, import the Component symbol from the @angular/core module and add it to the component’s decorator. The decorator should also include a templateUrl property that points to the component’s HTML template file and a styleUrls property that points to the component’s CSS file. The component’s class should have a property called product that contains an object with the product’s name and price.

In the product.component.html file, add elements that display the product’s name and price. Use the pipe symbol (|) to apply the currency pipe to the price.

In the myApp.module.ts file, import the ProductComponent symbol and add it to the declarations array of the NgModule decorator. This will make the component available to be used in the module.

Finally, in the HTML template of the component that will use the product component, add an element with the app-product selector.

That’s it! The product component should now be displayed in the component that uses it, displaying the product’s name and price with the currency formatting applied.
********************************************************************************************************************************************************

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# DI_BOOTCAMP_WEEK4_DAY1_EXERCICEXP
