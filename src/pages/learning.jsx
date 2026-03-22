import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaArrowRight, FaTimes, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import SEO from "../components/SEO";
import { CONTACT } from "../components/constant/contact";

// ─── Trinity College London Syllabi ──────────────────────────────────────────
const instruments = [
  {
    name: "Guitar",
    desc: "Acoustic & Electric mastery",
    image: "/gall1.png",
    imageFade: "to-[#ECDEC0]/90",
    imagePosition: "object-center",
    cardBg: "bg-[#ECDEC0]/90 border-[#D4C3A3] hover:border-[#BFAF89]",
    accent: "#8B5E2A",
    board: "Trinity College London — Rock & Pop / Classical Guitar",
    grades: [
      {
        grade: "Initial",
        label: "Initial",
        topics: [
          "3 performance pieces from the Trinity grade book",
          "Technical work: open position chords (A, D, E, Em, G)",
          "Basic strumming & picking patterns",
          "Supporting test: Playback or improvising",
          "Aural awareness: rhythmic echoing"
        ]
      },
      {
        grade: "Grade 1",
        label: "Grade 1",
        topics: [
          "3 pieces across contrasting styles",
          "Scales: C, G, D major (one octave)",
          "Chords: Am, Dm, E7, A7 progressions",
          "Fingerpicking introduction",
          "Sight reading at grade level"
        ]
      },
      {
        grade: "Grade 2",
        label: "Grade 2",
        topics: [
          "3 pieces including one from a set list",
          "Scales: A, E major + A minor (one octave)",
          "Power chords & first position barre chord",
          "Rhythm: dotted notes, ties, syncopation",
          "Improvising test over a simple backing track"
        ]
      },
      {
        grade: "Grade 3",
        label: "Grade 3",
        topics: [
          "3 pieces including folk/blues/classical styles",
          "Scales: two octaves in major & minor keys",
          "Barre chords (F major, B minor)",
          "Pentatonic scale introduction",
          "Lead & rhythm coordination basics"
        ]
      },
      {
        grade: "Grade 4",
        label: "Grade 4",
        topics: [
          "3 pieces spanning 3 style groups",
          "Scales: pentatonic major & minor, chromatic",
          "Travis picking & fingerstyle patterns",
          "Music theory: keys, time signatures, intervals",
          "Sight reading & aural tests at grade level"
        ]
      },
      {
        grade: "Grade 5",
        label: "Grade 5",
        topics: [
          "3 pieces from contrasting eras and styles",
          "Scales: two-octave major, minor, blues scale",
          "Advanced barre chords & CAGED system intro",
          "Improvisation over blues/rock progressions",
          "Musical knowledge supporting test"
        ]
      },
      {
        grade: "Grade 6",
        label: "Grade 6",
        topics: [
          "3 pieces including one classical or jazz work",
          "Scales: three octaves, modes introduction",
          "Advanced fingerpicking & tremolo",
          "Composition or personal arrangement option",
          "Extended sight reading & aural"
        ]
      },
      {
        grade: "Grade 7",
        label: "Grade 7",
        topics: [
          "3 pieces of diploma-preparatory standard",
          "Scales & arpeggios in all positions",
          "Hybrid picking & complex rhythms",
          "Improvisation across multiple styles",
          "Detailed musical knowledge & history"
        ]
      },
      {
        grade: "Grade 8",
        label: "Grade 8",
        topics: [
          "3 virtuosic pieces of advanced repertoire",
          "Full-range technical work in all keys",
          "Interpretation, dynamics & stage presence",
          "Solo performance & ensemble skills",
          "Diploma-level musicianship assessment"
        ]
      }
    ]
  },
  {
    name: "Piano",
    desc: "Classical to Modern Keys",
    image: "/gall6.jpeg",
    imageFade: "to-[#EDE8DF]/98",
    imagePosition: "object-center",
    cardBg: "bg-[#EDE8DF]/90 border-[#C8B89A] hover:border-[#8B6545]",
    accent: "#6B4C2A",
    board: "Trinity College London — Piano 2021–2023 Syllabus",
    grades: [
      {
        grade: "Initial",
        label: "Initial",
        topics: [
          "3 pieces from the Initial grade book",
          "Scales: C & G major, hands separately",
          "Basic hand position, finger independence",
          "Supporting test: sight reading at Initial level",
          "Aural: clapping back rhythmic phrases"
        ]
      },
      {
        grade: "Grade 1",
        label: "Grade 1",
        topics: [
          "3 contrasting pieces (A, B, C groups)",
          "Scales: C, G, D, F major — one octave, hands together",
          "Arpeggios: root position, tonic broken chord",
          "Sight reading & aural awareness",
          "Technical exercises from Trinity book"
        ]
      },
      {
        grade: "Grade 2",
        label: "Grade 2",
        topics: [
          "3 pieces including Baroque, Classical or Contemporary",
          "Scales: A, Bb, Eb major + A, D minor",
          "Contrary motion & legato/staccato contrast",
          "Sight reading with accidentals and dynamics",
          "Improvising or aural supporting test"
        ]
      },
      {
        grade: "Grade 3",
        label: "Grade 3",
        topics: [
          "3 pieces across style groups (duet option available)",
          "All major scales, one octave HS + HT",
          "Harmonic & melodic minor scales",
          "Arpeggios: tonic & dominant 7th",
          "Musical knowledge: notation, terms, rudiments"
        ]
      },
      {
        grade: "Grade 4",
        label: "Grade 4",
        topics: [
          "3 pieces with extended technique",
          "Scales: two octaves, all majors & minors",
          "Chromatic scale from any note",
          "Sight reading: rhythmic & harmonic complexity",
          "Aural: interval recognition & melodic dictation"
        ]
      },
      {
        grade: "Grade 5",
        label: "Grade 5",
        topics: [
          "3 pieces — at least one from classical era",
          "Scales, arpeggios & broken chords: two octaves",
          "Pedal technique (sustain & una corda)",
          "Improvisation option as supporting test",
          "Music theory: keys up to 4 sharps/flats"
        ]
      },
      {
        grade: "Grade 6",
        label: "Grade 6",
        topics: [
          "3 pieces: Baroque, Classical/Romantic & Contemporary",
          "Three-octave scales & arpeggios in all keys",
          "Ornaments: trills, turns, mordents",
          "Sight reading with complex rhythms & keys",
          "Advanced aural: harmonic recognition"
        ]
      },
      {
        grade: "Grade 7",
        label: "Grade 7",
        topics: [
          "3 advanced pieces of contrasting periods",
          "Four-octave scales, double thirds & sixths",
          "Octave playing & voicing in chords",
          "Improvisation or composition option",
          "Diploma-level sight reading & musicianship"
        ]
      },
      {
        grade: "Grade 8",
        label: "Grade 8",
        topics: [
          "3 virtuosic pieces of concert standard",
          "Full technical work — all major, minor, modes",
          "Complex pedalling & tonal control",
          "Extensive musical knowledge assessment",
          "Performance-ready standard — diploma pathway"
        ]
      }
    ]
  },
  {
    name: "Violin",
    desc: "Traditional & Western styles",
    image: "/gall3.png",
    imageFade: "to-orange-50/95",
    imagePosition: "object-center",
    cardBg: "bg-orange-50/90 border-orange-900/30 hover:border-orange-900/60",
    accent: "#7C2D12",
    board: "Trinity College London — Violin Exam Pieces 2025",
    grades: [
      {
        grade: "Initial",
        label: "Initial",
        topics: [
          "3 pieces including one duet (Initial–Grade 3)",
          "Open strings: D, A, E — bowing technique",
          "Left hand: first position notes",
          "Pizzicato & arco contrast",
          "Aural: clapping back simple rhythmic patterns"
        ]
      },
      {
        grade: "Grade 1",
        label: "Grade 1",
        topics: [
          "3 pieces across folk, classical & jazz styles",
          "D major scale & arpeggio, one octave",
          "Basic slurs & ties",
          "Bow distribution — whole, half, quarter bow",
          "Sight reading at Grade 1 level"
        ]
      },
      {
        grade: "Grade 2",
        label: "Grade 2",
        topics: [
          "3 pieces from contrasting style groups",
          "D, G, A major scales — one octave",
          "Basic dynamics: p, mp, mf, f",
          "Staccato & détaché bow strokes",
          "Improvising supporting test option"
        ]
      },
      {
        grade: "Grade 3",
        label: "Grade 3",
        topics: [
          "3 pieces — duet option still available",
          "Two-octave D major & G major scales",
          "D, A minor scales (harmonic & melodic)",
          "Spiccato introduction (off-string bow)",
          "Aural: identify step vs. leap in melody"
        ]
      },
      {
        grade: "Grade 4",
        label: "Grade 4",
        topics: [
          "3 pieces spanning classical, folk & contemporary",
          "Two-octave major & minor scales in 3 keys",
          "Third position introduction",
          "Vibrato: arm, wrist, or finger technique",
          "Sight reading with position shifts"
        ]
      },
      {
        grade: "Grade 5",
        label: "Grade 5",
        topics: [
          "3 pieces of intermediate standard",
          "Scales in 1st–3rd position, all major & minor",
          "Martélé, louré & ricochet bow strokes",
          "Vibrato development — consistent & controlled",
          "Musical knowledge: Italian terms, notation"
        ]
      },
      {
        grade: "Grade 6",
        label: "Grade 6",
        topics: [
          "3 pieces including one 18th/19th century work",
          "Scales up to 5th position",
          "Double stops: thirds, sixths, octaves",
          "Advanced vibrato & tonal colouring",
          "Extended sight reading & complex aural"
        ]
      },
      {
        grade: "Grade 7",
        label: "Grade 7",
        topics: [
          "3 advanced pieces — concerto movement option",
          "Three-octave scales in multiple positions",
          "Chords (3- and 4-note) with clean bow division",
          "Left-hand pizzicato & harmonics introduction",
          "Performance & stage presence assessment"
        ]
      },
      {
        grade: "Grade 8",
        label: "Grade 8",
        topics: [
          "3 virtuosic pieces — one concerto recommended",
          "Full technical work in all keys, high positions",
          "Artificial harmonics & advanced bow techniques",
          "Full musical knowledge & interpretive skill",
          "Diploma-pathway performance standard"
        ]
      }
    ]
  },
  {
    name: "Vocal",
    desc: "Find Your Unique Voice",
    image: "/gall4.png",
    imageFade: "to-slate-100/95",
    imagePosition: "object-center",
    cardBg: "bg-slate-100/90 border-slate-400/40 hover:border-slate-500/70",
    accent: "#374151",
    board: "Trinity College London — Singing 2023 Syllabus",
    grades: [
      {
        grade: "Initial",
        label: "Initial",
        topics: [
          "3 songs from the Initial grade book",
          "Breath support & basic posture",
          "Vowel shaping & clear diction",
          "Head voice & chest voice awareness",
          "Aural: clapping back simple rhythms"
        ]
      },
      {
        grade: "Grade 1",
        label: "Grade 1",
        topics: [
          "3 songs: folk, classical & contemporary styles",
          "Scales: 5-note ascending/descending",
          "Pitch accuracy & breath phrasing",
          "Simple legato & staccato expression",
          "Sight singing at Grade 1 level"
        ]
      },
      {
        grade: "Grade 2",
        label: "Grade 2",
        topics: [
          "3 songs including one in a foreign language (optional)",
          "Scales: one octave major",
          "Dynamic control: p to f",
          "Tone resonance & placement exercises",
          "Improvising or playback supporting test"
        ]
      },
      {
        grade: "Grade 3",
        label: "Grade 3",
        topics: [
          "3 songs — one from classical repertoire",
          "Scales: major & natural minor, one octave",
          "Portamento & interval accuracy",
          "Basic diction in English, Italian or French",
          "Aural: interval recognition up to a 5th"
        ]
      },
      {
        grade: "Grade 4",
        label: "Grade 4",
        topics: [
          "3 songs across 3 style groups",
          "Scales: one octave, major & harmonic minor",
          "Ornamentation: trills & mordents (vocal)",
          "Breathing technique: appoggio support",
          "Sight singing with accidentals"
        ]
      },
      {
        grade: "Grade 5",
        label: "Grade 5",
        topics: [
          "3 songs including one art song or aria",
          "Scales: chromatic, two-octave range",
          "Mixed register & passaggio control",
          "Language: Italian pronunciation & expression",
          "Musical knowledge: form, terms & history"
        ]
      },
      {
        grade: "Grade 6",
        label: "Grade 6",
        topics: [
          "3–4 songs (face-to-face: 3, digital: 4)",
          "Separate high/low voice books",
          "Melisma & advanced ornamentation",
          "Style awareness: operatic vs. musical theatre",
          "Extended aural: harmonic & melodic"
        ]
      },
      {
        grade: "Grade 7",
        label: "Grade 7",
        topics: [
          "4 songs of high performance standard",
          "Interpretation, characterisation & dramatic intent",
          "Vibrato control & tonal colour variation",
          "Recitative style (Grade 7–8 classical)",
          "Advanced sight singing & improvisation"
        ]
      },
      {
        grade: "Grade 8",
        label: "Grade 8",
        topics: [
          "4 songs — concert or operatic standard",
          "Full dynamic, tonal & linguistic control",
          "Performance stagecraft & audience connection",
          "Comprehensive musicianship assessment",
          "Diploma-level vocal performance standard"
        ]
      }
    ]
  }
];

// ─── Card Component ───────────────────────────────────────────────────────────
const InstrumentCard = ({ item, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full group cursor-pointer"
    onClick={() => onClick(item)}
  >
    <div className={`relative overflow-hidden h-full rounded-3xl border transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] hover:-translate-y-2 ${item.cardBg}`}>

      {/* Photo */}
      <div className="relative w-full h-44 md:h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${item.imagePosition || "object-center"}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      {/* Gradient strip */}
      <div className={`h-1.5 w-full bg-linear-to-b ${item.imageFade} opacity-90`} />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2.5">
        <div>
          <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">{item.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
        </div>
        <div className="h-px w-full bg-gray-200/60" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Trinity Syllabus</span>
          <span style={{ color: item.accent }} className="font-bold text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Syllabus Modal ───────────────────────────────────────────────────────────
const SyllabusModal = ({ item, onClose }) => {
  const [activeGrade, setActiveGrade] = useState(0);

  useEffect(() => { setActiveGrade(0); }, [item]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="relative z-10 w-full max-w-xl max-h-[92vh] bg-white rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-40 md:h-48 shrink-0 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">{item.board}</p>
            <h2 className="text-2xl font-black text-white tracking-tight">{item.name} — Trinity Syllabus</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition"
          >
            <FaTimes size={12} />
          </button>
        </div>

        {/* Grade selector */}
        <div className="flex gap-1.5 px-4 pt-3 pb-1 shrink-0 overflow-x-auto scrollbar-none">
          {item.grades.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveGrade(i)}
              className={`shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeGrade === i ? "text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
              style={activeGrade === i ? { backgroundColor: item.accent } : {}}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Topics */}
        <div className="overflow-y-auto flex-1 px-4 py-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGrade}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-3">
                {item.grades[activeGrade].grade} Requirements
              </p>
              <ul className="flex flex-col gap-2">
                {item.grades[activeGrade].topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <FaCheckCircle className="shrink-0 mt-0.5" style={{ color: item.accent }} size={13} />
                    <span className="text-sm text-gray-700 font-medium leading-snug">{topic}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="https://www.trinitycollege.com/qualifications/music/graded-music-exams"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaExternalLinkAlt size={10} />
                View official Trinity College London syllabus
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="p-4 border-t border-gray-100 shrink-0">
          <button
            onClick={() => window.open(CONTACT.whatsapp, "_blank")}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            style={{ backgroundColor: item.accent }}
          >
            Book a Free Trial — {item.name}
            <FaArrowRight size={11} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Learning({ seoDisabled = false }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <PageContainer>
      {!seoDisabled && (
        <SEO
          title="Learning Curriculum"
          description="Explore the Trinity College London music curriculum at Harmonix Musicals. Graded lessons for Guitar, Piano, Violin, and Vocals."
        />
      )}

      {/* Hero */}
      <section className="relative pt-6 pb-8 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-6">
              <FaMusic className="text-purple-500 text-sm" />
              <span className="text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">Trinity College London</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600">
                Musical Path
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We follow the <strong>Trinity College London</strong> graded exam framework — Initial to Grade 8. Tap any instrument to explore the full syllabus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {instruments.map((item, i) => (
              <InstrumentCard key={i} item={item} index={i} onClick={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && <SyllabusModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 md:p-10 text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Not sure which instrument to choose?</h2>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">Book a free consultation session with our experts and find your perfect match.</p>
            <button
              onClick={() => window.open(CONTACT.whatsapp, "_blank")}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-linear-to-b from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Book Free Trial</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
            </button>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}
