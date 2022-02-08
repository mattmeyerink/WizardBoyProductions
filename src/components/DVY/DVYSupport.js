import { Accordion } from 'react-bootstrap';

function DVYSupport() {
    return (
        <div className='supportPageWrapper'>
            <h1>DVY Support Page</h1>

            <div className='faqAccordianWrapper'>
                <h4 className='faqHeader'>Frequently Asked Questions</h4>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Where do I direct questions or comments?</Accordion.Header>
                        <Accordion.Body>
                            <p className='faqParagraph'>
                                You can directly email me at <b>meyerink@umich.edu</b>! To process your request faster please
                                add "DVY Support" to the subject line of the email.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are extra items appearing in the scan?</Accordion.Header>
                        <Accordion.Body>
                            <p className='faqParagraph'>
                                We will be the first to say that the scanning algorithm isn't perfect yet! Currently we are not
                                able to filter out many of the extra items at the end of the recipt that are not actually items
                                that need to be assigned. If you do not want these items to appear in your scan you can use the
                                built in cropping feature and only include the items that you want to assign.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Why are prices associated with the wrong item?</Accordion.Header>
                        <Accordion.Body>
                            <p className='faqParagraph'>
                                This is an issue with the orientation of the scan. For the best results make sure all four
                                corners of the recipt are visible in the scan, that you are scanning on a dark background,
                                and that your phone is parallel with the recipt when the scan is taken. If these tips do not
                                work we advise you to use the built in cropping feature to ensure that only the items you want
                                to assign are visible.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How are the tax and the tip split?</Accordion.Header>
                        <Accordion.Body>
                            <p className='faqParagraph'>
                                The tax and tip are split based on the percentage of the subtotal that each person
                                is responsible for. We feel this is the most fair method to split a recipt so that someone
                                who orders a 8 dollar salad is not splitting the tip evenly with someone who ordered a 60 dollar
                                steak.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
}

export default DVYSupport;
