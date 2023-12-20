import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface PowerPuzzleProps {
	onSolved: () => void;
}

export function PowerPuzzle({ onSolved }: PowerPuzzleProps) {
	const [isSolved, setIsSolved] = useState(false);
	const stableOnSolved = useRef(onSolved);
	stableOnSolved.current = onSolved;

	useEffect(() => {
		const removeListener = window.electron.ipcRenderer.on(
			'power-puzzle-solved',
			() => {
				setIsSolved(true);
				stableOnSolved.current();
			},
		);

		return () => {
			removeListener();
		};
	}, []);

	return (
		<Container onClick={() => onSolved()}>
			<ProgressBar isSolved={isSolved} />
			<Label>Power Plant: {isSolved ? '100%' : '0%'}</Label>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: 8px;
	align-items: center;
`;

const ProgressBar = styled.div<{ isSolved: boolean }>`
	flex-grow: 1;
	border: solid 1px black;
	width: 200px;
	background-color: ${({ isSolved }) => (isSolved ? 'green' : 'transparent')};
`;

const Label = styled.p`
	margin: 0;
`;
