import { Component } from "react";

interface SalesProps {
    category?: string; // ? = optional argument
    percent: number;
}

// props for functional component:
// function Sales(props: SalesProps): JSX.Element {
//     in "class component" below - we add CTOR, here we can just add const with the data you want to add to use:
//     const x = 123;
//     return (
//         <div className="Sales Box">
//             <p>

//                 {/* Conditional Rendering */}
//                 Sale: {props.percent}% discount on all {props.category || "products"}!

//                 {/* Ternary Operator */}
//                 {/* Sale: {props.percent}% discount on all {props.category ? props.category : "products"}! */}

//             </p>
//         </div>
//     );
// }

// props for class component
class Sales extends Component<SalesProps> {

    //if we have CTOR, we need to get the props into the CTOR and pass them using 'super' to our super.
    //like this:
    // public constructor(props: SalesProps){
    //     super(props);
    // }

    public render(): JSX.Element {
        return (
            <div className="Box">
                <p>

                    {/* Conditional Rendering */}
                    Sale: {this.props.percent}% discount on all {this.props.category || "products"}!

                </p>
            </div>
        );
    }
}

export default Sales;
