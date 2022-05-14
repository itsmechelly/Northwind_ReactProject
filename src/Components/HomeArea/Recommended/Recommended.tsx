import { Component, SyntheticEvent } from "react";
import "./Recommended.css";

//functional component
// function Recommended(): JSX.Element {

//     const item = "Red Wine";

//     function showRecommendation(args: SyntheticEvent) {
//         console.log(args);
//         alert(item);
//     }

//     return (
//         <div className="Recommended Box">
//             <button onClick={showRecommendation}>Recommend me a Product</button>
//         </div>
//     );
// }

//class component
class Recommended extends Component {

    private item = "Red Wine";

    // private showRecommendation() {
    //     alert(this.item);
    // }

    //we solved "this problem" with the 3rd way we learned with Assaf -> arrow function. 
    private showRecommendation = () => {
        alert(this.item);
    }

    public render(): JSX.Element {
        return (
            <div className="Recommended Box">
                {/* <button onClick={this.showRecommendation.bind(this)}>Recommend me a Product</button> */}
                <button onClick={this.showRecommendation}>Recommend me a Product</button>
            </div>
        );
    }
}

export default Recommended;
