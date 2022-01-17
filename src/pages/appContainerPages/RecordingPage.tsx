import { FC, memo } from "react";
interface Props {
}
const RecordingPage: FC<Props> = (props) => {
    return (
        <div>
            this is recording page
        </div>
    );
};
RecordingPage.defaultProps = {
}
export default memo(RecordingPage);