import { FC, memo, useEffect, useState } from "react";
import { logout } from "../api/authApi";
import { fetchGroups } from "../api/groupApi";
interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    const [group, setGroup] = useState<any[]>();
    useEffect(() => {
        fetchGroups({ status: "all-groups", query: "group" }).then((groups) => {
            console.log(groups.data)
            setGroup(groups.data);
        })
    }, [])
    return (
        <div>
            <div>
                this is dashbaord page
            </div>
            <div>
                {
                    group?.map((e) => {
                        return <div>{e?.name}</div>
                    })
                }
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