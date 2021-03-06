import React from "react";
import { NavMenu } from "../components/projectComp/navMenu/navMenu";
import { getAddresses } from "../Addresses";
import { PortfolioCard } from "../components/projectComp/portfolioCard/portfolioCard";
import { graphql, useStaticQuery } from "gatsby";
import {Footer} from "../components/projectComp/footer/footer";
import { useEffect } from "react";
import {BrianBot} from "../components/external/brian/brian";
import { CookieBanner } from "../components/projectComp/cookie/cookie";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { Helmet } from "react-helmet";


/**
 * Page component to display programmaticaly created  portfolio/* slug sites as bootstrap card grid .
 * @returns Gatsby page
 */
const Portfolio: React.FC = ({location}:any): React.ReactElement => {
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

    useEffect(() => {
        try {
            if(location.search){
                gsap.registerPlugin(ScrollToPlugin);
                let tagSearch:string = location.search;
                // parse search url to array containin all tags
                tagSearch = tagSearch.replace("?tags=", "");
                let tags:string[] = tagSearch.split("-");
                if(document){
                    // get all spans, spans contains custom data-tag attribute
                    let elements:HTMLCollectionOf<HTMLSpanElement> = document.getElementsByTagName("span");
                    // search if any span contains tag
                    for (let i = 0; i < tags.length; i++) {
                        let tagFound:boolean = false;
                        for (let j = 0; j < elements.length; j++) {
                            if(elements[j].getAttribute("data-tag")){
                                if(elements[j].getAttribute("data-tag").includes(tags[i])){
                                    gsap.to(window, {duration:1, scrollTo:{y:elements[j], offsetY: 100}});
                                    tagFound = true;
                                    break;
                                }
                            }
                        }
                        if(tagFound){ break;}
                    }
                }
            }
        } catch (error) {console.log(error)}
    },[])
    

    return (
        <div>
            <Helmet>
                <title>JL - Portfolio my work</title>
                <meta 
                    name="description" 
                    content="Here is some of my projects. This contains web apps, desktop apps, games and everything else I think is worth sharing with you."
                />
            </Helmet>

			<CookieBanner></CookieBanner>

            <NavMenu header="Portfolio" innerHeader="Pages" navLinks={getAddresses(3)}></NavMenu>
            <div className="container overflow-hidden ">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
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
                <BrianBot></BrianBot>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Portfolio;