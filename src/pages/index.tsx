import React from "react"
import { Headline } from "../components/projectComp/headline/headline";
import { Cta } from "../components/projectComp/cta/callToAction";
import { NavMenu } from "../components/projectComp/navMenu/navMenu";
import { BrianBot } from "../components/external/brian/brian";
import { Helmet } from "react-helmet";
import { Footer } from "../components/projectComp/footer/footer";
import { getAddresses } from "../Addresses";
import {TextSection} from "../components/projectComp/textSection/textSection";

/**
 * Index page markup
 * @returns react component
 */
const IndexPage: React.FC = (): React.ReactElement => {
	return (
		<div>
			<NavMenu header="Navigation" innerHeader="Pages" navLinks={ getAddresses(0) }></NavMenu>
			<div className="container py-5 bg-opacity-75">
				{/* bootstrap javascript and popper */}
				<Helmet>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
				</Helmet>
				<div className="row">
					<Headline text="Insert logo here" hSize={1}></Headline>
				</div>
				<TextSection 
					header="Welcome" 
					text={`
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum orci ut nisl mattis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat tempus nibh, at aliquam turpis sodales id. Donec in urna ut magna sollicitudin mattis nec a massa. Integer massa enim, fermentum vel volutpat ac, dictum sit amet erat. Aliquam vitae rhoncus nunc. Ut eu nunc vitae odio consectetur efficitur. Morbi gravida at libero id volutpat. Aenean eu mauris auctor, blandit turpis ac, lobortis nunc. Donec dapibus leo lorem, in imperdiet felis convallis nec. Duis et egestas dolor. Nunc est dolor, rhoncus luctus tempus quis, aliquet sed lorem. In ac condimentum ligula. `}
					headerSize={2}
					>
					<Cta text="Call to action" url="/"></Cta>
				</TextSection>
				<BrianBot></BrianBot>
				<Footer></Footer>
			</div>
		</div>
	)
}

export default IndexPage