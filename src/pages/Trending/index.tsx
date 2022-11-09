import { Wrapper } from "../../components/common/Wrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TrendingContent from "../../components/TrendingContent";

export default function Trending() {
	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<TrendingContent />
			</Wrapper>
			<Footer />
		</>
	);
}