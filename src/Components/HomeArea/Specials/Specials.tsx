import "./Specials.css";

function Specials(): JSX.Element {
    return (
        <div className="Specials Box">

			<p>Our Specials:
            {isWeekend() ? <span>Pizza</span> : <span>Pasta</span>}

            {!isWeekend() && <span> | Fish & Chips</span>}
            </p>
        </div>
    );
}

function isWeekend(): boolean{
    const now = new Date();
    const dayOfWeek = now.getDay() + 1; // 1 = Sunday, 2 = Monday....
    return dayOfWeek >= 6;
}

export default Specials;
