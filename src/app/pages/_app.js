import { useClient } from "next/client";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
	useClient();

	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
