import { Wrapper } from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({children}: PageWrapperProps) {
	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				{children}
			</Wrapper>
			<Footer />
		</>
	);
}