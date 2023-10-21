import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Acesso from './pages/Acesso';
import Alarme from './pages/Alarme';
import Cftv from './pages/Cftv';
import Home from './pages/Home';
import Rede from './pages/Rede';
import SmartHome from './pages/SmartHome';
import Solar from './pages/Solar';
import Telefonia from './pages/Telefonia';
import Thanks from './pages/Thanks';
import { Suspense } from 'react';

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
					element={
						<Suspense>
							<Thanks />
						</Suspense>
					}></Route>

				<Route
					path='/cftv'
					element={
						<Suspense>
							<Cftv />
						</Suspense>
					}></Route>
				<Route
					path='/alarme'
					element={
						<Suspense>
							<Alarme />
						</Suspense>
					}></Route>
				<Route
					path='/telefonia'
					element={
						<Suspense>
							<Telefonia />
						</Suspense>
					}></Route>
				<Route
					path='/acesso'
					element={
						<Suspense>
							<Acesso />
						</Suspense>
					}></Route>
				<Route
					path='/solar'
					element={
						<Suspense>
							<Solar />
						</Suspense>
					}></Route>
				<Route
					path='/rede'
					element={
						<Suspense>
							<Rede />
						</Suspense>
					}></Route>
				<Route
					path='/smartHome'
					element={
						<Suspense>
							<SmartHome />
						</Suspense>
					}></Route>
			</Routes>
		</BrowserRouter>
	);
}
