import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Button } from "./Button";

describe("<Button />", () => {
	it("should render button", async () => {
		await act(async () => {
			render(<Button isLoading={false}>some button</Button>);
		});

		expect(screen.getByText("some button")).toBeTruthy();
	});

	it("should render button loading", async () => {
		await act(async () => {
			render(<Button isLoading={true}>some button</Button>);
		});

		expect(screen.getByText("loading")).toBeTruthy();
	});
});
