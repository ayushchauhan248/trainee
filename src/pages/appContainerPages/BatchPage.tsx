import { FC, memo } from "react";
interface Props {
}
const BatchPage: FC<Props> = (props) => {
    return (
        <div>
            this is batch page
        </div>
    );
};
BatchPage.defaultProps = {
}
export default memo(BatchPage);