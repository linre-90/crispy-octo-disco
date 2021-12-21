import React from "react";
import Creators from "./creatorSection/creators";
import {Link} from "gatsby";
import {SiteMapLink, sitemapProps} from "./sitemap/sitemapSection";

const Footer = () => {

    return (
        <div className="container">
            <div className="bg-dark bg-opacity-75 rounded row text-center p-3 mt-5">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <Creators></Creators>
                    <h6>Images by Unsplash</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Sitemap</h3>
                    <SiteMapLink text="Home" url="/" />
                    <SiteMapLink text="Contact" url="/contact" />
                    <SiteMapLink text="Info" url="/info" />
                    <SiteMapLink text="Portfolio" url="/portfolio" />
                    <SiteMapLink text="Blog" url="/blog" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <Creators></Creators>
                    <h6>Images by Unsplash</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>Content creators</h3>
                    <Creators></Creators>
                    <h6>Images by Unsplash</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;
