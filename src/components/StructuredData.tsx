export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jobdork.tech/#organization",
        "name": "JobDork",
        "url": "https://jobdork.tech",
        "logo": "https://jobdork.tech/logo.png",
        "description": "A tool to generate advanced search queries to discover hidden tech jobs on ATS platforms before they appear on major job boards."
      },
      {
        "@type": "WebSite",
        "@id": "https://jobdork.tech/#website",
        "url": "https://jobdork.tech",
        "name": "JobDork",
        "description": "Find Hidden Jobs Google can find, others can't.",
        "publisher": {
          "@id": "https://jobdork.tech/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://jobdork.tech/?role={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://jobdork.tech/#webapp",
        "name": "JobDork Builder",
        "url": "https://jobdork.tech",
        "description": "Advanced boolean search builder (Google Dorks) designed specifically to query applicant tracking systems for unlisted or newly posted job opportunities.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
