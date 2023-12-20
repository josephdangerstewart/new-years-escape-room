import styled from 'styled-components';

interface PictureButtonProps {
	onClick: () => void;
	imageUrl: string;
	isActive?: boolean;
}

export function PictureButton({
	onClick,
	imageUrl,
	isActive,
}: PictureButtonProps) {
	return (
		<Container onClick={onClick}>
			<Image src={imageUrl} />
			<Overlay isActive={isActive} />
		</Container>
	);
}

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	height: 100%;
`;

const Overlay = styled.div<{ isActive?: boolean }>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: slategray;
	opacity: 0;

	${({ isActive }) => isActive && `opacity: 0.5;`}

	&:hover {
		opacity: 0.5;
	}
`;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 0;
`;
