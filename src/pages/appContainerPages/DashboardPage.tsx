import { FC, memo, useEffect } from "react";
import { fetchGroups, logout } from "../../api";
interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    useEffect(() => {
        fetchGroups({ status: "all-groups" });
    }, [])
    return (
        <div>
            <div>
                this is dashbaord page
            </div>
            <button
                className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-4 py-1 rounded-md mr-6"
                onClick={() => {
                    logout();
                    window.location.href = "/login";
                }}>
                Logout
            </button>
        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);