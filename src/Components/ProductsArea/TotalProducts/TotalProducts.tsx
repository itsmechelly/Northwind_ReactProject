import { Component } from "react";
import { Unsubscribe } from "redux";
import store from "../../../Redux/Store";
import "./TotalProducts.css";

interface TotalProductsState {
	count: number;
}

class TotalProducts extends Component<{}, TotalProductsState> {

    //Function which will unsubscribe from the subscribe operator:
    private unsubscribeMe: Unsubscribe;

    public constructor(props: {}) {
        super(props);
        this.state = {count: 0 };
    }

    public componentDidMount(): void {
        // On any AppState change - call this function:
        this.unsubscribeMe = store.subscribe(() => {
            this.setState({ count: store.getState().ProductsState.products.length });
        });
    }

    public render(): JSX.Element {
        return (
            <div className="TotalProducts">
				<span>Total Products: {this.state.count}</span>
            </div>
        );
    }

    public componentWillUnmount(): void {
        this.unsubscribeMe(); // Unsubscribe from the subscribe operation.
    }
    
}

export default TotalProducts;
