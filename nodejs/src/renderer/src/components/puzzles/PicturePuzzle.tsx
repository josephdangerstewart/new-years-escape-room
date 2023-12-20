import styled from 'styled-components';
import { PictureButton } from './PictureButton';
import { useCallback, useState } from 'react';
import { shuffle } from '@renderer/utility/shuffle';

const solution = ['lego', 'snowglobe', 'train', 'skateboard'] as const;

const displayOrder = shuffle(solution);

interface PicturePuzzleProps {
	onSolved: () => void;
}

export function PicturePuzzle({ onSolved }: PicturePuzzleProps) {
	const [selection, setSelection] = useState<string[]>([]);

	const selectImage = useCallback((item: string) => {
		setSelection((previous) => {
			if (previous.includes(item)) {
				return previous;
			}

			const next = [...previous, item];

			if (next.length === 4) {
				if (isSolved(next)) {
					return next;
				} else {
					// Come up with some incentive to prevent brute force
				}
				return [];
			}

			return next;
		});
	}, []);

	return (
		<Container onClick={() => onSolved()}>
			<Grid>
				{displayOrder.map((item) => (
					<PictureButton
						key={item}
						imageUrl={`/src/assets/${item}.jpg`}
						onClick={() => selectImage(item)}
						isActive={selection.includes(item)}
					/>
				))}
			</Grid>
			<Label>
				Christmas Memory Configuration:{' '}
				{isSolved(selection) ? 'Set' : 'Not Set'}
			</Label>
			<Label>(Select memories from most to least recent)</Label>
		</Container>
	);
}

function isSolved(input: string[]) {
	return (
		input.length === solution.length &&
		input.every((item, index) => item === solution[index])
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
	min-height: 0;
	overflow: hidden;
`;

const Grid = styled.div`
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 8px;
	min-height: 0;
	overflow: hidden;
`;
