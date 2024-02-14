import React from 'react';
import classNames from 'classnames';
import { ResponseIndicatorProps } from './types';
import { Icon } from '../Icon';
import { useId } from '../../utilities';

const BASE_NAME = 'nds-response-indicator';

const styles = {
	icon: `${BASE_NAME}__icon`,
	labelBackground: `${BASE_NAME}__label-background`,
	label: `${BASE_NAME}__label`,
};

export const ResponseIndicator: React.FC<ResponseIndicatorProps> = ({
	variant = 'correct',
	id: idProp,
	label,
	withIcon = true,
	placementIcon = 'left',
}) => {
	const uniqueId = useId();
	const id = idProp || uniqueId;

	const containerClassName = classNames(BASE_NAME, `${BASE_NAME}--${variant}`, {
		[`${BASE_NAME}--${placementIcon}`]: withIcon,
	});

	return (
		<div className={containerClassName}>
			{withIcon
			&& (
				<Icon className={styles.icon} variant={variant === 'correct' ? 'check-circle' : 'cancel'} />
			)}
			<div className={styles.labelBackground}>
				<span
					id={id}
					className={styles.label}
					aria-label={label || variant}
				>
					{label || variant}
				</span>
			</div>
		</div>
	);
};
