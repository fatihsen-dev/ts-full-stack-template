import { useDispatch, useSelector } from "react-redux/es/exports";
import { Dispatch, RootState } from "./store";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Login, Logout } from "./store/auth/authSlice";
import { request1 } from "./axios";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

export default function App() {
   const dispatch = useDispatch<Dispatch>();
   const navigate = useNavigate();
   const { status } = useSelector((store: RootState) => store.auth);

   useEffect(() => {}, []);

   return (
      <div>
         {status !== null ? (
            <div>
               <Routes>
                  <Route index element={<PageOne />} />
                  <Route path='/pagetwo' element={<PageTwo />} />
                  <Route path='*' element={<PageThree />} />
               </Routes>
               <Toaster position='top-right' reverseOrder={false} />
            </div>
         ) : (
            <div>
               <Player
                  autoplay
                  loop
                  src='https://assets7.lottiefiles.com/packages/lf20_3J0owIXaM6.json'
                  style={{ height: "400px", width: "400px" }}></Player>
            </div>
         )}
      </div>
   );
}
