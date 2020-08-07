import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureProps = {
	title: string;
	imageUrl?: string;
	description?: React.ReactNode;
}

const features: FeatureProps[] = [
	{
		title: 'Inclusive',
		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				The Norton design system has accessibility in its DNA and was
				made to be inclusive of the myriad ways that users interact with
				web products.
			</>
		),
	},
	{
		title: 'Flexible',
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				Use it out of the box or customize it to your heart&apos;s content.
				The Norton design system works for you.
			</>
		),
	},
	{
		title: 'Modern',
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				Built with a forward-thinking and backwards-compatible mindset,
				the Norton design system makes use of modern technologies and
				techniques for web applications.
			</>
		),
	},
];

const Feature = ({
	imageUrl,
	title,
	description,
}: FeatureProps) => {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

const Home = (): JSX.Element => {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.description}
		>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								'nds-button nds-button--outline button--lg',
								styles.getStarted,
							)}
							to={useBaseUrl('docs/')}
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((p) => (
									<Feature key={p.title} {...p} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default Home;
