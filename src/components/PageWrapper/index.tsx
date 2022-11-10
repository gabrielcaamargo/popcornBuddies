import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

import { Wrapper } from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import MovieModal from "../MovieModal";
import Sidebar from "../Sidebar";
import { AppWrapper } from "./styles";

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({children}: PageWrapperProps) {
	const { isModalOpen, movieBanner, movieName, movieDescription, movieId, movieRate } = useContext(MovieContext);

	return (
		<AppWrapper style={{overflow: isModalOpen ? "hidden" : "visible"}}>
			<Header />
			<Wrapper>
				<Sidebar />
				{children}
			</Wrapper>
			<Footer />
			{ isModalOpen && 
				<MovieModal 
					banner={movieBanner} 
					name={movieName} 
					description={movieDescription} 
					rate={movieRate} 
					id={movieId}
				/>	
			}
		</AppWrapper>
	);
}