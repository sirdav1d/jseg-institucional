import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import { Suspense, lazy } from 'react';

export default function App() {
	const Telefonia = lazy(() => import('./pages/Telefonia'));
	const Acesso = lazy(() => import('./pages/Acesso'));
	const Alarme = lazy(() => import('./pages/Alarme'));
	const Rede = lazy(() => import('./pages/Rede'));
	const Cftv = lazy(() => import('./pages/Cftv'));
	const SmartHome = lazy(() => import('./pages/SmartHome'));
	const Solar = lazy(() => import('./pages/Solar'));
	const Thanks = lazy(() => import('./pages/Thanks'));

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
