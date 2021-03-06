# Example Components App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.Creates a directory  `src/app/name-component`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## COMPONENTS

**Bootstrap**

``` sh
    npm install bootstrap
    npm i @popperjs/core
``` 

**jQuery & DataTable**

``` sh
    npm install jquery --save
    npm install datatables.net --save
    npm install datatables.net-dt --save
    npm install angular-datatables --save
    npm install @types/jquery --save-dev
    npm install @types/datatables.net --save-dev
    npm install bootstrap --save
```

**Boostrap Carousel**

``` sh
    npm install jquery --save
    ng add @ng-bootstrap/ng-bootstrap
```

**Image Cropper**

`npm install ngx-image-cropper`

**QR CODE Generator**

``` sh
    ng add @angular/material
    npm install angularx-qrcode --save
```

**Datatable Print, Export to CSV, Excel Data**

``` sh
    npm install jquery --save
    npm install datatables.net --save
    npm install datatables.net-dt --save
    npm install angular-datatables --save
    npm install @types/jquery --save-dev
    npm install @types/datatables.net --save-dev
    npm install ngx-bootstrap bootstrap --save
    npm install datatables.net-buttons --save
    npm install datatables.net-buttons-dt --save
    npm install @types/datatables.net-buttons --save-dev
    npm install jszip --save
```

**PHP and MySQL**

Download and install [XAMPP](https://www.apachefriends.org/download.html) 

Clone the repository on `C:\xampp\htdocs` 

Start the `MySQL Service` 

***Create a new data base***

Go to `Admin` on MySQL Service. It will open `myPhpAdmin Portal` where you be able to create your data base.

**JSON Data File**

***Update tsconfig JSON***

Before you start the application, you have to tweak your `tsconfig.json` file, define the resolveJsonModule and esModuleInterop inside the compilerOptions object.

```sh
    {
    "compileOnSave": false,
    "compilerOptions": {
        "resolveJsonModule": true,
        "esModuleInterop": true,  
    ...
    ...
```

**Fullcalendar Dynamic**

```sh
    npm install @fullcalendar/angular 
    npm install @fullcalendar/daygrid
    npm install @fullcalendar/interaction
```

**HTTP Requests with Angular HttpClient API**

***JSON Server ***

```sh
   npm install -g json-server
   json-server --watch database.json
```

Congratulations, you have just set up the backend server for dealing with HTTP requests locally. Now, you can check the below endpoint on your browser: `http://localhost:3000/users`

***Angular Service***

Components cannot directly get or store the data, rather they are designed to display or assign data to a service.

What is more, we would like to show you how you can easily consume REST APIs with angular service. Generate CRUD service and define the User class within.

```sh
    ng g s shared/crud
```




