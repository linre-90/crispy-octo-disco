import React, { FC, ReactElement } from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import {v4 as uuidv4} from "uuid";

type cardProps = {
    appName: string,
    appDescription: string,
    url:string
    img: IGatsbyImageData,
    tags: Array<string>
}

/**
 * Single portfolio markdown card.
 * @param props 
 * @returns react component
 */
export const PortfolioCard:FC<cardProps> = (props:cardProps):ReactElement => {
    return (
        <div className="p-3 d-flex">
            <div className="card bg-primary border-info border-start-0 p-2 rounded-0 ">
                <div className="card-body ps-0 d-flex flex-column justify-content-between">
                    <GatsbyImage image={getImage(props.img)} alt="Thumbnail for portfolio project."></GatsbyImage>
                    <div>
                        <h4 className="card-title text-secondary border-start border-info p-2 mb-0">{props.appName}</h4>
                        <p className="card-text text-secondary border-start border-info p-2 mb-0">{props.appDescription}</p>
                        <h5 className="ps-2 border-start border-info mt-0 mb-0 pb-4">
                        {
                            props.tags.map((tag) => {
                                return (
                                    <span data-tag={tag.toLowerCase()} key={uuidv4()} className="badge bg-warning text-primary me-2 mb-2 p">{tag}</span>
                                )
                            })
                        }
                        </h5>
                        <div className="ps-2 border-start border-info mt-0">
                            <Link className="btn btn-danger rounded-0" to={props.url}><span className="text-primary"><b>Check out</b></span></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}