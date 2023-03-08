import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Acesso from './pages/Acesso';
import Alarme from './pages/Alarme';
import Cftv from './pages/Cftv';
import Home from './pages/Home';
import Rede from './pages/Rede';
import SmartHome from './pages/SmartHome';
import Solar from './pages/Solar';
import Telefonia from './pages/Tel';
import Thanks from './pages/Thanks';

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<Home />}></Route>

				<Route
					path='/thanks'
					element={<Thanks />}></Route>
				<Route
					path='/cftv'
					element={<Cftv />}></Route>
				<Route
					path='/alarme'
					element={<Alarme />}></Route>
				<Route
					path='/telefonia'
					element={<Telefonia />}></Route>
				<Route
					path='/acesso'
					element={<Acesso />}></Route>
				<Route
					path='/solar'
					element={<Solar />}></Route>
				<Route
					path='/rede'
					element={<Rede />}></Route>
				<Route
					path='/smartHome'
					element={<SmartHome />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
