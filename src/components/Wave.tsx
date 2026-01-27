import "../styles/Wave.css";
import ondas from "../assets/ondas.png"

export default function Wave() {

    return (
        <div className="wave">
            <div className="wave-track">
                <img src={ondas} alt="wave" />
                <img src={ondas} alt="wave" />
            </div>
            
        </div>
    )
}