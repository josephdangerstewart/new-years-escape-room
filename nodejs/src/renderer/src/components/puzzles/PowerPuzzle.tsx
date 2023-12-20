import styled from 'styled-components';

interface PowerPuzzleProps {
	onSolved: () => void;
}

export function PowerPuzzle({ onSolved }: PowerPuzzleProps) {
	return (
		<Container onClick={() => onSolved()}>
			<ProgressBar />
			<Label>Power: 0%</Label>
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

const ProgressBar = styled.div`
	flex-grow: 1;
	border: solid 1px black;
	width: 200px;
`;

const Label = styled.p`
	margin: 0;
`;
