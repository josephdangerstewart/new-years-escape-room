import styled from 'styled-components';

interface PicturePuzzleProps {
	onSolved: () => void;
}

export function PicturePuzzle({ onSolved }: PicturePuzzleProps) {
	return (
		<Container onClick={() => onSolved()}>
			<Grid>
				<PictureButton>Picture A</PictureButton>
				<PictureButton>Picture B</PictureButton>
				<PictureButton>Picture C</PictureButton>
				<PictureButton>Picture D</PictureButton>
			</Grid>
			<Label>Quantum Tunneling Engine Configuration: Not Set</Label>
		</Container>
	);
}

const Label = styled.p`
	margin: 0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

const Grid = styled.div`
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 8px;
`;

const PictureButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
