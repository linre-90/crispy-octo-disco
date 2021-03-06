import React, { FC, ReactElement } from "react";
import { SiteMapLink } from "./sitemap/sitemapSection";
import {NormalLink} from "../normalLink/normalLink";
import {FooterSection} from "./section/footerSection";


/**
 * Footer component
 * @returns 
 */
export const Footer:FC = ():ReactElement => {
    return (
        <div className="container border-top border-end border-bottom border-info">
            <div className=" row text-center p-3 mt-5">
                <FooterSection header="Sitemap">
                    <SiteMapLink text="Home" url="/" />
                    <SiteMapLink text="Contact" url="/contact" />
                    <SiteMapLink text="Info" url="/info" />
                    <SiteMapLink text="Portfolio" url="/portfolio" />
                    <SiteMapLink text="Blog" url="/blog" />
                    <SiteMapLink text="Privacy policy" url="/privacypolicy" />
                </FooterSection>
                <FooterSection header="Build with">
                <NormalLink text="Gatsby.js" url="https://www.gatsbyjs.com/"></NormalLink>
                    <NormalLink text="TypeScript" url="https://www.typescriptlang.org/"></NormalLink>
                    <NormalLink text="Firebase" url="https://firebase.google.com/"></NormalLink>
                    <NormalLink text="Cloudflare" url="https://www.cloudflare.com/"></NormalLink>
                    <NormalLink text="Gsap" url="https://greensock.com/"></NormalLink>
                    <NormalLink text="Font awesome" url="https://fontawesome.com/"></NormalLink>
                </FooterSection>
                <FooterSection header="Social">
                    <NormalLink text="Github" url="https://github.com/linre-90/crispy-octo-disco"></NormalLink>
                    <NormalLink text="Twitter" url="https://twitter.com/90_linre"></NormalLink>
                    <NormalLink text="LinkedIn" url="https://www.linkedin.com/in/juho-l-171a98233/"></NormalLink>
                </FooterSection>
            </div>

        </div>
    )
}

