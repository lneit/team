import { Fragment } from 'react';
import Header from './header';

import { useRouter } from 'next/router';

const Layout = (props: any) => {
  const router = useRouter();
  const homePage = router.pathname === '/';

  return (
    <Fragment>
      {!homePage && <Header />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
