import React, { Suspense , lazy } from "react";

const LazyComponent = React.lazy(() => import("../components/Navbar"));

const Practise = () => {
  return (
    <Suspense fallback={<div> component is Laoding ... </div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default Practise;


