import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const NotFound: FC<Props> = (props) => {
    return (
        <div className="bg-slate-300  h-screen  w-screen">
            <div className="w-1/2 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-6xl font-bold text-slate-800">404</h1>
                        <h1 className="text-3xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <Link to="/login"><button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-5 py-2 rounded-md mr-6">
                            HOME
                        </button></Link>
                        <button className="bg-white  hover:bg-slate-700 border-slate-700 border-2 text-slate-700 hover:text-white font-semibold px-4 py-1 rounded-md">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
NotFound.defaultProps = {
}
export default memo(NotFound);