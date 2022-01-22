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
        <div className="p-3">
            <div className="card bg-info border-secondary">
                <GatsbyImage image={getImage(props.img)} alt="Thumbnail for portfolio project."></GatsbyImage>
                <div className="card-body">
                    <h4 className="card-title text-danger">{props.appName}</h4>
                    <p className="card-text text-danger">{props.appDescription}</p>
                    <h5>
                    {
                        props.tags.map((tag) => {
                            return (
                                <span data-tag={tag.toLowerCase()} key={uuidv4()} className="badge bg-danger me-2 mb-2">{tag}</span>
                            )
                        })
                    }
                    </h5>
                    <Link className="btn btn-secondary" to={props.url}>Check out</Link>
                </div>
            </div>
        </div>
    );
}