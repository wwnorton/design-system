import React from 'react';
import classNames from 'classnames';
import { Icon, IconVariant } from '@wwnds/react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	img?: string;
	icon?: IconVariant;
	basePath?: string;
	slug?: string;
	href?: string;
	tag?: 'div' | 'li';
	columns?: number;
}

export const FeatureCard = ({
	title,
	children,
	icon,
	href: hrefProp,
	basePath = '/',
	slug = '',
	tag: Tag = 'div',
	columns = 3,
}: FeatureCardProps): JSX.Element => {
	const [feature, setFeature] = React.useState<HTMLElement | null>(null);
	const [link, setLink] = React.useState<HTMLAnchorElement | null>(null);
	const href = useBaseUrl(hrefProp || (slug) ? basePath + slug : null);

	const cardClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!href) return;

		// if something is selected in the feature, do nothing.
		const selection = window.getSelection();
		if (feature && selection && selection.toString()
			&& selection.containsNode(feature, true)) return;

		// if the link is clicked, do nothing.
		if (link && e.nativeEvent.composedPath().includes(link)) return;

		// otherwise, navigate to the href
		window.location.href = href;
	};

	return (
		/*
			eslint-disable
			jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-static-element-interactions,
		*/
		<Tag
			className={classNames(styles.feature, styles[`col-${columns}`])}
			onClick={cardClickHandler}
			ref={setFeature}
		>
			<div className={styles.feature__header}>
				{ icon && (
					<span className={styles.feature__icon}>
						<Icon variant={icon} size={32} />
					</span>
				) }
				<a
					ref={setLink}
					href={href}
					className={styles.feature__link}
				>
					{ title }
					{/* <Icon variant="arrow-right" className={styles.feature__arrow} /> */}
				</a>
			</div>
			<div className={styles.feature__body}>{ children }</div>
		</Tag>
	);
};

export const FeatureImage = ({ src, alt }: React.HTMLAttributes<HTMLImageElement>): JSX.Element => {
	if (src) return <img className={styles.feature__image} src={src} alt={alt} />;
	return (
		<div className={styles.feature__tk}>
			<abbr title="Image to come">TK</abbr>
		</div>
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
