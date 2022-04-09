import React, { useEffect } from "react";
import { screen, render } from "@testing-library/react";
import axios from "axios";
import { useApi } from "./useApi";
import { act } from "react-dom/test-utils";

jest.mock("axios", () => jest.fn());

const TComp: React.FC<{ fetched: boolean }> = (props) => {
	const { state, startFetching } = useApi({
		method: "get",
		url: "https://jsonplaceholder.typicode.com/todos/1",
	});

	useEffect(() => {
		if (props.fetched) {
			startFetching();
		}
	}, []);

	return (
		<React.Fragment>
			{state.isLoading ? <div>loading</div> : <div>not loading</div>}
			{state.isError ? (
				<div>error</div>
			) : (
				<div>{JSON.stringify(state.data)}</div>
			)}
		</React.Fragment>
	);
};

describe("useApi", () => {
	const mockData = [
		{ id: 1, name: "test" },
		{ id: 2, name: "test2" },
	];

	it("should render initial", async () => {
		(axios as unknown as jest.Mock).mockResolvedValue({ data: mockData });

		await act(async () => {
			render(<TComp fetched={false} />);
		});

		expect(screen.getByText("not loading")).toBeTruthy();
	});

	it("should render data", async () => {
		(axios as unknown as jest.Mock).mockResolvedValue({ data: mockData });

		await act(async () => {
			render(<TComp fetched={true} />);
		});

		expect(screen.getByText(JSON.stringify(mockData))).toBeTruthy();
	});

	it("should render error", async () => {
		(axios as unknown as jest.Mock).mockRejectedValue({ data: mockData });

		await act(async () => {
			render(<TComp fetched={true} />);
		});

		expect(screen.getByText("error")).toBeTruthy();
	});
});
