import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

function App() {
    return (
        <BrowserRouter>
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
                    {privateRoutes.map((route, index) => (
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
