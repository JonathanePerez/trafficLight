import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		// Don't call this.setState() here!
		this.state = {
			click: ""
		};
	}

	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state.click === "redLight") {
			newRedLightClass = "selected";
		}
		if (this.state.click === "yellowLight") {
			newYellowLightClass = "selected";
		}
		if (this.state.click === "greenLight") {
			newGreenLightClass = "selected";
		}

		return (
			<div className="container">
				<div className="topPart" />

				<div className="blackBox">
					<div
						className={"redLight" + " " + newRedLightClass}
						onClick={() => this.setState({ click: "redLight" })}
					/>

					<div
						className={"yellowLight" + " " + newYellowLightClass}
						onClick={() => this.setState({ click: "yellowLight" })}
					/>

					<div
						className={"greenLight" + " " + newGreenLightClass}
						onClick={() => this.setState({ click: "greenLight" })}
					/>
				</div>
			</div>
		);
	}
}
