import React from 'react';

type PropsTableProps = {
	from: typeof React.Component;
}

export const PropsTable = ({ from: component }: PropsTableProps): JSX.Element => {
	console.log(component);
	return (
		<table />
	);
};
