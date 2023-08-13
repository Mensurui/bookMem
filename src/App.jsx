import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BooksDetail, {
  loader as bookDetailLoader,
} from "./pages/Books/BookDetail";
import Error from "./components/Error";

import Books, { loader as loaderBooks } from "./pages/Books/Books";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login, {
  loader as loaderLogin,
  action as actionLogin,
} from "./pages/Login";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostBooks, { loader as hostBookLoader } from "./pages/Host/HostBooks";
import HostBookDetail, {
  loader as hostBookDetailLoader,
} from "./pages/Host/HostBookDetail";
import HostBookInfo from "./pages/Host/HostBookInfo";
import HostBookPricing from "./pages/Host/HostBookPricing";
import HostBookPhotos from "./pages/Host/HostBookPhotos";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loaderLogin}
        action={actionLogin}
      />
      <Route
        path="books"
        element={<Books />}
        loader={loaderBooks}
        errorElement={<Error />}
      />
      <Route
        path="books/:id"
        element={<BooksDetail />}
        loader={bookDetailLoader}
        errorElement={<Error />}
      />
      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="hostBooks"
          element={<HostBooks />}
          loader={hostBookLoader}
          errorElement={<Error />}
        />

        <Route
          path="hostBooks/:id"
          element={<HostBookDetail />}
          errorElement={<Error />}
          loader={hostBookDetailLoader}
        >
          <Route
            index
            element={<HostBookInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostBookPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostBookPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
