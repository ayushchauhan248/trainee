import { FC, memo, useEffect } from "react";
import { fetchGroups } from "../../api";
interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    useEffect(() => {
        fetchGroups({ status: "all-groups" });
    }, [])
    return (
        <div>
            this is dashboard page
        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);