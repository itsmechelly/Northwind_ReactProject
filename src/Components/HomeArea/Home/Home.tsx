import Bestseller from "../Bestseller/Bestseller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommended from "../Recommended/Recommended";
import Sales from "../Sales/Sales";
import Search from "../Search/Search";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation: */}
            <Discount />

            {/* Conditional Rendering */}
            <Specials />

            {/* Displaying Lists */}
            <Desserts />

            {/* Props */}
            <Sales category="Beverages" percent={20} />
            <Sales category="Fruits" percent={5} />
            <Sales percent={10} />

            {/* Events */}
            <Recommended />

            {/* State */}
            <Bestseller />

            {/* Two Ways Binding */}
            <Search />

            {/* Lifecycle Hooks */}
            <Clock />

        </div>
    );
}

export default Home;
