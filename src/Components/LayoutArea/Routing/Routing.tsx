import { Redirect, Route, Switch } from "react-router";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../../SharedArea/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
                <Redirect from="/" to="/home" exact />
                <Route path="/home" component={Home} exact />
                <Route path="/products" component={ProductList} exact />
                <Route path="/products/details/:id" component={ProductDetails} exact />
                <Route path="/products/new/" component={AddProduct} exact />
                <Route path="/about" component={About} exact />


                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/logout" component={Logout} exact />


                <Route path="/contact-us" component={ContactUs} exact />
                <Route component={Page404} />
            </Switch>
        </div>
    );
}

export default Routing;