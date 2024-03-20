import React from "react";
import classNames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import { Features, FeatureCard } from "../components/Features";
import { Seagull } from "../components/Seagull";

const Home = (): JSX.Element => {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title={siteConfig.title} description={siteConfig.description}>
			<header className={styles.hero}>
				<div className={styles.hero__container}>
					<h1 className={styles.hero__title}>The {siteConfig.title}</h1>
					<p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
					<div className={styles.hero__image}>
						<Seagull />
					</div>
				</div>
			</header>
			<main>
				<section className={classNames("container", styles.section)}>
					<Features basePath="/docs/">
						<FeatureCard title="Foundations" slug="foundations" linkArrow>
							Guidelines for using visual elements and interaction patterns with
							the Norton Design System.
						</FeatureCard>
						<FeatureCard title="Components" slug="components" linkArrow>
							The building blocks for composing applications and content with
							the Norton Design System.
						</FeatureCard>
						<FeatureCard title="Guides" slug="guides" linkArrow>
							Tutorials and examples to help designers, developers, and editors
							learn how get the most out of the Norton Design System.
						</FeatureCard>
					</Features>
				</section>
			</main>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default Home;
