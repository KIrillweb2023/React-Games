import { Main_Routes_Types, RoutesTypes } from "../types/Routes.types"

const routes: RoutesTypes[] = [
    { path: "/", sourceImage: "/home-aside.svg", altImage: "home" },
    { path: "/my-game-portfolio", sourceImage: "/games.svg", altImage: "games" },
    { path: "/setting", sourceImage: "/setting.svg", altImage: "settings" },
    { path: "/library", sourceImage: "/library.svg", altImage: "library" },
    { path: "/friends", sourceImage: "/friends.svg", altImage: "friends" }
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