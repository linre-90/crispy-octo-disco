import React, { FC, ReactElement } from "react";
import { Link } from "gatsby"


/**
 * sitemap link props
 * @url - url address
 * @text - Link text
 */
type sitemapProps = {
    url: string,
    text: string
}

const SiteMapLink:FC<sitemapProps> = (props:sitemapProps):ReactElement => <p>- <Link to={props.url}>{props.text}</Link> -</p>

export {sitemapProps, SiteMapLink}