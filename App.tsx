import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AppContainer from "./containers/AppContainer";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { ProtectedRoute } from "./hocs/withAuth";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Router>
          <div className="min-h-screen bg-gray-900 flex flex-col">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
