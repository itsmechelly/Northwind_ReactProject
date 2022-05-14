//Global settings which are the same for development and production:
class Globals {

}

//Global settings which are suitable only for production:
class DevelopmentGlobals extends Globals {
    public urls = {
        products: "http://localhost:3030/api/products/",
        //   productsDelayed: "http://localhost:3030/api/products/delayed/",
        productsImages: "http://localhost:3030/api/products/images/",
        register: "http://localhost:3030/api/auth/register/",
        login: "http://localhost:3030/api/auth/login/"

    };
}

//Global settings which are suitable only for production:
class ProductionGlobals extends Globals {
    public urls = {
        products: "http://localhost:3030/api/products/",//in real life there will be the production address (or 8080)
        productsImages: "http://localhost:3030/api/products/",//in real life there will be the production address (or 8080)
        register: "http://localhost:3030/api/auth/register/",
        login: "http://localhost:3030/api/auth/login/"

    };
}

//Creating the current objectד
const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;