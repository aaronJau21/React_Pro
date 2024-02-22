import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { routesLazyLoads } from "../router/lazyload.routes";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        {routesLazyLoads.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {routesLazyLoads.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {/* <Route path="*" element={<span>Not Found</span>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
