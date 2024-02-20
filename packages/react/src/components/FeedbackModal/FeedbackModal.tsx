import React from 'react';
import classNames from 'classnames';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { FeedbackModalProps } from './types';
import { css } from './tokens';

/**
 * A modal dialog that provides feedback about the chosen answer after it is submitted.
 *
 * Supplementary Feedback can be passed in `children`.
 */
export const FeedbackModal = ({
	isCorrect, choiceLabel, choiceText, ...modalProps
}: FeedbackModalProps) => {
	const title = isCorrect ? 'Correct' : 'Incorrect';
	const icon = isCorrect ? 'check-circle' : 'cancel';

	return (
		<Modal
			title={title}
			actions={(
				<div>
					<Button variant="outline" onClick={modalProps.onRequestClose}>Close</Button>
				</div>
			)}
			{...modalProps}
		>
			<div className={css.container}>
				<div className={css.iconContainer}>
					<Icon
						className={
							classNames(
								css.icon,
								{ [css.iconCorrect]: isCorrect, [css.iconIncorrect]: !isCorrect },
							)
						}
						variant={icon}
					/>
				</div>
				<div>
					<p className={css.heading}>
						<strong>
							Your answer was
							{' '}
							{' '}
							{title.toLowerCase()}
							:
						</strong>
					</p>
					<p>
						{choiceLabel}
						.
						{' '}
						{choiceText}
					</p>
					{modalProps.children}
				</div>
			</div>
		</Modal>
	);
};
