import { PortfolioGameType } from "../types/PortfolioGame.types";
import { $host } from "./index.api";

const AddGameApi: React.FC<PortfolioGameType> = async (values) => {
    const { data } = await $host.post("/portfolio/addGame", { ...values })
    return data
}

export {
    AddGameApi
}