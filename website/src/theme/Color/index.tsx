import React from 'react';
import colorable from 'colorable';
import classNames from 'classnames';
import { Icon } from '@wwnds/react';
import styles from './styles.module.scss';

const RGBToHex = (rgbString: string) => {
	const [red, green, blue] = rgbString.replace(/[()rgb]/g, '').split(/\s+/g);
	let r = parseInt(red, 10).toString(16);
	let g = parseInt(green, 10).toString(16);
	let b = parseInt(blue, 10).toString(16);

	if (r.length === 1) { r = `0${r}`; }
	if (g.length === 1) { g = `0${g}`; }
	if (b.length === 1) { b = `0${b}`; }

	return `#${r}${g}${b}`;
};

type ColorableA11y = {
	aa: boolean;
	aaLarge: boolean;
	aaa: boolean;
	aaaLarge: boolean;
}

const getHighestA11y = (obj?: ColorableA11y): string | undefined => {
	if (!obj) return undefined;
	const {
		aa, aaLarge, aaa,
	} = obj;
	if (aaa) return 'AAA';
	// if (aaaLarge) return 'AAA Large';
	if (aa) return 'AA';
	if (aaLarge) return 'AA Large';
	return undefined;
};

type WCAG = { hex: string; level?: string; ratio: number; }

type SwatchProps = { color: string; textLight?: string; textDark?: string; }

export const Swatch = ({ color, textLight, textDark }: SwatchProps): JSX.Element => {
	const [hex, setHex] = React.useState<string>();
	const [wcagLight, setLight] = React.useState<WCAG>();
	const [wcagDark, setDark] = React.useState<WCAG>();
	const [swatch, setSwatch] = React.useState<HTMLDivElement | null>(null);
	const [textColor, setTextColor] = React.useState<string>('');

	const name = React.useMemo(
		() => color.replace('var(--', '').replace(')', '').replace('nds-', ''),
		[color],
	);

	React.useLayoutEffect(() => {
		if (swatch) {
			const bg = window.getComputedStyle(swatch).backgroundColor;
			const hexStr = RGBToHex(bg);
			setHex(hexStr);
			const c = colorable({
				backgroundColor: hexStr,
				textLight,
				textDark,
			}, { compact: true, threshold: 0 });
			const [{ combinations }] = c;
			const [light, dark] = combinations;
			setTextColor((light.contrast > dark.contrast) ? 'var(--nds-white)' : 'var(--nds-black)');
			setLight({
				level: getHighestA11y(light.accessibility),
				ratio: light.contrast,
				hex: light.hex,
			});
			setDark({
				level: getHighestA11y(dark.accessibility),
				ratio: dark.contrast,
				hex: dark.hex,
			});
		}
	}, [swatch, textLight, textDark]);

	return (
		<tr
			id={`color-${name}`}
			ref={setSwatch}
			className={styles.grade}
			style={{ '--text-color': textColor, backgroundColor: color }}
		>
			<td className={styles.name}>{ name }</td>
			<td className={styles.hex}>{ hex }</td>
			{ [wcagLight, wcagDark].map((wcag, i) => {
				if (!wcag) return null;
				const { ratio, level } = wcag;
				const usable = ratio >= 3;
				const classes = classNames(
					styles['color-use'],
					(usable) ? styles['color-use--success'] : styles['color-use--error'],
				);
				const href = `https://whocanuse.com/?b=${hex.replace('#', '')}&c=${(i === 0) ? 'ffffff' : '000000'}`;
				return (
					<td
						className={styles[(i === 0) ? 'col-light' : 'col-dark']}
						key={ratio}
					>
						<a
							className={styles.wcag}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className={classes}>
								<Icon variant={(usable) ? 'check' : 'close'} />
							</span>
							{ ratio.toFixed(2) }
							{ level && ` (WCAG ${level})` }
						</a>
					</td>
				);
			})}
		</tr>
	);
};

export const ColorFamily = (
	{ name, textLight, textDark }: { name: string; textLight?: string; textDark?: string; },
): JSX.Element => (
	<>
		{
			Array.from(Array(10).keys()).map((n) => {
				const token = `var(--nds-${name}-${(n + 1) * 10})`;
				return (
					<Swatch
						color={token}
						textLight={textLight}
						textDark={textDark}
						key={token}
					/>
				);
			})
		}
	</>
);

export const AllFamilies = (): JSX.Element => {
	const [header, setHeader] = React.useState<HTMLElement | null>(null);
	const [stuckHeader, setStuckHeader] = React.useState(false);

	const stickyObserver = React.useMemo(() => new IntersectionObserver(([e]) => {
		if (e.target === header) {
			setStuckHeader(e.intersectionRatio < 1);
		}
	}, { threshold: [1], rootMargin: '60px 0px 0px 0px' }), [header]);

	React.useEffect(() => {
		if (header) stickyObserver.observe(header);

		return () => {
			if (header) stickyObserver.unobserve(header);
		};
	}, [header, stickyObserver]);

	const headerClass = React.useMemo(
		() => classNames({ [styles.stuck]: stuckHeader }),
		[stuckHeader],
	);

	return (
		<table className={styles.colors}>
			<thead ref={setHeader}>
				<tr>
					<th className={headerClass}>Token name</th>
					<th className={headerClass}>Hex value</th>
					<th className={headerClass}>Contrast ratio against white</th>
					<th className={headerClass}>Contrast ratio against black</th>
				</tr>
			</thead>
			<tbody>
				{ [
					'red',
					'yellow',
					'green',
					'teal',
					'cyan',
					'blue',
					'purple',
					'navy',
					'gray',
				].map((color) => (
					<ColorFamily
						key={color}
						name={color}
						textLight='#fff'
						textDark='#000'
					/>
				)) }
			</tbody>
		</table>
	);
};

export const ColorChip = (
	{ children, color }: { children: string; color?: string; },
): JSX.Element => {
	const colorValue = React.useMemo(() => {
		if (color) return color;
		if (['#', 'rgb'].some((v) => children.startsWith(v))) return children;
		const token = (children.startsWith('nds')) ? children : `nds-${children}`;
		return `var(--${token})`;
	}, [children, color]);

	return (
		<code className='no-break'>
			<span className='color-chip'>
				<span style={{ backgroundColor: colorValue }} />
			</span>
			{ children }
		</code>
	);
};
