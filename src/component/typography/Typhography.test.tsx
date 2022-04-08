import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Typography } from "./Typhography";
import { act } from "react-dom/test-utils";

describe("<TyphographyP />", () => {
	const textString = "Typography";

	it("should render default props", () => {
		render(<Typography type="paragraph">{textString}</Typography>);

		const elm = document.querySelector("p");

		expect(elm).toHaveTextContent(textString);
	});

	it("should render h1", () => {
		render(<Typography type="h1">{textString}</Typography>);

		const elm = document.querySelector("h1");

		expect(elm).toHaveTextContent(textString);
	});

	it("should render h1", () => {
		render(<Typography type="h2">{textString}</Typography>);

		const elm = document.querySelector("h2");

		expect(elm).toHaveTextContent(textString);
	});

	it("should render test", async () => {
		render(<Typography type="test">{textString}</Typography>);

		const elm = document.querySelector("p");

		await act(async () => {
			fireEvent.click(elm || window);
		});

		expect(elm).toHaveTextContent(textString);
	});

	it("should render diferent color", () => {
		render(
			<Typography type="h2" color="blue">
				{textString}
			</Typography>
		);

		const elm = document.querySelector("h2");

		expect(elm).toHaveStyleRule("color", "blue");
	});
});
