import React from 'react';
import {
    Link,
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation
} from 'react-router-dom';
import { loginUser } from '../api';


export function loginLoader({ request }) {
    return (new URL(request.url).searchParams.get("message"));
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";

    try {
        const data = await loginUser({ email, password });
        localStorage.setItem('token', data.token);
        const response = redirect(pathname);
        response.body = true;
        return response;
    }
    catch (error) {
        return error.message;
    }
}
function Login() {

    // variables 
    const inputStyle = "w-full h-10 rounded-lg p-4 m-1 bg-blue-100  outline-none  ";
    const message = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();
    return (
        <div className='p-12 bg-mainColor'>
            <h1 className='text-3xl font-bold mb-5 text-center'> Sign in to your account </h1>
            {error && <h1 className='text-red-600 text-xl font-semibold text-center'>{error}</h1>}

            {message && <h1 className='text-center text-red-600 font-semibold text-lg'>  {message}</h1>}
            <Form method="post" replace>
                <label>
                    <input
                        className={inputStyle}
                        type="email"
                        name="email"
                        placeholder="Email adress"
                    />
                </label>
                <label className=''>
                    <input
                        className={inputStyle}
                        type="password"
                        name="password"
                        placeholder="Password" />
                    {/* <span className='relative right-10'> {show? "show" : "hide"}</span> */}
                </label>
                <button className='w-full p-auto bg-amber-500 text-white font-bold mt-5 p-3 rounded-lg'
                    disabled={navigation.state === "submitting" ? true : false}>
                    {navigation.state === "submitting" ? " Logging..." : "Log in"}
                </button>
            </Form>
            <p className='mt-10'>Don't have account? <Link to="" className='text-amber-500' >Create new account</Link></p>
        </div>
    )
}

export default Login