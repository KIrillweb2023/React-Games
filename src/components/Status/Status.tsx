import "./Status.scss";

export const Status = () => {
    return (
        <>
            <div className="status">
                <div className="status-wrapper">

                    <div className="status-item">
                        <div className="status-item-icon">
                            <img src="/status.svg" alt="status" width={50} height={50} />
                        </div>
                        <div className="status-item-text">
                            <h4>345</h4>
                            <p>Игр на платформе</p>
                        </div>
                    </div>
                    <div className="status-item">
                        <div className="status-item-icon">
                            <img src="/users.svg" alt="status" width={50} height={50} />
                        </div>
                        <div className="status-item-text">
                            <h4>1244</h4>
                            <p>Людей зарегистрированных на платформе</p>
                        </div>
                    </div>
                    <div className="status-item">
                        <div className="status-item-icon">
                            <img src="/userOnline.svg" alt="status" width={50} height={50} />
                        </div>
                        <div className="status-item-text">
                            <h4>13245</h4>
                            <p>Людей онлайн на платформе</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}