import { ArrowLeft, X } from 'lucide-react';

interface Screen3BrainDumpProps {
  goTo: (screen: string) => void;
  brainDump: string;
  setBrainDump: (text: string) => void;
  targetRole: string;
  setTargetRole: (role: string) => void;
  analyzeWithAI: () => void;
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
}

export default function Screen3BrainDump({
  goTo,
  brainDump,
  setBrainDump,
  targetRole,
  setTargetRole,
  analyzeWithAI,
  errorMessage,
  setErrorMessage,
}: Screen3BrainDumpProps) {
  const MIN_CHARS = 50;
  const charCount = brainDump.length;
  const isValid = charCount >= MIN_CHARS;

  const handleAnalyze = () => {
    if (isValid) {
      analyzeWithAI();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-6 py-12">
      <div className="w-full max-w-[680px]">
        {/* Back link */}
        <button
          onClick={() => goTo('pivotReason')}
          className="flex items-center gap-1 text-sm mb-8"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-12">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#D1D1D1' }}
          ></div>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--orange)' }}
          ></div>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#D1D1D1' }}
          ></div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl text-center mb-3" style={{ color: 'var(--text)' }}>
          Tell me about yourself
        </h1>

        {/* Subheadline */}
        <p className="text-base text-center mb-8" style={{ color: 'var(--muted)' }}>
          Your last role, how long you've been away, anything you've done during your break. No CV
          needed — just talk to me.
        </p>

        {/* Error message banner */}
        {errorMessage && (
          <div
            className="rounded-xl p-4 mb-6 flex items-start gap-3"
            style={{ backgroundColor: '#FEF3F0', border: '1px solid var(--orange)' }}
          >
            <p className="flex-1 text-sm" style={{ color: 'var(--text)' }}>
              {errorMessage}
            </p>
            <button onClick={() => setErrorMessage(null)} className="flex-shrink-0">
              <X size={18} style={{ color: 'var(--orange)' }} />
            </button>
          </div>
        )}

        {/* Brain dump textarea */}
        <textarea
          value={brainDump}
          onChange={(e) => setBrainDump(e.target.value)}
          placeholder="For example: I was a Senior Marketing Manager for 8 years before taking 4 years out to raise my children. During that time I organised a large community fundraiser, managed our household budget and did some volunteer comms work for my daughter's school..."
          className="w-full min-h-[180px] rounded-xl p-4 text-base resize-y focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontFamily: 'DM Sans, sans-serif',
          }}
        />

        {/* Character counter */}
        <div
          className="text-xs text-right mb-6"
          style={{ color: isValid ? 'var(--orange)' : 'var(--muted)' }}
        >
          {charCount} / {MIN_CHARS} minimum
        </div>

        {/* Target role input */}
        <div className="mb-8">
          <label
            className="block text-sm mb-2"
            style={{ color: 'var(--text)' }}
            htmlFor="targetRole"
          >
            What kind of role are you hoping to return to? (optional)
          </label>
          <input
            id="targetRole"
            type="text"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="e.g., Marketing Manager, Project Coordinator..."
            className="w-full rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'DM Sans, sans-serif',
            }}
          />
        </div>

        {/* Analyze button */}
        <div className="flex justify-center">
          <button onClick={handleAnalyze} disabled={!isValid} className="btn-primary">
            Analyse my pivot
          </button>
        </div>
      </div>
    </div>
  );
}
