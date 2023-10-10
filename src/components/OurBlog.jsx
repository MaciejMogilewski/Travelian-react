function OurBlog() {
    return (
        <section className="ourBlog">
            <div className="ourBlog__titleBlog titleBlog">
                <div className="titleBlog__leadBlog leadBlog">
                    <h2 className="leadBlog__hdlBlog">Our Blog</h2>
                    <p className="leadBlog__textBlog">An insight the incredible experience in the world</p>
                </div>
            </div>
            <div className="contentBlog">
                <img className="contentBlog__imgBlog" src="../../src/images/ImageBlog.jpg" alt="Image Blog"/>
                <div className="descriptionBlog">
                    <h3 className="descriptionBlog__hdlBlog">Beautiful Italy<br/> Let’s travel</h3>
                    <p className="descriptionBlog__txtBlog">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
                    <a className="descriptionBlog__linkBlog" href="https://www.google.pl/" target="_blank">Read More</a>
                </div>
            </div>
        </section>
    );
}

export default OurBlog;