import { Wrapper } from "../../components/common/Wrapper";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import HomeContent from "../../components/HomeContent";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<HomeContent />
			</Wrapper>
			<Footer />
		</>
	);
}