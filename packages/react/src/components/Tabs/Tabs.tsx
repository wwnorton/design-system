import React from 'react';
import {
	TabsProps, ControlledTabsProps, UncontrolledTabsProps,
} from './types';
import { TabsContext, useInitControlledTabsState, useInitUncontrolledTabsState } from './context';

function isControlled(props: TabsProps): props is ControlledTabsProps {
	return 'selectedIndex' in props;
}

const ControlledTabs = React.forwardRef<HTMLDivElement, ControlledTabsProps>(({
	children,
	...rest
}, ref) => {
	const state = useInitControlledTabsState(rest);

	return (
		<TabsContext.Provider value={state}>
			<div ref={ref}>
				{children}
			</div>
		</TabsContext.Provider>
	);
});

const UncontrolledTabs = React.forwardRef<HTMLDivElement, UncontrolledTabsProps>(({
	children,
	...rest
}, ref) => {
	const state = useInitUncontrolledTabsState(rest);

	return (
		<TabsContext.Provider value={state}>
			<div ref={ref}>
				{children}
			</div>
		</TabsContext.Provider>
	);
});

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
	if (isControlled(props)) {
		return <ControlledTabs {...props} ref={ref} />;
	}

	return <UncontrolledTabs {...props} ref={ref} />;
});
