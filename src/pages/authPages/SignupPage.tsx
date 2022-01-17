import { FC, memo } from "react";
interface Props {
}
const SignupPage: FC<Props> = (props) => {
    return (
        <div>
            this is signup page
        </div>
    );
};
SignupPage.defaultProps = {
}
export default memo(SignupPage);