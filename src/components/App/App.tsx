import { Route, Routes } from "react-router-dom"
import { AsideApp } from "../AsideApp/AsideApp"
import { HomePage } from "../../pages/HomePage/HomePage"
import { SettingsPage } from "../../pages/SettingsPage/SettingsPage"
import { LibraryPage } from "../../pages/LibraryPage/LibraryPage"
import { FriendsPage } from "../../pages/FriendsPage/FriendsPage"
import { GamePortfolio } from "../../pages/GamePortfolioPage/GamePortfolio"
import { MainHeader } from "../MainHeader/MainHeader"

export const App = () => {
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

export default App
