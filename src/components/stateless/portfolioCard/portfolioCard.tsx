import React, { FC, ReactElement } from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";


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
            <div className="card bg-dark border-secondary">
                <GatsbyImage image={getImage(props.img)} alt="Thumbnail for portfolio project."></GatsbyImage>
                <div className="card-body">
                    <h4 className="card-title">{props.appName}</h4>
                    <p className="card-text">{props.appDescription}</p>
                    <h5>
                    {
                        props.tags.map((tag) => {
                            return <span className="badge bg-secondary me-2 mb-2">{tag}</span>
                        })
                    }
                    </h5>
                    <Link className="btn btn-primary" to={props.url}>Check out</Link>
                </div>
            </div>
        </div>
    );
}