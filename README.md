# ReminderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21 and [.NET Core SDK](https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x) version 3.0.1.

This app was developed for Chrome browsers. Please start in this browser for correct work.

## Start with Docker

### Start on Linux:

1. `sudo docker-compose up`

2. Navigate to http://localhost/

### Start on Windows:

1.  `docker-compose up`

2. Navigate to http://192.168.99.100/

If this ip dosen't work:

1.  `docker-machine ip`

2. Navigate to this ip


## Start on localhost

### Start backend:

1. `cd DatingApp.API`

2. `dotnet watch run`

### Start frontend:

1. For start on localhost you need change baseUrl in environment.ts

2. `cd DatingApp-SPA`

3. `ng serve`

4. Navigate to http://localhost:4200/
