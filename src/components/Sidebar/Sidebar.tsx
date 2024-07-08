import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebarLeft">
                <div className="serverIcon">
                    <img src="./Robot.png" alt=""  />
                </div>
                <div className="serverIcon">
                    <img src="./Robot.png" alt=""  />
                </div>
            </div>
            <div className="sidebarRight">
                <div className="seidebarTop" >
                    <h3>Discode</h3>

                </div>
            </div>
        </div>
    );
};

export default Sidebar