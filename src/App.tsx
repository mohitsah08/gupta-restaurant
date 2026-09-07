import { Switch, Route } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { HomePage } from '@/pages/HomePage';
import { MenuLandingPage } from '@/pages/MenuLandingPage';
import { MenuCategoryPage } from '@/pages/MenuCategoryPage';
import { AboutPage } from '@/pages/AboutPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-ivory antialiased selection:bg-brand-gold/30 selection:text-brand-ivory">
      {/* Editorial Sticky Navbar */}
      <Navbar />

      {/* Main Page Routes */}
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/menu" component={MenuLandingPage} />
          <Route path="/menu/:category" component={MenuCategoryPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>

      {/* Architectural Dark Footer */}
      <Footer />

      {/* Mandatory Mobile Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

export default App;
