import { Suspense, lazy, ReactNode, ComponentType } from "react";
// We are adding the loading screen component here so that if the server takes any loading time to display data, we can display the loading screen to the user.
import { LoadingScreen } from "@components";

// Define a generic type for props
const Loadable =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P): ReactNode =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );

// Lazy loading helps us with performance optimization as only one page is loaded at a time so the bundle size is reduced.
export const ListPage = Loadable(lazy(() => import("@pages/listing")));
export const DetailsPage = Loadable(lazy(() => import("@pages/details")));
