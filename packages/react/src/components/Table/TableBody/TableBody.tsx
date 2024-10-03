import React from 'react';
import { TableBodyProps } from '../types';

export const TableBody = (props: TableBodyProps) => {
	// const [_, setTrigger] = useState(0);
	//
	// useEffect(() => {
	// 	setInterval(() => {
	// 		setTrigger((p) => p + 1);
	// 	}, 5_000);
	// }, []);
	//
	// useEffect(() => {
	// 	const children = React.Children.toArray(props.children);
	// 	const result = [3, 0, 2, 6, 5, 4, 1].map((i) => {
	// 		return children[i]
	// 	})
	// 	console.log('UPDATE', React.Children.toArray(props.children));
	// });

	return <tbody {...props} />;
};
