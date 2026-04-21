export const siteConfig = {
  name: "Das Nagelatelier",
  shortName: "Nagelatelier",
  description: "Premium Nagelstudio in Göppingen. Wir bieten professionelle Maniküre, Nagelverlängerung, Gelmodellage, Pediküre und individuelles Nageldesign in entspannter Atmosphäre.",
  url: "https://dasnagelatelier-goeppingen.de", // Change to actual domain
  
  contact: {
    email: "hello@dasnagelatelier.de",
    phone: "+49 7161 000 000",
    whatsapp: "+4915100000000", // International format without + or spaces for the link, or with + for display
    address: {
      street: "Hauptstraße 42",
      city: "Göppingen",
      zip: "73033",
      country: "DE"
    }
  },

  social: {
    instagram: "https://instagram.com/dasnagelatelier"
  },

  seo: {
    keywords: ["Nagelstudio Göppingen", "Nagelverlängerung", "Maniküre", "Pediküre", "Gelmodellage", "Nageldesign", "Nagelreparatur"]
  },

  analytics: {
    // Leave empty to disable
    googleAnalyticsId: "", // e.g. "G-XXXXXXX"
    metaPixelId: "" // e.g. "123456789"
  },

  booking: {
    type: "form", // 'iframe' or 'form'
    iframeUrl: "https://calendly.com/your-link?embed_domain=yourdomain.com&embed_type=Inline" // Only used if type is 'iframe'
  }
};
