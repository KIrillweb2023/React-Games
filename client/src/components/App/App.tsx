import { Route, Routes } from "react-router-dom"
import { AsideApp } from "../AsideApp/AsideApp"
import { HomePage } from "../../pages/HomePage/HomePage"
import { SettingsPage } from "../../pages/SettingsPage/SettingsPage"
import { LibraryPage } from "../../pages/LibraryPage/LibraryPage"
import { FriendsPage } from "../../pages/FriendsPage/FriendsPage"
import { GamePortfolio } from "../../pages/GamePortfolioPage/GamePortfolio"
import { MainHeader } from "../MainHeader/MainHeader"
import { useEffect, useState } from "react"
import { store } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { MAIN_APP_ROUTES } from "../../routes/routes"



export const App = () => {
	const navigate = useNavigate();
	const { isVerifyToken, dataUser } = store()
	const [isTokenVerified, setIsTokenVerified] = useState(false);

	
	const verifyToken = async () => {
		try {
			await isVerifyToken();
		} catch (err) {
			console.error('Token verification error:', err);
		} finally {
			setIsTokenVerified(true); 
		}
	};

	useEffect(() => {
		if(!isTokenVerified) {
			verifyToken();
		}
	}, []);

	useEffect(() => {
		if (!isTokenVerified) return;

		// if(isTokenVerified) {
			if (!dataUser.isLogin) {
				console.log('Not logged in, redirecting to auth');
				navigate(MAIN_APP_ROUTES.AUTH_PAGE);
			} else {
				console.log('Logged in, redirecting to home');
				navigate(MAIN_APP_ROUTES.HOME_PAGE);
			}
		// }
	}, [dataUser.isLogin, isTokenVerified]);
	
	return (
		<>
			<div className="app">
				<AsideApp/>
			

				<div className="main">
					<div className="main-container">
					<MainHeader/>

					<Routes>
						<Route path="/" element={ <HomePage/> } />
						<Route path="/setting" element={ <SettingsPage/> } />
						<Route path="/library" element={ <LibraryPage/> } />
						<Route path="/friends" element={ <FriendsPage/> } />
						<Route path="/my-game-portfolio" element={ <GamePortfolio/> } />
					</Routes>

					</div>
				</div>
				
			</div>
		</>
	)
}

