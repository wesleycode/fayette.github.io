import { BrowserRouter } from "react-router";
import { MyRouter } from "./infrastructure/routing/router/MyRouter";

export function App() {
	return (
		<BrowserRouter>
			<MyRouter />
		</BrowserRouter>
	)
}



