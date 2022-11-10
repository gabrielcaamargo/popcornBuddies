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
	return (
		<AppWrapper style={{overflow: "visible"}}>
			<Header />
			<Wrapper>
				<Sidebar />
				{children}
			</Wrapper>
			<Footer />
			{/* <MovieModal />		 */}
		</AppWrapper>
	);
}