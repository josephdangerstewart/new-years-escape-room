import { useEffect, useState } from 'react';
import { BeginningScreen, PuzzleScreen, SuccessScreen } from './components';

function App() {
	const [screen, setScreen] = useState<'beginning' | 'puzzle' | 'success'>(
		'beginning',
	);

	useEffect(() => {
		(window as any).resetPuzzles = () => setScreen('beginning');

		return () => {
			(window as any).resetPuzzles = undefined;
		};
	}, []);

	if (screen === 'beginning') {
		return <BeginningScreen onContinue={() => setScreen('puzzle')} />;
	}

	if (screen === 'puzzle') {
		return <PuzzleScreen onContinue={() => setScreen('success')} />;
	}

	if (screen === 'success') {
		return <SuccessScreen />;
	}

	return null;
}

export default App;
