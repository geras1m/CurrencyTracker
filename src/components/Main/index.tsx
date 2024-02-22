import { routesMap } from '@constants/router/routerPaths';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <Suspense fallback='loading...'>
      <Routes>
        {routesMap.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Main;
