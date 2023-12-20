import styled from 'styled-components';

interface BeginningScreenProps {
	onContinue: () => void;
}

export function BeginningScreen({ onContinue }: BeginningScreenProps) {
	return (
		<Container>
			<Header>FATAL ERROR: Fail safe mode activated</Header>

			<RebootButton onClick={() => onContinue()}>
				Reboot Tinsel Temporalizer
			</RebootButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
`;

const Header = styled.h1`
	color: red;
	font-size: 42px;
`;

const RebootButton = styled.button`
	border: none;
	margin: 0;
	width: auto;
	overflow: visible;
	background-color: lime;
	padding: 20px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 20px;

	line-height: normal;

	&:hover {
		background-color: green;
	}
`;
