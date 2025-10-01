import { StrictMode } from "react";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<StrictMode>
			<Provider>
				<App />
			</Provider>
		</StrictMode>
	</BrowserRouter>
);
