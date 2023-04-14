import React, {FC, useCallback, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import NotFound from "./shared/components/NotFound";
// import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Layout from "./shared/components/Layout";
import Auth from "./user/pages/Auth";
import {AuthContext} from "./shared/context/auth-context";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);
    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const ProtectedRoute: FC<any> = ({children}) => {
        if (!isLoggedIn) return <Navigate to={"/"}/>
        return children
    }

    // let routes;
    // if (isLoggedIn) {
    //     routes = (
    //         <>
    //             <Route path="/" element={<Layout><Users/></Layout>}/>
    //             <Route path="/:userId/places" element={<Layout><UserPlaces/></Layout>}/>
    //             <Route path="/places/new" element={<Layout><NewPlace/></Layout>}/>
    //             <Route path="/places/:placeId" element={<Layout><UpdatePlace/></Layout>}/>
    //             <Route element={<Navigate to="/"/>}/>
    //         </>
    //     );
    // } else {
    //     routes = (
    //         <>
    //             <Route path="/" element={<Layout><Users/></Layout>}/>
    //             <Route path="/:userId/places" element={<Layout><UserPlaces/></Layout>}/>
    //             <Route path="/auth" element={<Layout><Auth/></Layout>}/>
    //             <Route element={<Navigate to="/auth"/>}/>
    //         </>
    //     )
    // }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout><Users/></Layout>}/>
                    <Route path="/:userId/places" element={<Layout><UserPlaces/></Layout>}/>
                    <Route path="/places/new" element={<Layout><ProtectedRoute><NewPlace/></ProtectedRoute></Layout>}/>
                    <Route path="/places/:placeId" element={<Layout><ProtectedRoute><UpdatePlace/></ProtectedRoute></Layout>}/>
                    <Route path="/auth" element={<Layout><Auth/></Layout>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
