import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Wrapper } from "./styles";

export default function Home() {
	return (
		<>
			<Header />
			
			<Wrapper>
				<Sidebar />
			</Wrapper>
		</>
	);
}