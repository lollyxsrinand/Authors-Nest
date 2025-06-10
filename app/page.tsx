import Image from "next/image";
import Icon from "./components/Icon";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-12 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-light tracking-wider mb-4">
              Authors<span className="text-gray-400 font-extralight">.</span>Nest
            </h1>
            <div className="w-24 h-px bg-black mx-auto opacity-30"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto leading-loose font-light animate-fade-in-delay">
            Where stories evolve
          </p>
          
          <div className="flex gap-6 justify-center mt-12 animate-fade-in-delay-2">
            <a 
              href="/signup" 
              className="group px-8 py-3 bg-black text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-lg"
            >
              <span className="group-hover:tracking-widest transition-all duration-300">Start Writing</span>
            </a>
            <a 
              href="/login" 
              className="px-8 py-3 border border-gray-300 text-black text-sm font-medium tracking-wide uppercase hover:border-black transition-all duration-300 hover:scale-105"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light tracking-wide mb-4">Built for Storytellers</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Version Control */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Version Control</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Branch drafts, merge changes, rollback history
              </p>
            </div>

            {/* Collaboration */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Collaborative Writing</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Real-time editing, comments, suggestions
              </p>
            </div>

            {/* AI Assistant */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">AI Assistant</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Summarize, expand, enhance your writing
              </p>
            </div>

            {/* Writing Streaks */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Daily Streaks</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Build consistent writing habits
              </p>
            </div>

            {/* Progress Tracking */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Progress Tracking</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Chapter goals, word counts, timeline
              </p>
            </div>

            {/* Publishing */}
            <div className="group p-8 hover:bg-gray-50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-1 h-12 bg-black mb-6 group-hover:h-16 transition-all duration-500"></div>
              <h3 className="text-lg font-medium mb-3 tracking-wide">Publishing Tools</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Export to Kindle, ePub, cover generator
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Ready to Transform Your Writing?</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
            <p className="text-gray-600 font-light leading-relaxed">
              Join thousands of authors building their stories with modern tools
            </p>
            <div className="pt-8">
              <a 
                href="/signup" 
                className="group inline-block px-12 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-xl"
              >
                <span className="group-hover:tracking-[0.3em] transition-all duration-300">Get Started Free</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs tracking-wider uppercase font-light">
            © 2025 Authors.Nest — Built for storytellers
          </p>
        </div>
      </footer>
    </div>
  );
}