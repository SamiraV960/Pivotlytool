interface Screen3BrainDumpProps {
  goTo: (screen: string) => void;
}

export default function Screen3BrainDump({ goTo }: Screen3BrainDumpProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Brain Dump</h1>
      <button
        onClick={() => goTo('loading')}
        className="px-6 py-3 bg-[var(--orange)] text-white rounded-full"
      >
        Next
      </button>
    </div>
  );
}
