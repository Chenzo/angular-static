# Angular Static
## Angular, Scully, Firebase, and GitHub Actions


Demo: https://angular-static-7e809.web.app/

----
`ng serve` to launch dev server   - http://localhost:4200/  
`npm run build` to build  
`npm run scully -- --scanRoutes` to generate static site   
`npm run scully:serve` - this will launch a simple local server at http://localhost:1668/ for testing the static server  

---------
we're using [SCULLY](https://scully.io/) to generate the static HTML files from our angular site - https://github.com/scullyio/scully   

--------
we're also using [FIREBASE](https://firebase.google.com/) to host our app on build using github actions

-------

TODO:  

~~solve how to have scully just pull a local file for the routes~~ got it working...


Also, added firebase to use github actions to auto-build from main to here: 
https://angular-static-7e809.web.app/


nice.



