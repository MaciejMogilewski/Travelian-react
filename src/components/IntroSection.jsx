function IntroSection() {
    return (
        <section className="intro">
            <header className="intro__header header">
                <a href="" className="header__logo logo"><img src="../../src/images/Logo.svg" alt="Travelian logo" className="logo__img"/></a>
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
        </section>
    );
}

export default IntroSection;