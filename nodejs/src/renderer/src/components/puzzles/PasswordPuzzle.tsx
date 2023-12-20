import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const password = 'JUICE';

interface PasswordPuzzleProps {
	onSolved: () => void;
}

export function PasswordPuzzle({ onSolved }: PasswordPuzzleProps) {
	const [input, setInput] = useState('');
	const stableOnSolved = useRef(onSolved);
	stableOnSolved.current = onSolved;
	const isSolved = input.toLowerCase() === password.toLowerCase();

	useEffect(() => {
		if (isSolved) {
			stableOnSolved.current();
		}
	}, [isSolved]);

	if (isSolved) {
		return (
			<Container>
				<p>Password accepted!</p>
			</Container>
		);
	}

	return (
		<Container>
			<label>Master password</label>
			<input value={input} onChange={(event) => setInput(event.target.value)} />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
