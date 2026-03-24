interface Screen5ResultsProps {
  goTo: (screen: string) => void;
}

export default function Screen5Results({ goTo }: Screen5ResultsProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Results</h1>
      <button
        onClick={() => goTo('error')}
        className="px-6 py-3 bg-[var(--orange)] text-white rounded-full"
      >
        Next
      </button>
    </div>
  );
}
