function TripPlanners() {
    return (
        <section className="tripPlanners">
            <div className="tripPlanners__wrapperTrip wrapperTrip">
                <div className="tripPlanners__titleTrip titleTrip">
                    <div className="titleTrip__leadTrip leadTrip">
                        <h2 className="leadTrip__hdlTrip">Trip Planners</h2>
                        <p className="leadTrip__textTrip">20 years from now you will be more disappointed by the things
                            that you didn’t do. Stop regretting and start travelling, start throwing off the
                            bowlines.</p>
                    </div>
                    <a href="" className="linkBtnTrip">View all trip plans</a>
                </div>
                <div className="contentTrip">
                    <div className="contentTrip__containerTrip containerTrip">
                        <img src="../../src/images/RomeTrip.jpg" alt="Obrazek"
                             className="containerTrip__imgTrip imgTrip"/>
                        <div className="containerTrip__hiddenText hiddenText">
                            <p className="hiddenText__txtTrip"></p>
                            <h3 className="hiddenText__hdlTrip"></h3>
                            <div className="hiddenText__rankingTrip"></div>
                        </div>
                    </div>
                    <div className="contentTrip__containerTrip containerTrip">
                        <img src="../../src/images/ParisTrip.jpg" alt="Obrazek" className="containerTrip__imgTrip imgTrip"/>
                        <div className="containerTrip__hiddenText hiddenText">
                            <p className="hiddenText__txtTrip"></p>
                            <h3 className="hiddenText__hdlTrip"></h3>
                            <div className="hiddenText__rankingTrip"></div>
                        </div>
                    </div>
                    <div className="contentTrip__containerTrip containerTrip">
                        <img src="../../src/images/BerlinTrip.jpg" alt="Obrazek" className="containerTrip__imgTrip imgTrip"/>
                        <div className="containerTrip__hiddenText hiddenText">
                            <p className="hiddenText__txtTrip"></p>
                            <h3 className="hiddenText__hdlTrip"></h3>
                            <div className="hiddenText__rankingTrip"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TripPlanners;