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

// ============================================================
// Platform Categories
// ============================================================

import { dashboardCategory } from "./data/dashboard";

import { walletCategory } from "./data/wallet";

import { usersPlatformCategory } from "./data/userPlatform";

import { ordersPlatformCategory } from "./data/ordersPlatform";

import {
  subscriptionsCategory,
  subscriptionsRenewalsCategory,
} from "./data/subscriptions";

import { settingsCategory } from "./data/settings";

// ============================================================
// Concept Categories
// ============================================================

import { domainsCategory } from "./data/domains";

import { billingCategory } from "./data/billing";

import { dnsCategory } from "./data/dns";

import { mailboxesCategory } from "./data/mailboxes";

import { warmupCategory } from "./data/warmup";

// Users & Partner Administration — Concepts

import { usersConcept } from "./data/users.concept";

import { exportsCategory } from "./data/exports";

import { webhooksCategory } from "./data/webhooks";

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
          {/* ================================================== */}
          {/* Home */}
          {/* ================================================== */}

          <Route
            path="/"
            element={
              <Home
                onSearchClick={() => setSearchOpen(true)}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform — Dashboard */}
          {/* ================================================== */}

          <Route
            path="/dashboard"
            element={
              <CategoryPage
                category={dashboardCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Concept Categories */}
          {/* ================================================== */}

          <Route
            path="/concepts/domains"
            element={
              <CategoryPage
                category={domainsCategory}
              />
            }
          />

          <Route
            path="/concepts/billing-wallet"
            element={
              <CategoryPage
                category={billingCategory}
              />
            }
          />

          <Route
            path="/concepts/dns"
            element={
              <CategoryPage
                category={dnsCategory}
              />
            }
          />

          <Route
            path="/concepts/mailboxes-provisioning"
            element={
              <CategoryPage
                category={mailboxesCategory}
              />
            }
          />

          <Route
            path="/concepts/subscriptions-renewals"
            element={
              <CategoryPage
                category={subscriptionsRenewalsCategory}
              />
            }
          />

          <Route
            path="/concepts/warmup-deliverability"
            element={
              <CategoryPage
                category={warmupCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Concept — Users & Partner Administration */}
          {/* ================================================== */}

          <Route
            path="/concepts/users-partner-administration"
            element={
              <CategoryPage
                category={usersConcept}
              />
            }
          />

          {/* ================================================== */}
          {/* Concept — Exporting Mailboxes */}
          {/* ================================================== */}

          <Route
            path="/concepts/exporting-mailboxes"
            element={
              <CategoryPage
                category={exportsCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Concept — Webhooks & Events */}
          {/* ================================================== */}

          <Route
            path="/concepts/webhooks-events"
            element={
              <CategoryPage
                category={webhooksCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform Categories */}
          {/* ================================================== */}

          <Route
            path="/wallet"
            element={
              <CategoryPage
                category={walletCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform — Users */}
          {/* ================================================== */}

          <Route
            path="/users"
            element={
              <CategoryPage
                category={usersPlatformCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform — Orders */}
          {/* ================================================== */}

          <Route
            path="/orders"
            element={
              <CategoryPage
                category={ordersPlatformCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform — Subscriptions */}
          {/* ================================================== */}

          <Route
            path="/subscriptions"
            element={
              <CategoryPage
                category={subscriptionsCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Platform — Settings */}
          {/* ================================================== */}

          <Route
            path="/settings"
            element={
              <CategoryPage
                category={settingsCategory}
              />
            }
          />

          {/* ================================================== */}
          {/* Resources */}
          {/* ================================================== */}

          <Route
            path="/faqs"
            element={<FAQsPage />}
          />

          <Route
            path="/troubleshooting"
            element={<TroubleshootingPage />}
          />

          {/* ================================================== */}
          {/* Articles */}
          {/* ================================================== */}

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
      <ScrollToTop />

      <AppContent />
    </BrowserRouter>
  );
}

export default App;