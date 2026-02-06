export const metadata = {
  title:
    "School Programs & Activities | Explore Learning Opportunities - School Portal ",
  description:
    "Discover the wide range of programs and activities offered at our school. Explore academic, sports, arts, and community programs designed to enhance student learning and development.",
  keywords:
    "school programs, student activities, extracurricular activities, school events, academic programs, arts and sports, school community",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Programs & Activities
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Explore the diverse programs and activities at our school that help
          students grow academically, creatively, and socially in a supportive
          environment.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our school offers a wide range of programs including academic
            enrichment, arts, sports, and community service activities that
            aim to develop students’ skills and talents.
          </p>
        </div>

        {/* Program Highlights */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-10">
            Featured Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Academic Programs
              </h3>
              <p className="text-gray-700">
                Enrichment courses, STEM initiatives, and advanced learning
                programs designed to challenge and inspire students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Arts & Creativity
              </h3>
              <p className="text-gray-700">
                Music, drama, visual arts, and creative clubs that nurture
                imagination and artistic talents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Sports & Fitness
              </h3>
              <p className="text-gray-700">
                Team sports, individual fitness programs, and physical
                education designed to promote healthy lifestyles and teamwork.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To be a leading institution that provides diverse programs and
              activities to empower students academically, socially, and
              creatively.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To offer a variety of programs and extracurricular activities
              that support holistic development and prepare students for
              lifelong success.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our school programs are designed to provide meaningful learning
            experiences beyond the classroom. We are committed to fostering a
            dynamic, inclusive, and inspiring environment where students can
            explore, create, and achieve their full potential.
          </p>
        </div>
      </section>
    </main>
  );
}
