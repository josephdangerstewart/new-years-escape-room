import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { PowerPuzzle } from './puzzles/PowerPuzzle';
import { PicturePuzzle } from './puzzles/PicturePuzzle';
import { PasswordPuzzle } from './puzzles/PasswordPuzzle';

interface PuzzleScreenProps {
	onContinue: () => void;
}

interface PuzzleState {
	power: boolean;
	picture: boolean;
	password: boolean;
}

export function PuzzleScreen({ onContinue }: PuzzleScreenProps) {
	const [puzzleState, setPuzzleState] = useState<PuzzleState>({
		power: false,
		picture: false,
		password: false,
	});

	const canContinue =
		puzzleState.power && puzzleState.picture && puzzleState.password;

	const solvePuzzle = useCallback(
		(puzzle: keyof PuzzleState) =>
			setPuzzleState((prev) => ({ ...prev, [puzzle]: true })),
		[],
	);

	return (
		<Container>
			<GridCell area="title">
				<Title>Tinsel Temporalizer Reboot Setup</Title>
			</GridCell>
			<GridCell area="power">
				<PowerPuzzle onSolved={() => solvePuzzle('power')} />
			</GridCell>
			<GridCell area="picture">
				<PicturePuzzle onSolved={() => solvePuzzle('picture')} />
			</GridCell>
			<GridCell area="password">
				<PasswordPuzzle onSolved={() => solvePuzzle('password')} />
			</GridCell>
			<GridCell area="continue">
				<ContinueButtonContainer>
					<ContinueButton disabled={!canContinue} onClick={() => onContinue()}>
						Reboot
					</ContinueButton>
				</ContinueButtonContainer>
			</GridCell>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-areas:
		'title title'
		'power picture'
		'power password'
		'continue continue';
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 2fr 1fr auto;
	gap: 8px;
`;

const GridCell = styled.div<{ area: string }>`
	grid-area: ${({ area }) => area};
`;

const Title = styled.h1`
	text-align: center;
	font-size: 32px;
`;

const ContinueButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 8px;
`;

const ContinueButton = styled.button`
	font-size: 20px;
`;
