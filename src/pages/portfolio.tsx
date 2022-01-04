import React from "react";
import {NavMenu} from "../components/stateless/navMenu/navMenu";
import {getAddresses} from "../Addresses";
import {PortfolioCard} from "../components/stateless/portfolioCard/portfolioCard";
import {useStaticQuery, graphql} from "gatsby"

const Portfolio:React.FC = ():React.ReactElement => {
    const data = useStaticQuery(
        graphql`
        query cardPages {
            mongo_data {
                portfoliocontents {
                    appName
                    appDescription
                    headerImg
                    markdown
                }
            }
        }
        `
    );
        
    return(
        <div>
            <NavMenu header="Portfolio" innerHeader="Pages" navLinks={getAddresses(3)}></NavMenu>
            <div className="container overflow-hidden">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        data.mongo_data.portfoliocontents.map((element) => {
                            return (
                                <PortfolioCard 
                                    key={element.appName}
                                    imgUrl={element.headerImg} 
                                    appName={element.appName} 
                                    appDescription={element.appDescription}>
                                </PortfolioCard>
                            );
                        })
                    }
                </div>
            </div>   
        </div>
    );
}

export default Portfolio;