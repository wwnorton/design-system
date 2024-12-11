import { AnswerChoiceIdentifierType } from './types';

const RomanLiterals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];

export function resolveLabelType(identifierType: AnswerChoiceIdentifierType, index: number) {
	switch (identifierType) {
		case 'lower-alpha':
			return String.fromCharCode(97 + index);
		case 'upper-alpha':
			return String.fromCharCode(65 + index);
		case 'lower-roman':
			return RomanLiterals[index];
		case 'upper-roman':
			return RomanLiterals[index].toUpperCase();
		case 'decimal':
			return String(index + 1);
		default:
			throw new Error(`Invalid label type: ${identifierType}`);
	}
}
