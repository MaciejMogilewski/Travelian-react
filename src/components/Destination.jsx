function Destination() {
    return (
        <section className="destinations">
            <div className="destinations__content content">
                <div className="content__leadDes leadDes">
                    <h2 className="leadDes__hdl">Popular Destinations</h2>
                    <p className="leadDes__text">Most popular destinations around the world, from historical places to natural wonders.</p>
                </div>
                <div className="content__btnDes btnsDes">
                    <button className="btnDes__btnLeft"><img src="" alt=""/></button>
                    <button className="btnDes__btnRight"><img src="" alt=""/></button>
                </div>
            </div>
            <div className="destinations__imgsDes imgsDes">
                <img className="imgDes__img" src="" alt=""/>
                <img className="imgDes__img" src="" alt=""/>
                <img className="imgDes__img" src="" alt=""/>
                <img className="imgDes__img" src="" alt=""/>
            </div>
        </section>
    );
}

export default Destination;