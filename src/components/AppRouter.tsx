import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";


const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.authReducer)
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to='/' replace />}
          key={'/'}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to='/' replace />}
          key={'/'}
        />
      </Routes>
  );
};

export default AppRouter;