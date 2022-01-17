import { FC, memo } from "react";
interface Props {
}
const LoginPage: FC<Props> = (props) => {
    return (
        <div>
            this is login page
        </div>
    );
};
LoginPage.defaultProps = {
}
export default memo(LoginPage);