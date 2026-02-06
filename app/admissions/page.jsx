export const metadata = {
  title:
    "School Admissions Portal | Apply, Requirements & Guidelines - School Portal ",
  description:
    "Explore our school admissions portal to submit applications, check eligibility requirements, and access complete guidelines for enrolling at our school.",
  keywords:
    "school admissions, apply school, school enrollment, admission requirements, application portal, school guidelines, student enrollment",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Admissions
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Apply to our school easily through the online admissions portal. Get
          complete information on eligibility, required documents, deadlines,
          and step-by-step guidance to ensure a smooth enrollment process.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Admission Features
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our admissions portal allows parents and students to apply online,
            check eligibility, upload required documents, and track application
            status in one centralized system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              Application Process
            </h3>
            <p className="text-gray-700">
              Submit applications online, upload documents, and monitor the
              progress of your submission.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              Requirements & Eligibility
            </h3>
            <p className="text-gray-700">
              Find out admission requirements, age eligibility, and prerequisites
              for prospective students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              Guidance & Support
            </h3>
            <p className="text-gray-700">
              Access step-by-step guidance, FAQs, and support from our
              admissions team for a smooth application experience.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Start your application today and secure a place at our school. Our
            admissions portal ensures a streamlined, transparent, and supportive
            enrollment experience for all prospective students and parents.
          </p>
        </div>
      </section>
    </main>
  );
}
