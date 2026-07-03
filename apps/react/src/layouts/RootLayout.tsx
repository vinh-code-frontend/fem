import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div id="fem-react">
      {/* <Suspense fallback={<PageFallback />}></Suspense> */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
