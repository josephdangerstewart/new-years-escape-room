interface PuzzleScreenProps {
	onContinue: () => void;
}

export function PuzzleScreen({ onContinue }: PuzzleScreenProps) {
	return <p onClick={() => onContinue()}>I am the puzzle screen</p>;
}
