export default function Home() {
  return (
    <main className="font-geistSans min-h-screen bg-gradient-to-b from-[#fafafa] to-[#f0f4ff] px-6 py-20 flex flex-col items-center">
      
      <header className="text-center max-w-2xl mb-20">
        <h1 className="text-6xl font-extrabold tracking-tight text-[#1e2a38] drop-shadow-sm">
          Authors <span className="text-indigo-500">Nest</span>
        </h1>
        <p className="text-lg text-[#667085] mt-4 font-light">
          A git-inspired writing tool where authors build stories, explore alternate
          timelines, and write together beautifully.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
        
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-300 hover:-translate-y-1">
          <div className="text-5xl mb-4 group-hover:scale-110">🗂️</div>
          <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Version Control</h2>
          <p className="text-[#6b7280] leading-relaxed">
            Track edits, branch storylines, and manage versions like a pro.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-300 hover:-translate-y-1">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔀</div>
          <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Alternate Story Paths</h2>
          <p className="text-[#6b7280] leading-relaxed">
            Explore unlimited “what if” scenarios through powerful branching.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-300 hover:-translate-y-1">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
          <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Collaboration</h2>
          <p className="text-[#6b7280] leading-relaxed">
            Write together in real-time, merge ideas, and stay in sync.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-300 hover:-translate-y-1">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
          <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Rich Text Editing</h2>
          <p className="text-[#6b7280] leading-relaxed">
            Smooth, powerful editor with formatting that just *feels* right.
          </p>
        </div>

      </section>
    </main>
  );
}
