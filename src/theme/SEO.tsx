import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    image?: string | null;
    article?: boolean;
    children?: ReactNode;
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl
                supportedLanguages
                defaultImage: image
                twitterUsername
            }
        }
    }
`;

const SEO = ({ image = null, article = false, children }: SEOProps) => {
    const { t } = useTranslation();
    const { language, originalPath } = useI18next();
    const { pathname } = useLocation();
    const { xxl } = useBreakpoint();
    const { site } = useStaticQuery(query);
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        supportedLanguages,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: t('metaData.title') || defaultTitle,
        description: t('metaData.description') || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };
    const viewport = xxl ? 'width=1920' : 'width=device-width, initial-scale=1, shrink-to-fit=no';

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            htmlAttributes={{ tabIndex: 0, lang: language }}
        >
            <meta name="viewport" content={viewport} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && <meta property="og:type" content="article" />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && <meta property="og:description" content={seo.description} />}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && <meta name="twitter:description" content={seo.description} />}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            <link rel="canonical" href={`https://cryosculptor.com${pathname}`} />

            {supportedLanguages.map((supported: string) => {
                const lang = supported === 'dk' ? 'da' : supported;

                return (
                    <link
                        key={lang}
                        rel="alternate"
                        hrefLang={lang}
                        href={`${siteUrl}${
                            supported !== 'en' ? `/${supported}` : ''
                        }${originalPath}`}
                    />
                );
            })}

            <link rel="alternate" hrefLang="x-default" href="https://cryosculptor.com/" />

            {children}
        </Helmet>
    );
};

export default SEO;
