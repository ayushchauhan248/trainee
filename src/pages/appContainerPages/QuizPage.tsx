import { FC, memo } from "react";
interface Props {
}
const QuizPage: FC<Props> = (props) => {
    return (
        <div>
            this is quiz page
        </div>
    );
};
QuizPage.defaultProps = {
}
export default memo(QuizPage);