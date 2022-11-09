import { Banner, Main, MovieWrapper } from "./styles";

interface ContentProps {
  children: React.ReactNode
}

export default function Content({children}: ContentProps) {
	return (
		<Main>
			<Banner />
			<MovieWrapper>
				{children}
			</MovieWrapper>
		</Main>
	);
}