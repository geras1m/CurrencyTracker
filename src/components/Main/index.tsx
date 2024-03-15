import { FallbackWrapper } from '@components/Main/styled';
import { Spinner } from '@components/Spinner';
import { routesMap } from '@constants/router/routerPaths';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const MainPagesContent = () => {
  return (
    <Suspense
      fallback={
        <FallbackWrapper>
          <Spinner width='100px' border='10px' />
        </FallbackWrapper>
      }
    >
      <Routes>
        {routesMap.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};
