import React from 'react';
import classNames from 'classnames';
import { Icon, IconVariant } from '@wwnds/react';
import { useHistory } from 'react-router-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	media?: React.ReactNode;
	icon?: IconVariant;
	basePath?: string;
	slug?: string;
	href?: string;
	tag?: 'div' | 'li';
	columns?: number;
	linkArrow?: boolean;
}

export const FeatureCard = ({
	title,
	media,
	children,
	icon,
	href: hrefProp,
	basePath = '/',
	slug = '',
	tag: Tag = 'div',
	columns = 3,
	linkArrow = false,
}: FeatureCardProps): JSX.Element => {
	const history = useHistory();
	const [feature, setFeature] = React.useState<HTMLElement | null>(null);
	const href = useBaseUrl(hrefProp || (slug) ? basePath + slug : undefined);
	const iconProps = React.useMemo(() => {
		if (typeof icon === 'string') return { variant: icon };
		if (typeof icon === 'object') return { icon };
		return {};
	}, [icon]);

	const cardClickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!href) return;

		// if something is selected in the feature, do nothing.
		const selection = window.getSelection();
		if (feature && selection && selection.toString()
			&& selection.containsNode(feature, true)) return;

		// if the link is clicked, do nothing.
		if (e.nativeEvent.composedPath().some(
			(el) => (el instanceof HTMLElement && el.tagName.toLowerCase() === 'a'),
		)) return;

		// otherwise, navigate to the href
		history.push(href);
	};

	const Title = React.useCallback<React.FunctionComponent<React.HTMLProps<HTMLElement>>>(
		({ children: content }) => {
			if (href) {
				return (
					<Link
						to={href}
						className={styles.feature__link}
					>
						{ content }
					</Link>
				);
			}
			return <span className={styles.feature__link}>{ content }</span>;
		},
		[href],
	);

	return (
		/*
			eslint-disable
			jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-static-element-interactions,
		*/
		<Tag
			className={classNames(styles.feature, styles[`col-${columns}`], { [styles['feature--linked']]: Boolean(href) })}
			onClick={cardClickHandler}
			ref={setFeature}
		>
			{ media }
			<div className={styles.feature__header}>
				{ icon && (
					<span className={styles.feature__icon}>
						<Icon {...iconProps} size={32} />
					</span>
				) }
				<Title>
					{ title }
					{ href && linkArrow && <Icon variant="arrow-right" className={styles.feature__arrow} /> }
				</Title>
			</div>
			<div className={styles.feature__body}>{ children }</div>
		</Tag>
	);
};
interface FeaturesProps extends React.HTMLAttributes<HTMLElement> {
	basePath?: string;
	columns?: number;
}

export const Features = ({
	basePath = '/',
	columns = 3,
	children,
}: FeaturesProps): JSX.Element => (
	<ul className={styles.features}>
		{ React.Children.map(children, (el) => {
			if (React.isValidElement(el)) {
				const { props } = el;
				return (
					<FeatureCard
						columns={columns}
						{...props}
						basePath={basePath}
						tag="li"
					/>
				);
			}
			return null;
		}) }
	</ul>
);
