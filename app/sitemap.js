export default function sitemap() {
  const baseUrl = `https://your-school-portal.vercel.app`; // Replace with your school portal URL

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-school`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
  ];
}
