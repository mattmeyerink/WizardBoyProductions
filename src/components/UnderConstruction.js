import { ConeStriped } from "react-bootstrap-icons";

function UnderConstruction() {
    return (
        <div className="underConstructionContainer">
            <ConeStriped size={150} color="orange" />
            <h2>Page Currently Under Construction</h2>
        </div>
    );
}

export default UnderConstruction;