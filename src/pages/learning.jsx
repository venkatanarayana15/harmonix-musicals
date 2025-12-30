const instruments = [
  {
    name: "Guitar",
    desc: "Acoustic & Electric guitar training from basics to advanced.",
    icon: "🎸",
    level: "Beginner to Advanced",
  },
  {
    name: "Piano",
    desc: "Classical & modern piano lessons with theory and practice.",
    icon: "🎹",
    level: "Beginner to Advanced",
  },
  {
    name: "Violin",
    desc: "Structured violin training with focus on posture & tone.",
    icon: "🎻",
    level: "Beginner to Intermediate",
  },
  {
    name: "Vocal",
    desc: "Carnatic, Western & light music vocal training.",
    icon: "🎤",
    level: "All Levels",
  },
]

export default function Learning() {
  return (
    <div className="pt-2 pb-2 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-1">
          <h1 className="text-4xl font-bold mb-4">Learning Programs</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your instrument and begin your musical journey with
            structured lessons and expert guidance.
          </p>
        </div>

        {/* INSTRUMENT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instruments.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-400 mb-4">{item.desc}</p>
              <span className="text-sm text-indigo-400">
                {item.level}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-4">
            Not sure which instrument to choose?
          </h2>
          <p className="text-gray-400 mb-6">
            Book a free trial class and let us guide you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold"
          >
            Book Free Trial
          </a>
        </div>

      </div>
    </div>
  )
}
