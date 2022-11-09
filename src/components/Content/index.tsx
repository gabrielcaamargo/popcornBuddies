import { Banner, Main, MovieWrapper } from "./styles";

interface ContentProps {
  children: React.ReactNode,
	bannerTitle: string;
}

export default function Content({children, bannerTitle}: ContentProps) {
	return (
		<Main>
			<Banner>
				<h1>{bannerTitle}</h1>
			</Banner>
			<MovieWrapper>
				{children}
			</MovieWrapper>
		</Main>
	);
}