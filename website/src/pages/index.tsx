import React from 'react';
import classNames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.scss';
import { Features, FeatureCard } from '../theme/Features';
import { Seagull } from '../theme/Seagull';

// type FeatureProps = {
// 	title: string;
// 	imageUrl?: string;
// 	description?: React.ReactNode;
// }

// const features: FeatureProps[] = [
// 	{
// 		title: 'Inclusive',
// 		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
// 		description: (
// 			<p>
// 				The Norton design system has accessibility in its DNA and was
// 				made to be inclusive of the myriad ways that users interact with
// 				web products.
// 			</p>
// 		),
// 	},
// 	{
// 		title: 'Flexible',
// 		// imageUrl: 'img/undraw_docusaurus_tree.svg',
// 		description: (
// 			<>
// 				Use it out of the box or customize it to your heart&apos;s content.
// 				The Norton design system works for you.
// 			</>
// 		),
// 	},
// 	{
// 		title: 'Modern',
// 		// imageUrl: 'img/undraw_docusaurus_react.svg',
// 		description: (
// 			<>
// 				Built with a forward-thinking and backwards-compatible mindset,
// 				the Norton design system makes use of modern technologies and
// 				techniques for web applications.
// 			</>
// 		),
// 	},
// ];

// const Feature = ({
// 	imageUrl,
// 	title,
// 	description,
// }: FeatureProps) => {
// 	const imgUrl = useBaseUrl(imageUrl);
// 	return (
// 		<div className={clsx('col col--4', styles.feature)}>
// 			{imgUrl && (
// 				<div className="text--center">
// 					<img className={styles.featureImage} src={imgUrl} alt={title} />
// 				</div>
// 			)}
// 			<h3>{title}</h3>
// 			<p>{description}</p>
// 		</div>
// 	);
// };

const Home = (): JSX.Element => {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title={siteConfig.title} description={siteConfig.description}>
			<header className={styles.hero}>
				<div className={styles.hero__container}>
					<h1 className={styles.hero__title}>
						The
						{' '}
						{ siteConfig.title }
					</h1>
					<p className={styles.hero__subtitle}>{ siteConfig.tagline }</p>
					<div className={styles.hero__image}>
						<Seagull />
					</div>
				</div>
			</header>
			<main>
				<section className={classNames('container', styles.section)}>
					<Features basePath="/docs/">
						<FeatureCard title="Foundations" slug="foundations" linkArrow>
							Guidelines for using visual elements and interaction patterns
							with the Norton Design System.
						</FeatureCard>
						<FeatureCard title="Components" slug="components" linkArrow>
							The building blocks for composing applications and content
							with the Norton Design System.
						</FeatureCard>
						<FeatureCard title="Guides" slug="guides" linkArrow>
							Tutorials and examples to help designers, developers,
							and editors learn how get the most out of the
							Norton Design System.
						</FeatureCard>
					</Features>
				</section>
			</main>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default Home;
