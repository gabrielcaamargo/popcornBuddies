import { useEffect, useState } from "react";

export function useFetch(apiUrl: any) {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState(null);

	useEffect(() => {

		(async () => {
			const api = await fetch("https://dummyjson.com/products?limit=4");
			const json = await api.json();

			setLoading(false);
			setResponse(json);
		})();
	}, [apiUrl]);

	return [loading, response];
}