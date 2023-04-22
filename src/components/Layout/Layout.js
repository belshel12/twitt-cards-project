import { Suspense } from 'react';
import { Wrapper, Header } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default Layout;
