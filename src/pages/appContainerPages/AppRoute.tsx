import { FC, memo } from "react";
import { Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import RecordingPage from "./RecordingPage";
interface Props {
}
const AppRoute: FC<Props> = (props) => {
    return (
        <div>
            <Route path="/dashboard">
                <DashboardPage></DashboardPage>
            </Route>
            <Route path="/recording">
                <RecordingPage></RecordingPage>
            </Route>
        </div>
    );
};
AppRoute.defaultProps = {
}
export default memo(AppRoute);