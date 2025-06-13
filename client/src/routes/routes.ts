import { Main_Routes_Types, RoutesTypes } from "../types/Routes.types"

import HomeIcon from "../assets/AsideIcons/routingIcon/home-aside.svg";
import GamesIcon from "../assets/AsideIcons/routingIcon/games.svg";
import SettingIcon from "../assets/AsideIcons/routingIcon/setting.svg";
import LibraryIcon from "../assets/AsideIcons/routingIcon/library.svg";
import FriendIcon from "../assets/AsideIcons/routingIcon/friends.svg";

const routes: RoutesTypes[] = [
    { path: "/", sourceImage: HomeIcon, altImage: "home" },
    { path: "/my-game-portfolio", sourceImage: GamesIcon, altImage: "games" },
    { path: "/setting", sourceImage: SettingIcon, altImage: "settings" },
    { path: "/library", sourceImage: LibraryIcon, altImage: "library" },
    { path: "/friends", sourceImage: FriendIcon, altImage: "friends" }
]

const MAIN_APP_ROUTES: Main_Routes_Types = {
    HOME_PAGE: "/",
    AUTH_PAGE: "/authentication",
    GAME_PAGE: "/my-game-portfolio",
    SETTINGS_PAGE: "/setting",
    FRIENDS_PAGE: "/frineds",
    LIBRARY_PAGE: "/library"
}

export { routes, MAIN_APP_ROUTES }