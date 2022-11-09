import { Banner, Main } from "./styles";

interface ContentProps {
  children: React.ReactNode
}

export default function Content({children}: ContentProps) {
	return (
		<Main>
			<Banner />
			{children}
		</Main>
	);
}