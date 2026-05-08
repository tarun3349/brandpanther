import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";
import { INSTAGRAM_URL } from "@/lib/social";
import { upsertAlternateHreflang, upsertLink, upsertMeta } from "@/lib/seoDom";

export const SITE_TITLE = "Brand Panther | Premium Digital Marketing Agency";

export const SITE_DESCRIPTION =
  "Brand Panther is a premium digital marketing studio for ambitious brands — strategy, social media, paid ads, websites, content, and sales support from first click to final sale.";

const SITE_IMAGE_PATH = "/logo-mark.png";

const DocumentMeta = () => {
  useEffect(() => {
    const pageUrl = `${SITE_URL}/`;
    const imageUrl = new URL(SITE_IMAGE_PATH, `${SITE_URL}/`).href;

    document.title = SITE_TITLE;

    upsertMeta("name", "description", SITE_DESCRIPTION);
    upsertMeta(
      "name",
      "keywords",
      "Brand Panther, digital marketing agency, social media marketing, paid ads, branding, website design, content marketing, lead generation, India, growth marketing",
    );
    upsertMeta("name", "author", "Brand Panther");
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("name", "googlebot", "index, follow");
    upsertMeta("name", "bingbot", "index, follow");

    upsertLink("canonical", pageUrl);
    upsertAlternateHreflang("en-IN", pageUrl);
    upsertAlternateHreflang("x-default", pageUrl);

    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:title", SITE_TITLE);
    upsertMeta("property", "og:description", SITE_DESCRIPTION);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:secure_url", imageUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:site_name", "Brand Panther");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", SITE_TITLE);
    upsertMeta("name", "twitter:description", SITE_DESCRIPTION);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", "Brand Panther logo");

    const graph = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Brand Panther",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: imageUrl },
        email: "brandpanther.ai@gmail.com",
        telephone: "+91-90254-30301",
        sameAs: [INSTAGRAM_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Brand Panther",
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "Brand Panther",
        image: imageUrl,
        url: SITE_URL,
        telephone: "+91-90254-30301",
        email: "brandpanther.ai@gmail.com",
        priceRange: "$$",
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        areaServed: { "@type": "Country", name: "India" },
        sameAs: [INSTAGRAM_URL],
      },
    ];

    const payload = { "@context": "https://schema.org", "@graph": graph };

    let script = document.getElementById("ld-json-brand-panther");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json-brand-panther";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(payload);
  }, []);

  return null;
};

export default DocumentMeta;
