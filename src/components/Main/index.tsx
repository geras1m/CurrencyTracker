import { routesMap } from '@constants/router/routerPaths';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// TODO: убрать тег main в pages

const Main = () => {
  return (
    <main>
      <Suspense fallback='loading...'>
        <Routes>
          {routesMap.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
