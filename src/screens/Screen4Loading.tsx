interface Screen4LoadingProps {
  goTo: (screen: string) => void;
}

export default function Screen4Loading({ goTo }: Screen4LoadingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Loading</h1>
      <button
        onClick={() => goTo('results')}
        className="px-6 py-3 bg-[var(--orange)] text-white rounded-full"
      >
        Next
      </button>
    </div>
  );
}
