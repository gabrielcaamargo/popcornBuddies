import { Wrapper } from "./styles";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<MainContent />
			</Wrapper>
			<Footer />
		</>
	);
}