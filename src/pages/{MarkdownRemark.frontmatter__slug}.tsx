import React from "react";
import { graphql } from "gatsby";
import "../css/blogReader.css";
import { useState } from "react";
import { CookieBanner } from "../components/projectComp/cookie/cookie";

export default function Template({ data }: any): React.ReactElement {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const [theme, setTheme] = useState("dark");

	const changeTheme = () => {
		if(theme === "light"){
			setTheme("dark");
		}
		if(theme === "dark"){
			setTheme("light");
		}
	}

	return (
		<div>
			<CookieBanner></CookieBanner>

			<div className={"container " + theme} id="reader">
				<div className="form-check form-switch switch-mobile d-lg-none">
                        <input className="form-check-input" type="checkbox" onChange={() => changeTheme()}/>
                        <label className="form-check-label">{`Change page theme to ${theme == "dark"? "light" : "dark"}.`}</label>
                    </div>
				<hr></hr>
				<h1>{frontmatter.title}</h1>
				<p>
					{
						frontmatter.tags.map((tag) => {
							return <span className="badge bg-primary me-2 mb-2">{tag}</span>
						})
					}
				</p>
				<p><small>{frontmatter.date}</small></p>
				<div dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className="pt-5 pb-5">
					<hr />
				</div>
			</div>
		</div>
	);
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        type
        title
        slug
        date
        tags
      }
    }
  }
`
