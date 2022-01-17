import { FC, memo } from "react";
interface Props {
}
const NotFound: FC<Props> = (props) => {
    return (
        <div>
            this is not found page
        </div>
    );
};
NotFound.defaultProps = {
}
export default memo(NotFound);