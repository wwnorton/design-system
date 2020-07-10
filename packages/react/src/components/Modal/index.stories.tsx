import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, boolean, text, select,
} from '@storybook/addon-knobs';
import { Modal } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';

export default {
	title: 'Modal',
	component: Modal,
	decorators: [withKnobs],
};

const shortContent = (
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		Id cum reiciendis sed ab voluptas velit quibusdam expedita sapiente nemo?
		Modi accusamus minus distinctio error non! Provident quasi officia pariatur fugit.
	</p>
);

const line = { style: { display: 'block' } };

const longContent = (
	<>
		{ shortContent }
		<p>
			<span {...line}>Whan that Aprille with his shoures soote,</span>
			<span {...line}>The droghte of March hath perced to the roote,</span>
			<span {...line}>And bathed every veyne in swich licóur</span>
			<span {...line}>Of which vertú engendred is the flour;</span>
			<span {...line}>Whan Zephirus eek with his swete breeth</span>
			<span {...line}>Inspired hath in every holt and heeth</span>
			<span {...line}>The tendre croppes, and the yonge sonne</span>
			<span {...line}>Hath in the Ram his halfe cours y-ronne,</span>
			<span {...line}>And smale foweles maken melodye,</span>
			<span {...line}>That slepen al the nyght with open ye,</span>
			<span {...line}>So priketh hem Natúre in hir corages,</span>
			<span {...line}>Thanne longen folk to goon on pilgrimages,</span>
			<span {...line}>And palmeres for to seken straunge strondes,</span>
			<span {...line}>To ferne halwes, kowthe in sondry londes;</span>
			<span {...line}>And specially, from every shires ende</span>
			<span {...line}>Of Engelond, to Caunterbury they wende,</span>
			<span {...line}>The hooly blisful martir for to seke,</span>
			<span {...line}>That hem hath holpen whan that they were seeke.</span>
		</p>
		<p>
			<span {...line}>Bifil that in that seson on a day,</span>
			<span {...line}>In Southwerk at the Tabard as I lay,</span>
			<span {...line}>Redy to wenden on my pilgrymage</span>
			<span {...line}>To Caunterbury with ful devout corage,</span>
			<span {...line}>At nyght were come into that hostelrye</span>
			<span {...line}>Wel nyne and twenty in a compaignye</span>
			<span {...line}>Of sondry folk, by áventure y-falle</span>
			<span {...line}>In felaweshipe, and pilgrimes were they alle,</span>
			<span {...line}>That toward Caunterbury wolden ryde.</span>
			<span {...line}>The chambres and the stables weren wyde,</span>
			<span {...line}>And wel we weren esed atte beste.</span>
			<span {...line}>And shortly, whan the sonne was to reste,</span>
			<span {...line}>So hadde I spoken with hem everychon,</span>
			<span {...line}>That I was of hir felaweshipe anon,</span>
			<span {...line}>And made forward erly for to ryse,</span>
			<span {...line}>To take oure wey, ther as I yow devyse.</span>
		</p>
		<p>
			<span {...line}>But nathelees, whil I have tyme and space,</span>
			<span {...line}>Er that I ferther in this tale pace,</span>
			<span {...line}>Me thynketh it acordaunt to resoun</span>
			<span {...line}>To telle yow al the condicioun</span>
			<span {...line}>Of ech of hem, so as it semed me,</span>
			<span {...line}>And whiche they weren and of what degree,</span>
			<span {...line}>And eek in what array that they were inne;</span>
			<span {...line}>And at a Knyght than wol I first bigynne.</span>
		</p>
	</>
);

const { defaultProps } = Modal;

export const Default: React.FunctionComponent = () => (
	<Modal
		title={text('Title', 'Modal title')}
		hideTitle={boolean('Hide title', defaultProps.hideTitle)}
		hideCloseButton={boolean('Hide close button', false)}
		closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
		closeOnEscape={boolean('Close on Escape', defaultProps.closeOnEscape)}
		onRequestClose={action('onRequestClose')}
		stickyHeader={boolean('Sticky header', false)}
		stickyActionBar={boolean('Sticky action bar', false)}
		isOpen
	>
		{
			select(
				'Content',
				{ Short: 'short', Long: 'long' },
				'short',
			) === 'short' ? shortContent : longContent
		}
	</Modal>
);

export const WithActionBar: React.FunctionComponent = () => (
	<Modal
		isOpen
		title={text('Title', 'Modal title')}
		hideCloseButton={boolean('Hide close button', false)}
		actions={(
			<>
				<Button variant="outline">Not okay</Button>
				<Button variant="solid">Okay</Button>
			</>
		)}
		stickyHeader={boolean('Sticky header', false)}
		stickyActionBar={boolean('Sticky action bar', false)}
	>
		{
			select(
				'Content',
				{ Short: 'short', Long: 'long' },
				'short',
			) === 'short' ? shortContent : longContent
		}
	</Modal>
);

export const Controlled: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(false);
	const open = (): void => { setOpen(true); };
	const close = (): void => {
		setOpen(false);
		action('onRequestClose')();
	};
	return (
		<>
			<Button variant="solid" onClick={open}>Open</Button>
			<Modal
				title={text('Title', 'Modal title')}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				hideCloseButton={boolean('Hide close button', false)}
				closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
				closeOnEscape={boolean('Close on Escape', defaultProps.closeOnEscape)}
				isOpen={isOpen}
				onOpen={action('onOpen')}
				onRequestClose={close}
				actions={boolean('Action bar', true) ? (
					<>
						<Button variant="outline" onClick={close}>Not okay</Button>
						<Button variant="solid" onClick={close}>Okay</Button>
					</>
				) : undefined}
				stickyHeader={boolean('Sticky header', false)}
				stickyActionBar={boolean('Sticky action bar', false)}
			>
				{
					select(
						'Content',
						{ Short: 'short', Long: 'long' },
						'short',
					) === 'short' ? shortContent : longContent
				}
			</Modal>
		</>
	);
};

export const MultiModal: React.FunctionComponent = () => {
	const [firstNameRef, setFirstNameRef] = React.useState<HTMLInputElement | null>(null);
	const [lastNameRef, setLastNameRef] = React.useState<HTMLInputElement | null>(null);
	const [isOpen, setOpen] = React.useState(false);
	const [lastName, setFirst] = React.useState('');
	const [firstName, setLast] = React.useState('');
	const [resultOpen, setResultOpen] = React.useState(false);
	const open = (): void => setOpen(true);
	const close = (): void => {
		setOpen(false);
		// setFirst('');
		// setLast('');
		action('onRequestClose')();
	};
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		setResultOpen(true);
		e.preventDefault();
	};
	const handleChange = ({ nativeEvent }: React.FormEvent<HTMLFormElement>): void => {
		const target = nativeEvent.target as HTMLInputElement;
		switch (target) {
			case lastNameRef:
				setFirst(target.value);
				break;
			case firstNameRef:
				setLast(target.value);
				break;
			default:
		}
	};
	const closeResult = (): void => setResultOpen(false);
	return (
		<>
			<Button variant="solid" onClick={open}>Open</Button>
			<Modal
				title="Your name"
				focusOnOpen={firstNameRef}
				isOpen={isOpen}
				onOpen={action('onOpen')}
				onRequestClose={close}
				closeOnEscape={!resultOpen}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				hideCloseButton={boolean('Hide close button', false)}
				closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
			>
				<form onSubmit={submit} onChange={handleChange}>
					<TextField required value={firstName} label="First Name" ref={setFirstNameRef} />
					<TextField required value={lastName} label="Last Name" ref={setLastNameRef} />
					<Button variant="solid" type="submit">Submit</Button>
				</form>
			</Modal>
			<Modal
				title="Result"
				hideTitle
				isOpen={resultOpen}
				onRequestClose={closeResult}
			>
				{ `Hello, ${firstName} ${lastName}!` }
			</Modal>
		</>
	);
};
