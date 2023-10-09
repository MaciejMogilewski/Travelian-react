function Destination() {
    return (
        <section className="destinations">
            <div className="destinations__content content">
                <div className="content__leadDes leadDes">
                    <h2 className="leadDes__hdl">Popular Destinations</h2>
                    <p className="leadDes__text">Most popular destinations around the world, from historical places to natural wonders.</p>
                </div>
                <div className="content__btns btns">
                    <button className="btns__btnLeft"></button>
                    <button className="btns__btnRight"></button>
                </div>
            </div>
            <div className="destinations__imgsDes imgsDes">
                <img className="imgsDes__img" src="../../src/images/Col-block.jpg" alt=""/>
                <img className="imgsDes__img" src="../../src/images/Col-block2.jpg" alt=""/>
                <img className="imgsDes__img" src="../../src/images/Col-block3.jpg" alt=""/>
            </div>
        </section>
    );
}

export default Destination;