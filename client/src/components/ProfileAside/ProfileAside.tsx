import { ProfileDashboard } from "../ProfileDashboard/ProfileDashboard";
import { ProfileName } from "../ProfileName/ProfileName.";
import { ProfileProgress } from "../ProfileProgress/ProfileProgress";
import { ProfileStars } from "../ProfileStars/ProfileStars";
import "./ProfileAside.scss";

export const ProfileAside = () => {
    return (
        <>
            <div className="main-portfolio-profile">
                <ProfileName/>
                <ProfileProgress/>
                <ProfileStars/>
                <ProfileDashboard/>
            </div>
        </>
    )
}