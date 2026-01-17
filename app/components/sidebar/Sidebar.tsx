interface SidebarProps {
  chapters: any[];
  onSelectChapter: (chapter: any) => void;
  selectedChapterId?: number | string;
}

export default function Sidebar({ chapters, onSelectChapter, selectedChapterId }: SidebarProps) {
  return (
    <aside
      className="
        hidden md:flex flex-col
        w-80 h-[95vh]
        my-auto ml-4
        rounded-3xl
        bg-[#1f566d]/80
        backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
        overflow-hidden
      "
    >
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-semibold text-white">Chapters</h2>
        <p className="text-sm text-blue-100/60 mt-1">Generated tutorials</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
        {chapters.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-center text-blue-200/40 border-2 border-dashed border-white/5 rounded-2xl mx-2">
            <p className="text-sm">No chapters yet</p>
          </div>
        ) : (
          chapters.map((ch) => {
            const isSelected = selectedChapterId === ch.id;
            return (
              <div
                key={ch.id}
                onClick={() => onSelectChapter(ch)}
                className={`
                  group
                  relative
                  p-4
                  rounded-2xl
                  border
                  cursor-pointer
                  transition-all duration-300 ease-out
                  ${isSelected
                    ? "bg-white/15 border-white/20 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] ring-1 ring-white/10 translate-x-1"
                    : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 hover:translate-x-1"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${isSelected ? "bg-white text-[#1f566d]" : "bg-white/10 text-blue-200/60"}`}>
                    Chapter {ch.id}
                  </span>
                </div>
                <h3 className={`font-medium text-sm leading-snug transition-colors ${isSelected ? "text-white" : "text-blue-100/80 group-hover:text-white"}`}>
                  {ch.title}
                </h3>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
