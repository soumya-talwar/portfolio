import lexicon from "../data/lexicon.json";

export default async function ComplimentCheck(compliment) {
	const errors = [
		"You call that a compliment? Try again.",
		"Weak. Next.",
		"Mm, I've heard nicer. Try again.",
	];
	const result = compliment
		.split(/\W+/)
		.reduce((sum, word) => sum + (Number(lexicon[word.toLowerCase()]) || 0), 0);
	if (result < 3)
		return {
			status: false,
			error: errors[Math.floor(Math.random() * errors.length)],
		};
	else return { status: true };
}
