import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Thanks from './pages/Thanks';

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				></Route>

				{/* <Route
					path='/thanks'
					element={<Thanks />}
				></Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
