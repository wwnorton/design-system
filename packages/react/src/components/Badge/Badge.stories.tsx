import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '.';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Disclosure } from '../Disclosure';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	argTypes: {
		dot: {
			control: { type: 'boolean' },
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default = {
	args: {
		children: 9,
		dot: false,
	},
} satisfies Story;

const cartIcon = {
	d: 'M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z',
	source:
		'https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Ashopping_cart%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048',
};

export const AsStatusIndicator = {
	render: (args) => (
		<span>
			<Button variant="outline" aria-label="Cart">
				<Icon icon={cartIcon} />
				<Badge
					{...args}
					dot
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						transform: 'translate(33%, -33%)',
					}}
				/>
				1 item
			</Button>
		</span>
	),
} satisfies Story;

export const InlineWithText = {
	render: (args) => (
		<section style={{ maxWidth: '32rem' }}>
			<h2>
				Example heading <Badge {...args}>Metadata</Badge>
			</h2>
			<p>
				This story demonstrates how the badge component is sized relative to adjacent text. The
				badge found in the heading and at the end of this sentence are slightly smaller than their
				surrounding text.{' '}
				<Badge {...args} color="red">
					15
				</Badge>
			</p>
		</section>
	),
} satisfies Story;

export const ComposedWithDisclosure = {
	render: (args) => (
		<Disclosure
			panel
			markerPosition="left"
			marker="chevron-right"
			markerTransform="rotate-90"
			summary={
				<div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
					Assignment 1<Badge {...args}>9</Badge>
				</div>
			}
		>
			<ol>
				<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
				<li>Animi, minima?</li>
				<li>Beatae obcaecati necessitatibus, atque modi sint dolore.</li>
				<li>Repellendus quod voluptates id ipsa, asperiores eaque.</li>
				<li>Vero, nostrum nesciunt.</li>
				<li>Quasi quas odit impedit accusamus sequi.</li>
				<li>Rem delectus accusantium facere amet cum modi.</li>
				<li>Incidunt, repudiandae corporis.</li>
				<li>Sunt qui quos quidem facere esse.</li>
			</ol>
		</Disclosure>
	),
} satisfies Story;
