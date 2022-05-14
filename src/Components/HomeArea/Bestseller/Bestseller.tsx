import { Component } from "react";
import "./Bestseller.css";

interface BestsellerState {
    item: string;
    price: number;
}

class Bestseller extends Component<{}, BestsellerState> {
    
    private isClicked: boolean = false;

    public constructor(props: {}) {
        super(props);
        this.state = { item: "", price: 0 }; //Initializing the state - can be done only here!
    }

    private showItem = () => {
        //setState here is a-synchronic!
        this.isClicked = true;
        this.setState({ item: "Irish Coffee", price: 22 });
    }

    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
                <button onClick={this.showItem}>Bestseller Product</button>
                {this.isClicked && <span>{this.state.item}, price: {this.state.price}</span>}
            </div>
        );
    }
}

export default Bestseller;
