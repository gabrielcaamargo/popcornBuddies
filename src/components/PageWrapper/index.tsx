import { useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MenuContext } from "../../contexts/MenuContext";
import { Wrapper } from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import MovieModal from "../MovieModal";
import Sidebar from "../Sidebar";
import { AppWrapper } from "./styles";
import NavMenu from "../NavMenu";

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({children}: PageWrapperProps) {
	const { 
		isModalOpen, 
		movieBanner, 
		movieName, 
		movieDescription, 
		movieId, 
		movieRate 
	} = useContext(MovieContext);

	const {isMenuOpen} = useContext(MenuContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AppWrapper style={{overflow: (isMenuOpen || isModalOpen) && "hidden"}}>
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
			{isMenuOpen && <NavMenu />}

		</AppWrapper>
	);
}