export const metadata = {
  title: "About Our School | School Information, Guidelines & Programs - School Portal",
  description:
    "Learn more about our school, its programs, facilities, guidelines, and tips for students, parents, and teachers through our School Portal.",
  keywords:
    "school information, about school, school programs, school facilities, student guidelines, school portal, education",
};

export default function AboutSchoolPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our School
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Welcome to our school! Here you can learn about our programs, facilities, academic guidelines, and student activities. We aim to provide a safe, engaging, and innovative environment for learning and growth.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* INTRO */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our school is dedicated to fostering academic excellence, personal growth, and community engagement. We provide students with modern facilities, experienced educators, and a wide range of programs to support their holistic development.
          </p>
        </div>

        {/* FEATURES / SCHOOL PROGRAMS */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-10">
            Our Programs & Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Academic Programs
              </h3>
              <p className="text-gray-700">
                We offer a wide range of academic programs tailored to different grade levels and interests, ensuring every student reaches their potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Extracurricular Activities
              </h3>
              <p className="text-gray-700">
                Students can participate in sports, clubs, arts, and community programs that help develop leadership, teamwork, and creativity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Modern Facilities
              </h3>
              <p className="text-gray-700">
                Our school is equipped with modern classrooms, labs, sports facilities, and digital resources to support effective learning and teaching.
              </p>
            </div>
          </div>
        </div>

        {/* GUIDELINES */}
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">
            Guidelines for Students & Parents
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
            To make the most of our school experience, students and parents are encouraged to follow academic guidelines, attend school programs, respect school rules, and actively participate in community and extracurricular activities.
          </p>
        </div>

        {/* TIPS */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Tips for New Students
            </h3>
            <p className="text-gray-700 text-lg">
              Explore your classrooms, connect with teachers, participate in clubs, and get familiar with school facilities to have a smooth start.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Importance of Staying Updated
            </h3>
            <p className="text-gray-700 text-lg">
              Check school announcements regularly and follow schedules to ensure you don’t miss important events, deadlines, or academic updates.
            </p>
          </div>
        </div>

        {/* CLOSING */}
        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Explore our school portal to learn more about programs, facilities, and guidelines. We aim to provide a nurturing and inspiring environment for every student.
          </p>
        </div>
      </section>
    </main>
  );
}
