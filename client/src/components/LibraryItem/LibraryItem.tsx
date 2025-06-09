import "./LibraryItem.scss";

export const LibraryItem = () => {
    return (
        <>
            <div className="main-library-games_item">
                <img className="main-library-games_image" src="/Slider-Image/forzahorizon.jpg" alt="" />
                <div className="main-library-games_text">
                    <h4 className="main-library-games-title">Forza Horizon 4</h4>
                    <span className="main-library-games-subtitle">Симулятор гонок</span> 
                </div>
                <div className="main-library-games-buttons">
                    <button className='main-library-games_btn'>
                        <img src="/add.svg" alt="add" />
                        <p className='main-library-games_btn-text'>Добавить</p>
                    </button>

                    <button className="main-library-games_link">
                        <img src="/games.svg" alt="" width={ 25 } height={ 25 } />
                    </button>

                    <div className='main-library-games_star'>
                        <p className='main-library-games_star-text'>+10</p>
                        <img className='main-library-games_star-icon' src="/star.svg" alt="star" />
                    </div>
                </div>
            </div>
        </>
    )
}