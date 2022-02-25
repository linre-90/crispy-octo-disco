import React from "react"
import { Cta } from "../components/projectComp/cta/callToAction";
import { NavMenu } from "../components/projectComp/navMenu/navMenu";
import { BrianBot } from "../components/external/brian/brian";
import { Helmet } from "react-helmet";
import { Footer } from "../components/projectComp/footer/footer";
import { getAddresses } from "../Addresses";
import {TextSection} from "../components/projectComp/textSection/textSection";
import {CookieBanner} from "../components/projectComp/cookie/cookie";
import { FrontPageSpecial } from "../components/projectComp/headline/frontPageSpecial";
import { graphql, useStaticQuery } from "gatsby";


/**
 * Index page markup
 * @returns react component
 */
const IndexPage: React.FC = (): React.ReactElement => {
	
	const pageTexts = useStaticQuery(graphql`
		query FrontPageTexts {
			mainpageJson {
				mainhead
				textSection {
					header
					text
				}
				cta
			}
			
	  	}
    `);

	return (
		<div>
			<NavMenu header="Navigation" innerHeader="Pages" navLinks={ getAddresses(0) }></NavMenu>
			<CookieBanner></CookieBanner>
			<div className="container py-5 bg-opacity-75">
				{/* bootstrap javascript and popper */}
				<Helmet>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
				</Helmet>
				<div className="row">
					<FrontPageSpecial words={ pageTexts.mainpageJson.mainhead }></FrontPageSpecial>
				</div>
				<TextSection 
					header={ pageTexts.mainpageJson.textSection.header }
					text={ pageTexts.mainpageJson.textSection.text }
					headerSize={2}
					>
					<Cta text={ pageTexts.mainpageJson.cta } url="/portfolio"></Cta>
				</TextSection>
				<BrianBot></BrianBot>
				<Footer></Footer>
			</div>
		</div>
	)
}

export default IndexPage