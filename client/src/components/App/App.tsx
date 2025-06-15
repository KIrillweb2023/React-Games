import { Route, Routes } from "react-router-dom"
import { AsideApp } from "../AsideApp/AsideApp"
import { MainHeader } from "../MainHeader/MainHeader"
import { useCallback, useEffect, useMemo, useState } from "react"
import { store } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { MAIN_APP_ROUTES } from "../../routes/routes"

import "./App.scss"

import React from "react"
import HomePage from "../../pages/HomePage/HomePage"
import { Loading } from "../Loading/Loading"

const GamePortfolioPageLazy = React.lazy(() => import("../../pages/GamePortfolioPage/GamePortfolio"))
const HomePageLazy = React.lazy(() => import("../../pages/HomePage/HomePage"))
const SettingsPageLazy = React.lazy(() => import("../../pages/SettingsPage/SettingsPage"))
const LibraryPageLazy = React.lazy(() => import("../../pages/LibraryPage/LibraryPage"))
const FriendsPageLazy = React.lazy(() => import("../../pages/FriendsPage/FriendsPage"))


export const App = () => {
	const navigate = useNavigate();
	const { isVerifyToken, dataUser } = store()
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
		return dataUser.isLogin ? MAIN_APP_ROUTES.HOME_PAGE : MAIN_APP_ROUTES.AUTH_PAGE;
	}, [dataUser.isLogin, isTokenVerified]);

	useEffect(() => {
		if (redirectPath) {
			navigate(redirectPath);
		}
	}, [redirectPath]);

	if (dataUser.isLoading || !isTokenVerified) {
		return <Loading />;
	}
	
	return (
		<>
			<div className="app">
				<AsideApp/>
			

				<div className="main">
					<div className="main-container">
					<MainHeader/>
					<Routes>
						<Route path="/" element={ <HomePage/> } />
						<Route path="/setting" element={ <SettingsPageLazy/> } />
						<Route path="/library" element={ <LibraryPageLazy/> } />
						<Route path="/friends" element={ <FriendsPageLazy/> } />
						<Route path="/my-game-portfolio" element={ <GamePortfolioPageLazy/> } />
					</Routes>

					</div>
				</div>
				
			</div>
		</>
	)
}

