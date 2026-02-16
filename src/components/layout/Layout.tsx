import { ReactNode } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    image?: string;
}

export function Layout({
    children,
    title = "Selvabhoomi - Premium Farmland Real Estate",
    description = "Find the best agricultural land and farmland investments in India. Trusted marketplace for buying and selling farm properties.",
    image = "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
}: LayoutProps) {
    const siteUrl = 'https://selvabhoomi.com'; // Replace with actual URL

    return (
        <HelmetProvider>
            <div className="flex flex-col min-h-screen bg-neutral text-neutral-900 font-sans">
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={siteUrl} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={image} />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={siteUrl} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                    <meta property="twitter:image" content={image} />
                </Helmet>

                <Navbar />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    );
}
