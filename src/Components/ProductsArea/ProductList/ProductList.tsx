import { AddBox } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { productsDownloadedAction } from "../../../Redux/ProductsState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        //The first code in this matter -> without Redux:
        // this.state = { products: [] };
        //The second code in this matter -> with Redux:
        this.state = { products: store.getState().ProductsState.products };
    }

    // -----------------------------------------------------------------------------------------------------

    //The first code in this matter -> without Redux:

    // public async componentDidMount() {
    //     try {
    //         // const response = await axios.get<ProductModel[]>("http://localhost:3030/api/products");//הפקודה הזו תמתין אך הדפדפן לא יתקע
    //         const response = await axios.get<ProductModel[]>(globals.urls.products);//הפקודה הזו תמתין אך הדפדפן לא יתקע
    //         this.setState({ products: response.data });
    //     } catch (err) {
    //         alert("Error: " + err.message);
    //     }
    // }

    // -----------------------------------------------------------------------------------------------------

    //The second code in this matter -> with Redux:

    public async componentDidMount() {
        try {
            //Only if we don't have our products in the AppState - get them from the server.:
            if(store.getState().ProductsState.products.length === 0){

                //Get products from the server:
                const response = await axios.get<ProductModel[]>(globals.urls.products);//הפקודה הזו תמתין אך הדפדפן לא יתקע

                //Update AppState:
                store.dispatch(productsDownloadedAction(response.data));

                //Update local state:
                this.setState({ products: response.data });
            }
            } catch (err) {
                alert("Error: " + err.message);
            }
    }

    // -----------------------------------------------------------------------------------------------------

    public render(): JSX.Element {
        return (
            <div className="ProductList">
                
                <NavLink to="/products/new" exact>
                    <AddBox />
                </NavLink>
                
                {this.state.products.map(p => <ProductCard key={p.id} product={p} />)}

            </div>
        );
    }
}

export default ProductList;
