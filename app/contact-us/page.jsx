export const metadata = {
  title: "Contact Us - School Portal | Support & Inquiries",
  description:
    "Reach out to our school portal for any inquiries, support, or feedback related to academic services, admissions, or general school information.",
  keywords:
    "contact school, school support, school inquiries, academic support, parent inquiries, student help",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg">
          Have a question, feedback, or need assistance related to our school? 
          Please fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-blue-600 mb-2">Email</h3>
          <p className="text-gray-700">info@ourschool.edu</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-blue-600 mb-2">Phone</h3>
          <p className="text-gray-700">+1 (123) 456-7890</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-blue-600 mb-2">Office Hours</h3>
          <p className="text-gray-700">Monday – Friday, 8:00 AM – 4:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject of your message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
