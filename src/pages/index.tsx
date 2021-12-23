import React, {useEffect, useState} from "react"
import { graphql, useStaticQuery } from "gatsby";
import { Headline } from "../components/stateless/headline/headline";
import { Cta } from "../components/stateless/cta/callToAction";
import { NavMenu } from "../components/stateless/navMenu/navMenu";
import { BrianBot } from "../components/statefull/brian/brian";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "../components/stateless/footer/footer";
import { getAddresses } from "../Addresses";

/**
 * Index page markup
 * @returns react component
 */
const IndexPage: React.FC = (): React.ReactElement => {

	// get page texts from database filtered with page == index.
    const textData = useStaticQuery(
        graphql`
        query{
            allMongodbContentTexts(
				filter: { 
					page: { eq: "index" }  }) {
                edges {
                    node {
                        content
						page
						place
                    }
                }
            }
        }
        `
    );
	
	const [mainText, setMainText] = useState(null);
	// fill content hook
	useEffect(() => {
		textData.allMongodbContentTexts.edges.forEach(edge => {
			if(edge.node.place == "main"){
				setMainText(edge.node.content);
			}
		});
	},[]);

	return (
		<div className="container mt-5">
			<StaticImage className="mobile_bgr d-md-none" src="../images/mobile/home.jpg" alt="Mobile industrial background image" placeholder="blurred"></StaticImage>
			
			{/* bootstrap javascript and popper */}
			<Helmet>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
			</Helmet>
			
			<NavMenu header="Navigation" innerHeader="Pages" navLinks={ getAddresses(0) }></NavMenu>

			<div className="bg-dark bg-opacity-75 p-3 rounded">
				<div className="row">
					<Headline text="My portfolio" hSize={1}></Headline>
				</div>
				<div className="row">
					<Headline text="Welcome" hSize={3}></Headline>
				</div>
				<div className="row">
					<p>{mainText}</p>
				</div>
				<div className="row">
					<Cta text="Call to action" url="http://localhost:8000"></Cta>
				</div>
			</div>
			<BrianBot></BrianBot>
			<Footer></Footer>
		</div>
	)
}

export default IndexPage