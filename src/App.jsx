import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { logout, refreshTokens } from './redux/actions/authAction';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';

function App() {
    const dispatch = useDispatch();
    const { isLogged, refreshToken } = useSelector((state) => state.auth);

    useEffect(() => {
        const handleRefreshTokens = async () => {
            try {
                if (refreshToken) {
                    dispatch(refreshTokens());
                    console.log('refresh tokens', new Date());
                } else {
                    dispatch(logout());
                }
            } catch (error) {
                console.log(error);
                dispatch(logout());
            }
        };

        handleRefreshTokens();
    }, []);

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.Layout>
                                <route.Component />
                            </route.Layout>
                        }
                    />
                ))}
                {isLogged &&
                    privateRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            // render={({ location }) => (
                            //     <route.Layout>
                            //         <route.Component location={location} />
                            //     </route.Layout>
                            // )}
                            element={
                                <route.Layout>
                                    <route.Component location={location} />
                                </route.Layout>
                            }
                        />
                    ))}
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
