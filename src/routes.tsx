import { Routes, Route } from "react-router-dom";

import { PublicRoute } from "./components/PublicRoute/index";
import { PrivateRoute } from "./components/PrivateRoute/index";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgetPassword } from "./pages/ForgetPassword";
import { CreateRoom } from "./pages/CreateRoom";
import { RecoverPassword } from "./pages/RecoverPassword";
import { PageNotFound } from "./pages/PageNotFound";
import { VerifyEmail } from "./pages/VerifyEmail";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicRoute />} >
                    <Route path="/" element={<Login />} />
                </Route>

                <Route path="/register" element={<PublicRoute />} >
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/verify-email" element={<PublicRoute />} >
                    <Route path="/verify-email" element={<VerifyEmail />} />
                </Route>

                <Route path="/forget-password" element={<PublicRoute />} >
                    <Route path="/forget-password" element={<ForgetPassword />} />
                </Route>

                <Route path="/password-recover" element={<PublicRoute />} >
                    <Route path="/password-recover" element={<RecoverPassword />} />
                </Route>

                <Route path="/create-room" element={<PrivateRoute />} >
                    <Route path="/create-room" element={<CreateRoom />} />
                </Route>

                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}