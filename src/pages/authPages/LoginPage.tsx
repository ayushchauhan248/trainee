import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { ImSpinner10 } from 'react-icons/im'
import { login } from "../api/authApi";
interface Props {
}
const LoginPage: FC<Props> = (props) => {
    const history = useHistory();
    const { handleSubmit, getFieldProps, touched, errors, isSubmitting } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        }),
        onSubmit: (data) => {
            login(data).then(() =>
                history.push("/dashboard"))
        }
    })
    return (
        <div className="bg-slate-300 h-screen w-screen">
            <div className="flex flex-col items-center flex-1 max-h-screen pt-12 justify-center px-4 sm:px-0" style={{ height: "575px" }}>
                <div className="flex rounded-lg shadow-2xl w-full h-screen  sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <div className="flex flex-col flex-1 justify-center mb-8">
                            <h1 className="text-4xl text-center font-thin">Login</h1>
                            <div className="w-full mt-4">
                                <form className="form-horizontal w-3/4 mx-auto"
                                    method="POST"
                                    action="#"
                                    onSubmit={handleSubmit}>
                                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <input
                                            className="pl-2 outline-none border-none"
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                            {...getFieldProps("email")}
                                        />
                                    </div>
                                    {
                                        touched.email && <div className="ml-4">
                                            <span className="text-red-700 text-sm absolute -mt-5">{errors.email}</span>
                                        </div>
                                    }
                                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <input
                                            className="pl-2 outline-none border-none"
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            {...getFieldProps("password")}
                                        />
                                    </div>
                                    {
                                        touched.password && <div className="ml-4">
                                            <span className="text-red-700 text-sm absolute -mt-5">{errors.password}</span>
                                        </div>
                                    }
                                    <div className="flex flex-col mt-8">
                                        {isSubmitting ?
                                            <div className="mx-auto pb-3">
                                                <ImSpinner10 className="animate-spin h-8 w-8"></ImSpinner10>
                                            </div> : <div className="h-11"></div>
                                        }

                                        <button type="submit" className="bg-slate-600 hover:bg-slate-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div className="flex flex-col text-center mt-4">

                                    <span className="no-underline hover:underline text-blue-dark text-xs"><Link to="/forgotpassword" >Forgot Your Password ? </Link></span>

                                    <Link to="signup"><span className="no-underline hover:underline text-blue-dark text-xs">Create An Account ?</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 rounded-r-lg bg-white pt-12 shadow-2xl">
                        <div className="items-center">
                            <img className="h-60 w-60 m-auto" src="https://helios-i.mashable.com/imagery/articles/057j8wdpMlBCEcPRqiVe4DY/images-17.fit_lim.size_2000x.v1619018994.png" alt="logo" />
                            <div className="pt-8">
                                <div className="text-center text-slate-800 text-3xl font-bold">trainee...</div>
                                <div className="text-center  text-slate-800 text-xl font-semibold">A step towards your future</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
LoginPage.defaultProps = {
}
export default memo(LoginPage);