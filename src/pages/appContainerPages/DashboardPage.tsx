import { FC, memo } from "react";
interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    return (
        <div>
            this is dashboard page
        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);