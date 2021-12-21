import React from "react";
import Creators from "./creatorSection/creators";
import {SiteMapLink} from "./sitemap/sitemapSection";

const Footer = () => {

    return (
        <div className="container">
            <div className="bg-dark bg-opacity-75 rounded row text-center p-3 mt-5">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <Creators></Creators>
                    <h6>Images by Unsplash</h6>
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
                    <SiteMapLink text="Gatsby.js" url="https://www.gatsbyjs.com/" />
                    <SiteMapLink text="MongoDB" url="https://www.mongodb.com/" />
                    <SiteMapLink text="TypeScript" url="https://www.typescriptlang.org/" />
                    <SiteMapLink text="Firebase" url="https://firebase.google.com/" />
                    <SiteMapLink text="Netlify" url="https://www.netlify.com/" />
                    <hr className="d-sm-block d-md-none" />
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <Creators></Creators>
                    <h6>Images by Unsplash</h6>
                    <hr className="d-sm-block d-md-none" />
                </div>
                <hr className="d-none d-md-block d-lg-none"></hr>
            </div>
        </div>
    )
}

export default Footer;
