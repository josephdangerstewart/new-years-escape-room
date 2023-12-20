export function shuffle<T>(array: readonly T[]): T[] {
	const mutableArray = [...array];
	let currentIndex = mutableArray.length;
	let randomIndex: number;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[mutableArray[currentIndex], mutableArray[randomIndex]] = [
			mutableArray[randomIndex],
			mutableArray[currentIndex],
		];
	}

	return mutableArray;
}
