import "./ProfileDashboard.scss";

export const ProfileDashboard = () => {
    return (
        <>
            <ul className="main-portfolio-profile_counts">
                <li className="main-portfolio-profile_counts-item">
                    <p className="main-portfolio-profile_counts-text">Кол-во игр в портфолио:</p>
                    <span className="main-portfolio-profile_counts-num">23</span>
                </li>
                <li className="main-portfolio-profile_counts-item">
                    <p className="main-portfolio-profile_counts-text">Кол-во моих комментариев:</p>
                    <span className="main-portfolio-profile_counts-num">346</span>
                </li>
                <li className="main-portfolio-profile_counts-item">
                    <p className="main-portfolio-profile_counts-text">Кол-во друзей:</p>
                    <span className="main-portfolio-profile_counts-num">47</span>
                </li>
                <li className="main-portfolio-profile_counts-item">
                    <p className="main-portfolio-profile_counts-text">Мой уровень:</p>
                    <span className="main-portfolio-profile_counts-num">24</span>
                </li>
                <li className="main-portfolio-profile_counts-item">
                    <p className="main-portfolio-profile_counts-text">Мой стаж:</p>
                    <span className="main-portfolio-profile_counts-num">Стажер</span>
                </li>
            </ul>
        </>
    )
} 