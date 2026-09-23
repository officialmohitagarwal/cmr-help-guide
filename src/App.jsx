import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MobileSidebar from "./components/layout/MobileSidebar";
import Footer from "./components/layout/Footer";
import SearchModal from "./components/search/SearchModal";
import ScrollToTop from "./components/navigation/ScrollToTop";

import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import FAQsPage from "./pages/FAQsPage";
import TroubleshootingPage from "./pages/TroubleshootingPage";

import { walletCategory } from "./data/wallet";
import { usersCategory } from "./data/users";
import { ordersCategory } from "./data/orders";
import { subscriptionsCategory } from "./data/subscriptions";
import { settingsCategory } from "./data/settings";

function AppContent() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const showSidebar = !isHomePage;

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Header
        onMenuClick={() => setMobileNavOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />

      {showSidebar && (
        <MobileSidebar
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
      )}

      <div
        className={
          isHomePage
            ? "mx-auto flex w-full"
            : "mx-auto flex max-w-[1440px]"
        }
      >
        {showSidebar && <Sidebar />}

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                onSearchClick={() => setSearchOpen(true)}
              />
            }
          />

          {/* Platform Categories */}
          <Route
            path="/wallet"
            element={
              <CategoryPage category={walletCategory} />
            }
          />

          <Route
            path="/users"
            element={
              <CategoryPage category={usersCategory} />
            }
          />

          <Route
            path="/orders"
            element={
              <CategoryPage category={ordersCategory} />
            }
          />

          <Route
            path="/subscriptions"
            element={
              <CategoryPage
                category={subscriptionsCategory}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <CategoryPage category={settingsCategory} />
            }
          />

          {/* Resources */}
          <Route
            path="/faqs"
            element={<FAQsPage />}
          />

          <Route
            path="/troubleshooting"
            element={<TroubleshootingPage />}
          />

          {/* Articles */}
          <Route
            path="*"
            element={<ArticlePage />}
          />
        </Routes>
      </div>

      <Footer />

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      <AppContent />
    </BrowserRouter>
  );
}

export default App;