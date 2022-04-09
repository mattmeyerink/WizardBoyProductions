import DVYLogo from "../../images/DVY.png";

function DVYAppInfo() {
    return (
        <div className="appInfoContainer">
            <h1>DVY App Info</h1>

            <div className="appInfoContainer2">
                <div>
                    <img src={DVYLogo} alt="DVY Logo" className="appLogoContainer" />
                </div>

                <div className="appInfoText">
                    <h4>Description</h4>
                    <p>This is where all of that random description text will go that will get people excited about the app and shit</p>

                    <h4>Built With</h4>
                    <p>This is where I can be a nerd and geek out about the cool shit that I have used to make the app cool</p>
                </div>
            </div>
        </div>
    );
}

export default DVYAppInfo;
