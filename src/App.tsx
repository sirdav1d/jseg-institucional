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
				/>
				<Route
					path='/tks'
					element={<Thanks />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
