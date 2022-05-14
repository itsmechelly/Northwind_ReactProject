import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <TotalProducts />
            <p>All Rights Reserved &copy;</p>
        </div>
    );
}

export default Footer;
