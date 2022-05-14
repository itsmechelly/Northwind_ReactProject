import axios from "axios";
import { Component, Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import { resolveProjectReferencePath } from "typescript";
import ProductModel from "../../../Models/ProductModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import "./ProductDetails.css";

//this tells us the params we need for the link 
interface RouteParams {
    id: string;
}

//the props need to extend a generic interface that gets the interface we created above
interface ProductDetailsProps extends RouteComponentProps<RouteParams> {
}

interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public constructor(props: ProductDetailsProps) {
        super(props);
        //The first code in this matter -> without Redux:
        this.state = { product: null };
        //The second code in this matter -> with Redux:

    }

    // -----------------------------------------------------------------------------------------------------

    //The first code in this matter -> without Redux:

    //we add this and give it the param id
    //we can see the id in the aspect

    // public async componentDidMount() {
    //     try {
    //         const id = this.props.match.params.id;
    //         // const response = await axios.get<ProductModel>("http://localhost:3030/api/products/" + id);
    //         const response = await axios.get<ProductModel>(globals.urls.products + id);
    //         this.setState({ product: response.data })
    //     }
    //     catch (err) {
    //         alert("error: " + err.message);
    //     }
    // }

    // -----------------------------------------------------------------------------------------------------

    //The second code in this matter -> with Redux:

    public async componentDidMount() {
        try {
            const id = +this.props.match.params.id;
            const product = store.getState().ProductsState.products.find(p => p.id === id);
            this.setState({ product })
        }
        catch (err) {
            alert("error: " + err.message);
        }
    }

    // -----------------------------------------------------------------------------------------------------

    public render(): JSX.Element {
        return (
            <div className="ProductDetails">

                {/* we do these bellow as conditional rendering - otherwise it's null */}
                {this.state.product &&
                    // <Fragment>
                    <>
                        <h2>Product Details</h2>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: ${this.state.product.price}</h3>
                        <h3>Stock: {this.state.product.stock}</h3>
                        {/* <img src={"http://localhost:3030/api/products/images/" + this.state.product.imageName} /> */}
                        <img src={globals.urls.productsImages + this.state.product.imageName} />
                        <br />
                        <br />

                        <NavLink to="/products">Back</NavLink>
                    </>
                    // </Fragment>
                }
            </div>
        );
    }
}

export default ProductDetails;