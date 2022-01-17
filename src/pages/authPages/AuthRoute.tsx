import { FC, memo } from "react";
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
interface Props {
}
const AuthRoute: FC<Props> = (props) => {
    return (
        <div>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>
            <Route path="/signup">
                <SignupPage></SignupPage>
            </Route>
        </div>
    );
};
AuthRoute.defaultProps = {
}
export default memo(AuthRoute);