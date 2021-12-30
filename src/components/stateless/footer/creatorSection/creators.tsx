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
            mongo_data {
                images {
                    name
                    url
                }
            }
        }
    `)

    return(
        <div>
            {
                creatorData.mongo_data.images.map((creator:{name: string, url: string}) => {
                    return <p key={creator.name} >- <a href={creator.url}>{creator.name}</a> -</p>
                })
            }
        </div>
    )
}

