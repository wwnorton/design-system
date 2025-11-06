import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BaseTableCaption } from './BaseTableCaption';

test.afterEach.always(cleanup);

test('renders caption when captionContent is provided', (t) => {
	render(<BaseTableCaption captionContent="Table caption" />);
	const caption = screen.getByText('Table caption');
	t.truthy(caption);
	t.is(caption.tagName, 'CAPTION');
});

test('renders nothing when no captionContent is provided', (t) => {
	render(<BaseTableCaption />);
	const caption = screen.queryByText(/./); // any text shouldn't exist
	t.is(caption, null);
});

test('applies custom className to caption', (t) => {
	render(<BaseTableCaption captionContent="Caption" captionClassName="custom-class" />);
	const caption = screen.getByText('Caption');
	t.true(caption.classList.contains('custom-class'));
});

test('adds sr-only class when captionIsVisuallyHidden is true', (t) => {
	render(<BaseTableCaption captionContent="Hidden caption" captionIsVisuallyHidden />);
	const caption = screen.getByText('Hidden caption');
	t.true(caption.classList.contains('nds-sr-only'));
});

test('accepts number as captionContent', (t) => {
	render(<BaseTableCaption captionContent={123} />);
	const caption = screen.getByText('123');
	t.truthy(caption);
	t.is(caption.tagName, 'CAPTION');
});

test('accepts a React node as captionContent', (t) => {
	render(<BaseTableCaption captionContent={<span data-testid="node">Node</span>} />);
	const node = screen.getByTestId('node');
	t.truthy(node);
	t.is(node.tagName, 'SPAN');
});
