import { createBrowserRouter, Outlet, useLocation, Navigate } from "react-router";
import { useEffect, lazy, Suspense } from "react";

// Eagerly loaded — core pages
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Lazy loaded — reduces initial bundle size
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const FAQPage = lazy(() => import("./pages/FAQPage").then(m => ({ default: m.FAQPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then(m => ({ default: m.BlogPostPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage").then(m => ({ default: m.TermsOfServicePage })));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage").then(m => ({ default: m.CookiePolicyPage })));
const FiveFourSevenTwoDirect = lazy(() => import("./pages/FiveFourSevenTwoDirect").then(m => ({ default: m.FiveFourSevenTwoDirect })));

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
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Outlet />
      </Suspense>
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
      { path: "/resources", element: <Navigate to="/blog" replace /> },
      { path: "/privacy-policy", Component: PrivacyPolicyPage },
      { path: "/terms-of-service", Component: TermsOfServicePage },
      { path: "/cookie-policy", Component: CookiePolicyPage },
      { path: "/5472direct", Component: FiveFourSevenTwoDirect },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
