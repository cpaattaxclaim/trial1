import { createBrowserRouter, Outlet, useLocation, Navigate } from "react-router";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { BlogPostPage } from './pages/BlogPostPage';
import { FiveFourSevenTwoDirect } from './pages/FiveFourSevenTwoDirect';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/services", Component: ServicesPage },
      { path: "/about", Component: AboutPage },
      { path: "/contact", Component: ContactPage },
      { path: "/faq", Component: FAQPage },
      { path: "/blog", Component: BlogPage },
      { path: "/blog/:slug", Component: BlogPostPage },
      // Redirect /resources to /blog so old links don't break
      { path: "/resources", element: <Navigate to="/blog" replace /> },
      { path: "/privacy-policy", Component: PrivacyPolicyPage },
      { path: "/terms-of-service", Component: TermsOfServicePage },
      { path: "/cookie-policy", Component: CookiePolicyPage },
      { path: "/5472direct", Component: FiveFourSevenTwoDirect },
    ],
  },
]);
