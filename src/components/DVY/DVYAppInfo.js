import DVYLogo from "../../images/DVY.png";
import ConfirmItems from "./screenshots/ConfirmItems.png";
import TaxTip from "./screenshots/TaxTip.png";
import AddFriends from "./screenshots/AddFriends.png";
import AssignItems from "./screenshots/AssignItems.png";
import SplitItems from "./screenshots/SplitItems.png";
import SummaryPage from "./screenshots/SummaryPage.png";

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
                    <p>
                        Ever wanted to just scan your receipt and split the check fairly among friends? Now you can with DVY!
                    </p>
                    <p>
                        DVY allows you to scan receipts, split items, and divide the tax/tip based on the cost of what each person ordered to make things as FAIR as possible. Its user-friendly, colorful interface makes it easy and fun to use! Never stress when the waiter brings out the check again!
                    </p>

                    <p>
                        Search for DVY on the IOS App Store today!
                    </p>

                    <h4>Built With</h4>
                    <ul>
                        <li>Swift UI</li>
                        <li>Apple's Vision Framework</li>
                        <li>Apple's VisionKit Framework</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="screenshotWrapper">
                    <div className="screenshotText">
                        <h3>Confirm The Items</h3>
                        <p>
                            Take a look through the items and prices identified by the scanner. 
                            If items are missing use the 'Add Item' button to easily add a new item.
                            To perform actions on an existing item, tap the item to reveal the available actions.
                            You can edit, split, and delete existing items. If you would like to try a new scan, 
                            click the re-scan button and follow the listed tips for a better scan.
                        </p>
                    </div>
                    <img src={ConfirmItems} alt="Confirm Items Screenshot" className="screenshotImage" />
                </div>

                <div className="screenshotWrapper">
                    <img src={TaxTip} alt="Tax/Tip Screenshot" className="screenshotImage" />
                    <div className="screenshotText">
                        <h3>Calculate Tax and Tip</h3>
                        <p>
                            Confirm that the tax is the correct value listed on the receipt. If not use
                            the edit button to edit the tax value.

                            Tip can either be calculated by selecting one of the preset percentages or by 
                            inputing a custom value.

                            View the effect of the tax and tip on the grand total at the bottom of the screen.
                        </p>
                    </div>
                </div>

                <div className="screenshotWrapper">
                    <div className="screenshotText">
                        <h3>Add Your Friends</h3>
                        <p>
                            Select the green plus button to add a new friend.
                            To edit or delete existing friends, click on the friend and select the appropriate
                            action.
                        </p>
                    </div>
                    <img src={AddFriends} alt="Add Friends Screenshot" className="screenshotImage" />
                </div>

                <div className="screenshotWrapper">
                    <img src={AssignItems} alt="Assign Items Screenshot" className="screenshotImage" />
                    <div className="screenshotText">
                        <h3>Assign Items</h3>
                        <p>
                            To assign an item, tap on the item in the list to reveal a list of potential friends.
                            Select the friend that you want to assign the item to. If you want to split the item,
                            tap the split button at the bottom of the list of potential friends when you click on 
                            an item. To view which items are assigned to a specific friend, click on the circular 
                            friend icon. Items can be removed from a specific friend if you click on the item in that
                            friends list and then select the delete button.
                        </p>
                    </div>
                </div>

                <div className="screenshotWrapper">
                    <div className="screenshotText">
                        <h3>Split Items</h3>
                        <p>
                            Easily split an item within the split item modal. Use the stepper to input
                            the number of people that are splitting the item and view the effect on the 
                            price. Click split to create the correct number of split items.
                        </p>
                    </div>
                    <img src={SplitItems} alt="Split Items Screenshot" className="screenshotImage" />
                </div>

                <div className="screenshotWrapper">
                    <img src={SummaryPage} alt="Summary Screenshot" className="screenshotImage" />
                    <div className="screenshotText">
                        <h3>View the Summary</h3>
                        <p>
                            Each person's summary displays their grand total, the name and cost of 
                            each item assigned to them, their tax contribution, and their tip contribution.
                            To view this expanded breakdown for a friend just click on their name on the list.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DVYAppInfo;
