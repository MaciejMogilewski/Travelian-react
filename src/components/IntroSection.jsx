function IntroSection() {
    return (
        <section className="intro">
            <header className="intro__header header">
                <a href="" className="header__logo logo"><img src="../../src/images/Logo.svg" alt="Travelian logo"
                                                              className="logo__img"/></a>
                <nav className="header__menu main-menu">
                    <a href="" className="main-menu__item main-menu__item--active">Home</a>
                    <a href="" className="main-menu__item">Explore</a>
                    <a href="" className="main-menu__item">Travel</a>
                    <a href="" className="main-menu__item">Blog</a>
                    <a href="" className="main-menu__item">Pricing</a>
                </nav>
                <nav className="header__menu auth-menu">
                    <a href="" className="auth-menu__item">Login</a>
                    <a href="" className="auth-menu__item auth-menu__item--btn">Sign up</a>
                </nav>
            </header>
            <div className="lead">
                <h1 className="lead__hdl">Start your unforgettable<br/> journey with us.</h1>
                <p className="lead__text">The best travel for your journey begins now</p>
            </div>
            <form action="" className="search">
                <div className="search__wrapper">
                    <div className="search__group">
                        <label htmlFor="destination" className="search__lbl">Destination</label>
                        <input type="text" id="destination" name="destination" className="search__input"
                               placeholder="Dubai"/>
                    </div>
                    <div className="search__group">
                        <label htmlFor="person" className="search__lbl">Person</label>
                        <select name="person" id="person" className="search__input search__input--select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="search__group">
                        <label htmlFor="checkin" className="search__lbl">Check in</label>
                        <input type="date" id="checkin" name="checkin" className="search__input search__input--check"/>
                    </div>
                    <div className="search__group">
                        <label htmlFor="checkout" className="search__lbl">Check out</label>
                        <input type="date" id="checkout" name="checkout" className="search__input search__input--check"/>
                    </div>
                    <button type="submit" className="search__btn">Book<br/>Now</button>
                </div>
            </form>
        </section>
    );
}

export default IntroSection;