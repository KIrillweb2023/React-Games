import { Route, Routes } from "react-router-dom"
import { MainHeader } from "../MainHeader/MainHeader"
import { useCallback, useEffect, useMemo, useState } from "react"
import { store } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { MAIN_APP_ROUTES } from "../../routes/routes"

import "./App.scss"

import React from "react";
import { Loading } from "../Loading/Loading";

const GamePortfolioPageLazy = React.lazy(() => import("../../pages/GamePortfolioPage/GamePortfolio"))
const HomePageLazy = React.lazy(() => import("../../pages/HomePage/HomePage"))
const SettingsPageLazy = React.lazy(() => import("../../pages/SettingsPage/SettingsPage"))
const LibraryPageLazy = React.lazy(() => import("../../pages/LibraryPage/LibraryPage"))
const FriendsPageLazy = React.lazy(() => import("../../pages/FriendsPage/FriendsPage"));
const AuthPageLazy = React.lazy(() => import("../../pages/AuthPage/AuthPage"));


export const App = () => {
	const navigate = useNavigate();
	const { isVerifyToken, isLogin, isLoading } = store()
	const [isTokenVerified, setIsTokenVerified] = useState(false);

	const verifyToken = useCallback(async () => {
		try {
			await isVerifyToken();
		} catch (err) {
			console.error('Token verification error:', err);
		} finally {
			setIsTokenVerified(true);
		}
	}, [isVerifyToken]);

	useEffect(() => {
		if (!isTokenVerified) {
			verifyToken();
		}
	}, [isTokenVerified, verifyToken]);

	const redirectPath = useMemo(() => {
		if (!isTokenVerified) return null;

		return isLogin ? MAIN_APP_ROUTES.HOME_PAGE : MAIN_APP_ROUTES.AUTH_PAGE;
	}, [isLogin, isTokenVerified]);

	useEffect(() => {
		if (redirectPath) {
			navigate(redirectPath, { replace: true });
		}
	}, [redirectPath]);

	if (isLoading || !isTokenVerified) {
		return <Loading />;
	}
	
	return (
		<div className="app">
			<div className="main">
				<div className="main-container">
					{ isLogin && <MainHeader/> } 

					<Routes>
						<Route path={MAIN_APP_ROUTES.HOME_PAGE} element={ <HomePageLazy/> } />
						<Route path={MAIN_APP_ROUTES.SETTINGS_PAGE} element={ <SettingsPageLazy/> } />
						<Route path={MAIN_APP_ROUTES.LIBRARY_PAGE} element={ <LibraryPageLazy/> } />
						<Route path={MAIN_APP_ROUTES.FRIENDS_PAGE} element={ <FriendsPageLazy/> } />
						<Route path={MAIN_APP_ROUTES.GAME_PAGE} element={ <GamePortfolioPageLazy/> } />
						<Route path={MAIN_APP_ROUTES.AUTH_PAGE} element={ <AuthPageLazy/> }/>
					</Routes>

				</div>
			</div>
		</div>
	)
}

