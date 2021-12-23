import React from "react";
import Creators from "./creatorSection/creators";
import {SiteMapLink} from "./sitemap/sitemapSection";


const Footer = () => {

    return (
        <div className="container rounded">
            <hr className=""></hr>
            <div className="bg-dark bg-opacity-75 row text-center p-3 mt-5">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <h6>Images by Unsplash</h6>
                    <Creators></Creators>
                    <hr className="d-sm-block d-md-none" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Sitemap</h3>
                    <SiteMapLink text="Home" url="/" />
                    <SiteMapLink text="Contact" url="/contact" />
                    <SiteMapLink text="Info" url="/info" />
                    <SiteMapLink text="Portfolio" url="/portfolio" />
                    <SiteMapLink text="Blog" url="/blog" />
                    <SiteMapLink text="Privacy policy" url="/privacypolicy" />
                    <hr className="d-sm-block d-md-none" />
                </div>
                <hr className="d-none d-md-block d-lg-none"></hr>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Build with</h3>
                    <p>- <a href="https://www.gatsbyjs.com/">Gatsby.js</a> -</p>
                    <p>- <a href="https://www.mongodb.com/">MongoDB</a> -</p>
                    <p>- <a href="https://www.typescriptlang.org/">TypeScript</a> -</p>
                    <p>- <a href="https://firebase.google.com/">Firebase</a> -</p>
                    <p>- <a href="https://www.netlify.com/">Netlify</a> -</p>
                    <p>- <a href="https://greensock.com/">Gsap</a> -</p>
                    <hr className="d-sm-block d-md-none" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Social</h3>
                    <h6>My name</h6>
                    <p>- <a href="#">Github</a> -</p>
                    <p>- <a href="#">Twitter</a> -</p>
                    <hr className="d-sm-block d-md-none" />
                </div>
                <hr className="d-none d-md-block d-lg-none"></hr>
            </div>

        </div>
    )
}

export default Footer;
