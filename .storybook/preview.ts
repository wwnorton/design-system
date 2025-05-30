import "./globals.scss";

export const parameters = {
	controls: { expanded: true },

	options: {
		storySort: {
			order: ["Components", "Patterns"],
		},
	},

	a11y: {
		// 'todo' - show a11y violations in the test UI only
		// 'error' - fail CI on a11y violations
		// 'off' - skip a11y checks entirely
		test: "todo",
	},
};
export const tags = ["autodocs"];
