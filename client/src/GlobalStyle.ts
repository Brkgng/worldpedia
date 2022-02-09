import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--orange: #F98031;
		--lightblue: rgba(0, 102, 255, 0.15);
		--fontSmall: 1rem;
		--fontMed: 1.2rem;
		--fontBig: 1.5rem;
		--fontBigger: 2.5rem;
		--fontSuperBig: 3.5rem;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Quicksand", sans-serif;
	}
`;
