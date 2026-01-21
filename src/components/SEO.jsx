import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url }) {
    const siteTitle = "Harmonix Musicals";
    const defaultDescription = "Join Harmonix Musicals, Chennai's top music school for Guitar, Piano, Violin, and Vocals. Professional training for all ages.";
    const defaultImage = "/logo.png";
    const siteUrl = "https://harmonix-musicals.com";

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    const fullImage = image && (image.startsWith("http") || image.startsWith("//")) ? image : `${siteUrl}${image || defaultImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
}
