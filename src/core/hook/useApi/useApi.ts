import axios from "axios";
import { useState } from "react";

export type useApiParam = {
	url: string;
	method: "get" | "post" | "put" | "delete";
};

export const useApi = (param: useApiParam) => {
	const [state, setState] = useState<{
		isLoading: boolean;
		isError: boolean;
		data: Array<unknown>;
	}>({
		isLoading: false,
		isError: false,
		data: [],
	});

	const startFetching = async () => {
		setState({ data: [], isLoading: true, isError: false });

		let data: Array<unknown>;

		try {
			data = await (
				await axios({
					url: param.url,
					method: param.method,
				})
			).data;

			setState({ ...state, data: [...data], isLoading: false });
		} catch (error) {
			data = [];

			setState({ ...state, isError: true });
		}
	};

	return {
		state,
		startFetching,
	};
};
