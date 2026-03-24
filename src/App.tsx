import { useState } from 'react';
import Screen1Landing from './screens/Screen1Landing';
import Screen2PivotReason from './screens/Screen2PivotReason';
import Screen3BrainDump from './screens/Screen3BrainDump';
import Screen4Loading from './screens/Screen4Loading';
import Screen5Results from './screens/Screen5Results';
import Screen6Error from './screens/Screen6Error';

type Screen = 'landing' | 'pivotReason' | 'brainDump' | 'loading' | 'results' | 'error';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [pivotReason, setPivotReason] = useState<string | null>(null);
  const [brainDump, setBrainDump] = useState<string>('');
  const [targetRole, setTargetRole] = useState<string>('');
  const [aiResult, setAiResult] = useState<object | null>(null);

  const goTo = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Screen1Landing goTo={goTo} />;
      case 'pivotReason':
        return (
          <Screen2PivotReason
            goTo={goTo}
            pivotReason={pivotReason}
            setPivotReason={setPivotReason}
          />
        );
      case 'brainDump':
        return (
          <Screen3BrainDump
            goTo={goTo}
            brainDump={brainDump}
            setBrainDump={setBrainDump}
            targetRole={targetRole}
            setTargetRole={setTargetRole}
          />
        );
      case 'loading':
        return <Screen4Loading goTo={goTo} />;
      case 'results':
        return <Screen5Results goTo={goTo} />;
      case 'error':
        return <Screen6Error goTo={goTo} />;
      default:
        return <Screen1Landing goTo={goTo} />;
    }
  };

  return <div>{renderScreen()}</div>;
}

export default App;
