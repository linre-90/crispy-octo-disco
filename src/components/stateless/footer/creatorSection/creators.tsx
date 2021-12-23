import React from "react";
import { FC, ReactElement } from "react";
import { graphql, useStaticQuery } from "gatsby";

/**
 * Component to display people who created images et.
 * @returns react component presenting people who's work is used in project.
 */
export const Creators:FC = ():ReactElement => {
    const creatorData = useStaticQuery(graphql`
        query creatorQuery {
            allMongodbCreatorsImage {
                edges {
                    node {
                    name
                    url
                    }
                }
            }
        }
    `)

    return(
        <div>
            {
                creatorData.allMongodbCreatorsImage.edges.map((node:any) => {
                    return <p key={node.node.name} >- <a href={node.node.url}>{node.node.name}</a> -</p>
                })
            }
        </div>
    )
}

