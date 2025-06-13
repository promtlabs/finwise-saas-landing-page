import { FiUploadCloud, FiSearch, FiZap, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: <FiUploadCloud size={36} className="text-blue-400" />,
    title: "Upload",
    description: "Drop your short-form video and let our AI get to work."
  },
  {
    icon: <FiSearch size={36} className="text-green-400" />,
    title: "Analyze",
    description: "AI transcribes, detects topics, and analyzes sentiment/tone."
  },
  {
    icon: <FiZap size={36} className="text-yellow-400" />,
    title: "Generate",
    description: "Get viral hook suggestions tailored for your content."
  },
  {
    icon: <FiCheckCircle size={36} className="text-purple-400" />,
    title: "Results",
    description: "Preview, export, and share your new hooked video versions."
  }
];

const HowItWorks: React.FC = () => (
  <section className="py-16 px-4 bg-[#0a0e17]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        Instantly generate viral video hooks in four simple steps.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center bg-[#151a24] rounded-2xl p-6 shadow-md">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{`${idx + 1}. ${step.title}`}</h3>
            <p className="text-gray-400 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 