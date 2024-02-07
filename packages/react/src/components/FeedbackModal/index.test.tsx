import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {
	cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { FeedbackModal } from '.';

test.afterEach.always(cleanup);

test('correct', (t) => {
	render(
		<FeedbackModal isOpen choiceText="Answer Choice 3" isCorrect choiceLabel="C">
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</FeedbackModal>,
	);

	const dialog = screen.queryByRole('dialog', { name: /correct/i });
	t.not(dialog, null);
});

test('incorrect', (t) => {
	render(
		<FeedbackModal isOpen choiceText="Answer Choice 3" choiceLabel="C">
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</FeedbackModal>,
	);

	const dialog = screen.queryByRole('dialog', { name: /incorrect/i });
	t.not(dialog, null);
});

test('on close button', (t) => {
	const closeMock = sinon.mock();

	render(
		<FeedbackModal isOpen choiceText="Answer Choice 3" isCorrect choiceLabel="C" onRequestClose={closeMock}>
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</FeedbackModal>,
	);

	const closeButtons = screen.queryAllByRole('button', { name: /close/i });
	t.is(closeButtons.length, 2);

	fireEvent.click(closeButtons[1]);

	t.true(
		closeMock.calledOnce,
	);
});
