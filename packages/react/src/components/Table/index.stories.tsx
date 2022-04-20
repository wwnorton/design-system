import React from 'react';
import {
	Table,
	TableRow,
	TableHeader,
	TableCell,
	DataTable,
} from '.';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { SystemColors } from '../../utilities/color';

export default {
	title: 'Table',
	component: Table,
	argTypes: {
		border: { control: 'boolean' },
		stickyHeader: { control: 'boolean' },
		variant: {
			options: ['solid', 'outline', 'ghost'],
			control: { type: 'radio' },
		},
		sort: {
			options: ['asc', 'desc', 'unsorted'],
			control: { type: 'radio' },
		},
	},
};
const detailView = () => <Button variant="solid">Click for info</Button>;

const DefaultStory = ({ ...args }) => (
	<Table {...args} sort={args.sort}>
		<TableHeader variant={args.variant}>
			<TableCell>ID</TableCell>
			<TableCell>First Name </TableCell>
			<TableCell value="Last Name" />
			<TableCell>Department</TableCell>
		</TableHeader>
		<TableRow>
			<TableCell>1</TableCell>
			<TableCell>Nancy</TableCell>
			<TableCell>Jackson</TableCell>
			<TableCell value="Development" />
		</TableRow>
		<TableRow>
			<TableCell>2</TableCell>
			<TableCell value="Jack" />
			<TableCell>Ryan</TableCell>
			<TableCell value="Analyst" />
		</TableRow>
		<TableRow>
			<TableCell>3</TableCell>
			<TableCell value="Sergio" />
			<TableCell>Marquina</TableCell>
			<TableCell value="Professor" />
		</TableRow>
		<TableRow>
			<TableCell>4</TableCell>
			<TableCell>Jack </TableCell>
			<TableCell>Reacher</TableCell>
			<TableCell value="Investigation" />
		</TableRow>
		<TableRow>
			<TableCell>5</TableCell>
			<TableCell>Arturo</TableCell>
			<TableCell>Roman</TableCell>
			<TableCell value="Finance" />
		</TableRow>
		<TableRow>
			<TableCell>6</TableCell>
			<TableCell>Pat</TableCell>
			<TableCell>Morita</TableCell>
			<TableCell value="Management" />
		</TableRow>
		<TableRow>
			<TableCell>7</TableCell>
			<TableCell>Donnie</TableCell>
			<TableCell>Yen</TableCell>
			<TableCell value="Investigation" />
		</TableRow>
	</Table>
);

export const Default = DefaultStory.bind({});
Default.args = {
	border: true,
	stickyHeader: false,
	variant: 'solid',
};

export const Composition = ({ ...args }) => {
	const employees = [
		{
			FirstName: 'Marissa',
			LastName: 'Keep',
		},
		{
			FirstName: 'Andrew',
			LastName: 'Arnold',
		},
	];

	return (
		<Table width={60}>
			<TableHeader variant={args.variant}>
				<TableCell>First Name</TableCell>
				<TableCell>Last Name</TableCell>
				<TableCell>Info</TableCell>
			</TableHeader>
			{employees.map((employee) => (
				<TableRow>
					<TableCell>{employee.FirstName}</TableCell>
					<TableCell>{employee.LastName}</TableCell>
					<TableCell cellFormatter={detailView} />
				</TableRow>
			))}
		</Table>
	);
};

export const DefaultAlignments = () => {
	const employees = [
		{
			FirstName: 'Marissa',
			LastName: 'Keep',
			ID: 10000,
			DoB: '01/23/1980',
		},
		{
			FirstName: 'Andrew',
			LastName: 'Arnold',
			ID: 10001,
			DoB: '08/15/1986',
		},
	];

	return (
		<Table width={70}>
			<TableHeader>
				<TableCell type="Boolean">Select</TableCell>
				<TableCell type="Number">Employee ID</TableCell>
				<TableCell>First Name</TableCell>
				<TableCell>Last Name</TableCell>
				<TableCell>Date of Birth</TableCell>
				<TableCell>Info</TableCell>
			</TableHeader>
			{employees.map((employee) => (
				<TableRow>
					<TableCell type="Boolean" />
					<TableCell type="Number">{employee.ID}</TableCell>
					<TableCell>{employee.FirstName}</TableCell>
					<TableCell>{employee.LastName}</TableCell>
					<TableCell>{employee.DoB}</TableCell>
					<TableCell cellFormatter={detailView} />
				</TableRow>
			))}
		</Table>
	);
};

export const customTable = () => {
	type formatTypes ={
		color: SystemColors,
		format: string,
	}

	const formatCollection: Array<formatTypes[]> = [[{
		color:	'blue',
		format:	'Hardcover',
	}], [{
		color:	'red',
		format:	'Ebook & Learning Tools',
	},
	{
		color:	'navy',
		format:	'Loose Leaf',
	},
	{
		color:	'green',
		format:	'Paperback',
	}], [{
		color:	'blue',
		format:	'Hardcover',
	}], [{
		color: 'green',
		format: 'Paperback',
	}], [{
		color: 'green',
		format: 'Paperback',
	}, {
		color: 'blue',
		format: 'Hardcover',
	}], [{
		color: 'green',
		format: 'Paperback',
	}]];

	const bookDetail = (shortDescription:string, description:string) => (
		<div style={{ whiteSpace: 'pre-wrap' }}>
			<span>
				<b>{shortDescription}</b>
			</span>
			<div>{description}</div>
		</div>
	);

	const bookFormats = (props: formatTypes[]): JSX.Element => (
		<>
			{props.map((item) => (
				<div>
					<Tag color={item.color}>{item.format}</Tag>
				</div>
			))}
		</>
	);

	return (
		<Table>
			<TableHeader>
				<TableCell>Book Title</TableCell>
				<TableCell value="Description" />
				<TableCell>Edition</TableCell>
				<TableCell>Format</TableCell>
			</TableHeader>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780393254099">The Motivation Toolkit</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'Renowned Stanford economist David M. Kreps reveals the fundamental principles of employee motivation.',
						'Getting your employees to do their best work has never been easy. But it is a particular challenge for knowledge workers, who must attend to many different tasks and whose to-do list is often ambiguous, requiring outside-the-box thinking.',
					)}
				/>
				<TableCell value="" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[0])} />
			</TableRow>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780393877533">Psychology in Your Life</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'Integrated teaching, learning, and assessment tools, created by a master teacher.',
						'Master teacher Sarah Grison has set the new standard for psychology texts. Through a NEW study unit format based on learning research, concepts are presented in a pedagogically consistent, accessible way. Learning Goal Activities and InQuizitive, Norton’s adaptive quizzing tool, engage students in active learning',
					)}
				/>
				<TableCell value="Fourth Edition" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[1])} />
			</TableRow>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780393708363">Becoming a Professional Life Coach</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'An updated version of the best-selling therapist-to-coach transition text.',
						'With his bestselling Therapist As Life Coach, Pat Williams introduced the therapeutic community to the career of Life coach, and in Becoming a Professional Life Coach he and Diane Menendez covered all the basic principles and strategies for effective coaching.',
					)}
				/>
				<TableCell value="" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[2])} />
			</TableRow>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780393001440">On Dreams</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'Aware that his Interpretation of Dreams was a long and difficult book, Freud decided that he must offer a version that would be briefer and easier to follow.',
						'On Dreams was the result. He succeeded admirably: the theory of the dream as distorted wish fulfillment is there, as are, in full deployment, the mechanisms of the dream work.',
					)}
				/>
				<TableCell value="The Standard Edition" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[3])} />
			</TableRow>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780393331134">Coach</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'[Lewis] has such a gift for storytelling.',
						'There was a turning point in Michael Lewis Life, in a baseball game when he was fourteen years old. The irascible and often terrifying Coach Fitz put the ball in his hand with the game on the line and managed to convey such confident trust in Lewis ability that the boy had no choice but to live up to it. ',
					)}
				/>
				<TableCell value="" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[4])} />
			</TableRow>
			<TableRow>
				<TableCell><a target="_blank" rel="noreferrer" href="https://wwnorton.com/books/9780500293829">Thinking Big</a></TableCell>
				<TableCell
					cellFormatter={() => bookDetail(
						'A closer look at social history and the growth of the human brain',
						'When and how did the brains of our hominin ancestors become human minds? When and why did our capacity for language, art, music and dance evolve?',
					)}
				/>
				<TableCell value="The Standard Edition" />
				<TableCell cellFormatter={() => bookFormats(formatCollection[5])} />
			</TableRow>
		</Table>
	);
};

export const dynamicDataTable = () => {
	const header = [
		'First name',
		{
			name: 'Last name',
			key: 'last_name',
			sort: 'ascending',
		},
		{
			name: 'Employee Info',
			key: 'employee_info',
		},
	];

	const rows = [
		['Marissa', 'Keep'],
		{
			firstName: 'Andrew',
			last_name: 'Arnold',
			employee_info: {
				cellFormatter: (cell: React.ReactNode) => (
					<>
						{cell}
						🎩
					</>
				),
			},
		},
		[
			{ key: 'firstName', value: 'Andrew' },
			{
				value: 'Arnold',
				cellFormatter: (cell: React.ReactNode) => (
					<>
						{cell}
						🎩
					</>
				),
			},
		],
	];
	return <DataTable rows={rows} header={header} />;
};
