import { TitlePages } from "../../components/TitlePages/TitlePages"
import "./FriendsPage.scss";


export const FriendsPage = () => {
    return (
        <>
            <div className="main-searching">
                <TitlePages title="Мои друзья"/>
                <div className="main-searching-block">
                    <img src="/search.svg" alt="search" className="main-searching-block_img" width={40} height={40}/>
                    <input placeholder="Search friends" type="text" className="main-searching-block_input"/>
                </div>
            </div>

            <div className="main-friends">
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
                <div className="main-friends-item">
                    <div className="main-friends-image">
                        <img className="img" src="/logo-react.svg" width={50} height={50} alt="friend-img" />
                    </div>

                    <div className="main-friends-name">
                        <h3 className="main-friends-name-title">Gleb</h3>
                        <span className="main-friends-name-subtitle">Ранг: Геймер</span>
                    </div>
                    <div className="main-friends-stars">
                        <span className="main-friends-stars_count">40</span>
                        <img className="main-friends-stars_icon" src="/star.svg" width={25} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}