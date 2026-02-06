import { assetPath } from "../../lib/assetPath";

export default function About() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assetPath("/images/about/about.png")}
            alt="About Our School"
            className="w-[350px] h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Text and Button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            <strong>Announcement:</strong> Effective from <strong>1 September 2024</strong>, 
            all new student admissions and academic programs will be conducted 
            in accordance with the updated School Academic Policy 2025. 
            These changes aim to enhance learning quality, student development, 
            and overall academic excellence.
          </p>

          <button className="px-6 py-2 border border-[#0C9F77] rounded text-[#0C9F77] transition duration-200 ease-in-out hover:bg-[#0C9F77] hover:text-white focus:bg-[#0C9F77] focus:text-white active:bg-[#0C9F77] active:text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
