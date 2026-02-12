import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SiteSettings from './pages/admin/SiteSettings';
import { EditProvider } from './context/EditContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Footer from './components/Footer';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import PropertyForm from './pages/admin/PropertyForm';
import Leads from './pages/admin/Leads';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import CosmicBackground from './components/ui/CosmicBackground';
import EditorToolbar from './components/ui/EditorToolbar';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/property/new"
          element={
            <ProtectedRoute>
              <PropertyForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/property/edit/:id"
          element={
            <ProtectedRoute>
              <PropertyForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/sitesettings" element={<SiteSettings />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen text-gray-200 flex flex-col font-sans ${isAdminPage ? '' : 'cursor-none'} selection:bg-emerald-500/30 selection:text-emerald-300 ${isAdminPage ? 'bg-gray-50' : 'bg-[#030712]'}`}>
      {!isAdminPage && <CosmicBackground />}
      {!isAdminPage && <CustomCursor />}
      {!isAdminPage && <Navbar />}
      <EditorToolbar />
      {/* Added overflow-x-hidden and w-full to prevent any layout shifts */}
      <main className="flex-grow w-full overflow-x-hidden">
        <AnimatedRoutes />
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <EditProvider>
        <AppContent />
      </EditProvider>
    </Router>
  );
}

export default App;
