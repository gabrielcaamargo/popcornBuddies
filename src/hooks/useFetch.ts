import { useEffect, useState } from "react";

export function useFetch() {
	function getTrendingMovies(apiCall: any) {
		const [response, setResponse] = useState(null);

		useEffect(() => {
			(async () => {
				const data = await fetch(apiCall);
				const json = await data.json();
				
				console.log(json);
				setResponse(json);
			}
			)();
		}, [apiCall]);
	}

	return { getTrendingMovies };
}