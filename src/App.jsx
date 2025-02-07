import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "../pages/Homepage";
import MovieDetail from "../pages/MovieDetail";
import Error404 from "../pages/Error404";
import { GlobalProvider } from "../context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
