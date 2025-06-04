import "./MainHeader.scss";

export const MainHeader = () => {
    return (
        <>
            <div className="main-header">
                <h4 className="main-welcome">Welcome, 1Win</h4>
                <div className="main-search">
                    <img src="/search.svg" alt="search" className="main-search-icon" width={40} height={40}/>
                    <input placeholder="Search game" type="text" className="main-search-input"/>
                </div>

                <div className="main-notify">
                    <img src="/notify.svg" alt="notify" width={30} height={30} />
                </div>
            </div>
        </>
    )
}