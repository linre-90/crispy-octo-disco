import React from "react";
import { NavMenu } from "../components/stateless/navMenu/navMenu";
import { getAddresses } from "../Addresses";
import { PortfolioCard } from "../components/stateless/portfolioCard/portfolioCard";
import { graphql, useStaticQuery } from "gatsby";
import {Footer} from "../components/stateless/footer/footer";
import { StaticImage } from "gatsby-plugin-image";

/**
 * Page component to display programmaticaly created  portfolio/* slug sites as bootstrap card grid .
 * @returns Gatsby page
 */
const Portfolio: React.FC = (): React.ReactElement => {
    const portfolioData = useStaticQuery(graphql`
    query portfolioPages {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "portfolio"}}}) {
          edges {
            node {
                id
                excerpt
                frontmatter {
                    date
                    slug
                    title
                    type
                    tags
                    featuredImage {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, formats: AUTO, layout: CONSTRAINED)
                        }
                    }
                }
            }
          }
        }
      }
    `);

    return (
        <div>
            <StaticImage className="mobile_bgr d-md-none" src="../images/mobile/Portfolio.jpg" alt="Image stylized wall" quality={50} placeholder="blurred"></StaticImage>
            <NavMenu header="Portfolio" innerHeader="Pages" navLinks={getAddresses(3)}></NavMenu>
            <div className="container overflow-hidden bg-dark bg-opacity-75">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        portfolioData.allMarkdownRemark.edges.map((obj) => {
                            return (
                                <PortfolioCard
                                    img={obj.node.frontmatter.featuredImage}
                                    key={obj.node.id}
                                    appName={obj.node.frontmatter.title}
                                    appDescription={obj.node.excerpt}
                                    url={obj.node.frontmatter.slug}
                                    tags={obj.node.frontmatter.tags}
                                >
                                </PortfolioCard>
                            );
                        })
                    }
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Portfolio;