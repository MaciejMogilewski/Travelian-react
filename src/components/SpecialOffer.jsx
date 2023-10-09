function SpecialOffer() {
    return (
        <section className="specialOffer">
            <div className="specialOffer__titleSpe titleSpe">
                <div className="titleSpe__btns btnsSpe">
                    <button className="btnsSpe__btnSpeLeft"></button>
                    <button className="btnsSpe__btnSpeRight"></button>
                </div>
                <div className="titleSpe__leadSpe leadSpe">
                    <h2 className="leadSpe__hdl">Special Offer</h2>
                    <p className="leadSpe__text">Check out our special offer and discounts</p>
                </div>
            </div>
            <div className="contentSpe">
                <div className="contentSpe_blockSpe blockSpe">
                    <img className="blockSpe__imgSpe" src="../../src/images/SOLisbon.jpg" alt="image Lisbon"/>
                    <div className="blockSpe__textBlockSpe textBlockSpe">
                        <p className="textBlockSpe__hdlSpe">Lisbon, Portugal</p>
                        <div className="textBlockSpe__ranking"></div>
                        <p className="textBlockSpe__descriptionSpe">5 nights and 4 days in 5 star hotel, breakfast and
                            lunch included. Very popular during the renaissance. Passage and going through the cites of
                            the world in classical literature.</p>
                        <div className="textBlockSpe__detailsSpe detailsSpe">
                            <p className="detailsSpe__priceSpe">From</p>
                            <a className="detailsSpe__btnDetailsSpe" href="">Details</a>
                        </div>
                    </div>
                </div>
                <div className="contentSpe_blockSpe blockSpe">
                    <img className="blockSpe__imgSpe" src="../../src/images/SOAthens.jpg" alt="image Athens"/>
                    <div className="blockSpe__textBlockSpe textBlockSpe">
                        <p className="textBlockSpe__hdlSpe">Athens, Greece</p>
                        <div className="textBlockSpe__ranking"></div>
                        <p className="textBlockSpe__descriptionSpe">5 nights and 4 days in 5 star hotel, breakfast and
                            lunch included. Very popular during the renaissance. Passage and going through the cites of
                            the world in classical literature.</p>
                        <div className="textBlockSpe__detailsSpe detailsSpe">
                            <p className="detailsSpe__priceSpe">From</p>
                            <a className="detailsSpe__btnDetailsSpe" href="">Details</a>
                        </div>
                    </div>
                </div>
                <div className="contentSpe_blockSpe blockSpe">
                    <img className="blockSpe__imgSpe" src="../../src/images/SORome.jpg" alt="image Roms"/>
                    <div className="blockSpe__textBlockSpe textBlockSpe">
                        <p className="textBlockSpe__hdlSpe">Rome, Italy</p>
                        <div className="textBlockSpe__ranking"></div>
                        <p className="textBlockSpe__descriptionSpe">5 nights and 4 days in 5 star hotel, breakfast and
                            lunch included. Very popular during the renaissance. Passage and going through the cites of
                            the world in classical literature.</p>
                        <div className="blockSpe__detailsSpe detailsSpe">
                            <p className="detailsSpe__priceSpe">From</p>
                            <a className="detailsSpe__btnDetailsSpe" href="">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffer;
