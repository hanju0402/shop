import RecentList from "./RecentList";

export default function MainBoard() {
    return (
        <>
            <div className="flex-container">
                <div className="main-bg"></div>
                <div className="recent-watched">
                    <RecentList />
                </div>
            </div>
        </>
    );
}
