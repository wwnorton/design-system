# Contributing

All contributions are welcome and encouraged.
To contribute code, copy, or any other type of modification, make changes in a branch and create a pull request to allow maintainers to review your changes.

## How to get started

**Contributions are meant to be easy and low-stakes**.
Don't worry about making mistakes or getting things wrong&mdash;every contribution is helpful and our maintainers will help you through your first contribution.

The easiest way to know what needs to be done is to look through [unassigned open issues](https://github.com/wwnorton/design-system/issues?q=is%3Aopen). To get started, write a message in an issue to let the maintainers know you'd like to tackle it and they will help you through the process.

- Read [getting started with GitHub](https://docs.github.com/en/github/getting-started-with-github) for more details on the basics of Git and GitHub.
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) is a helpful starting place for getting acquainted with pull request workflows.
<!-- - Issues labelled [good first issue](https://github.com/wwnorton/design-system/labels/good%20first%20issue) are a great place to start if you'd like to contribute but aren't sure how. -->

## Pull Requests

A pull request is a request to change the design system's source of truth in some way.
This could be a new feature, documentation updates, a bug fix, a copy change, a new implementation, or any other type of change.

- **Every pull request is a proposal**. While issues are helpful for definition and open questions, pull requests are the place to propose changes, fixes, and solutions. It's where the design system gets built.
- **Expect discussion**. Let others know when your pull request is ready for review directly in the pull request thread and then wait for feedback. Maintainers and other contributors will review it and comment on the proposal, possibly requesting changes.
- **Start small**. Small changes are _always_ easier than big ones. Opening a pull request that includes changes to many files and big API changes will take much longer to review and there's a good chance that some portions will be rejected.
- **Define the problem** in the pull request description. Merge requests often introduce solutions to problems, so don't forget to state the problem you're solving, preferably by linking to a related issue.
- When in doubt, refer to [GitLab's best practices for merge requests](https://about.gitlab.com/handbook/communication/#everything-starts-with-a-merge-request) (GitLab calls a pull request a "merge request").

## Naming conventions

Effective naming is a central goal of the Norton Design System.
Names should convey the role or purpose of the thing they are naming, and they should accomplish this for a wide audience (not just developers!).
This is [a genuinely difficult goal](https://www.karlton.org/2017/12/naming-things-hard/), largely because everyone has different domain and cultural knowledge, which results in diverse mental models for the same things.

Expect a lot of discussion around names in code reviews, design reviews, and proposals.
The goal is to achieve [rough consensus](https://en.wikipedia.org/wiki/Rough_consensus) among the team and that is done through friendly debate to achieve the shared goal.
Please respect this process and be patient&mdash;the first name someone proposes is sometimes the name we end up with, but it will almost always be discussed and it is often altered.

Here are some tips that tend to be true for our naming conventions:

- [Accurate, clear, brief](https://wwnorton.github.io/design-system/docs/guides/usable-writing-guidelines/#accurate-clear-brief-in-that-order) (in that order).
  This is one of the central guidelines of our very own writing guidelines and it should apply to names.
- Avoid technical terms or jargon. Our audience includes developers, designers, editors, and other users. Terms that require prior knowledge in one of those domains will reduce understanding.
- Metaphorical or symbolic names are rarely the right choice. Metaphor and symbols require the reader to perform an additional cognitive task of converting the symbol into its meaning, and that task leaves a lot of room for interpretation

### Casing

Code often has certain requirements for
For instance, JavaScript names typically can't have spaces so a component named "Progress bar" would need to be transformed into "ProgressBar".
The conventions for how this happens varies depending on how the name is being encoded and whenever possible, we follow standards or community conventions for this casing.
Here are some examples:

- React components should use `PascalCase`: combine words into capitalized first letter of every word.
  - Enforced by eslint's [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md) rule.
- React props and non-component function names should use `camelCase`: lowercase first letter, capitalize subsequent words.
- Sass variables and CSS custom properties should use `kebab-case`: all lowercase with hyphen (`-`) delimiters.

## Code and Commit Standards

Commits should generally follow [git best practices](http://sethrobertson.github.io/GitBestPractices/).
Specifically, contributors MUST strive to follow these two conventions:

- [commit early and often](http://sethrobertson.github.io/GitBestPractices/#commit)
- [make useful commit messages](http://sethrobertson.github.io/GitBestPractices/#usemsg)

### Message conformance

Release notes are automatically generated by [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) using metadata created by YOU in your commit messages.
To accomplish this, commit messages MUST include a valid commit type and SHOULD provide a message that will be comprehensible in the changelog.

This is enforced by [commitlint](https://commitlint.js.org) following the [conventional commits](https://www.conventionalcommits.org) standard.
On commit, [husky](https://github.com/typicode/husky) will run commitlint to validate your commit messages.
Commit messages that do not conform will fail.

For instance:

```sh
# fails commitlint check
git commit -m "update commitlint"
# husky runs commitlint and other checks and throws the following two errors:
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

# passes all checks
git commit -m "chore(deps): update commitlint"
```

**TIP**: if you're unfamiliar with the commit types, try [commitizen](https://github.com/commitizen/cz-cli),
a commitlint-aware tool that provides an interactive command line interface that allows you to select your type.
Call it without having to install it globally with [npx](https://github.com/npm/npx):

```sh
npx git-cz
```

### Code Conformance

All code must conform to code quality standards before being accepted.
To make this easier, it is highly recommend that developers use the included Node.js tooling.

```sh
# install development dependencies locally
npm install
```

Once installed, the following commands will lint your code.

```sh
# lint javascript
npm run lint:es

# lint css
npm run lint:style

# run prettier without fixing anything
npm run lint:prettier
```

#### Auto-fixing

Some issues can be fixed automatically by the provided tools.
Each tool's npm script comes with an accompanying `-fix` mode (e.g., `npm run lint:es-fix` will fix eslint errors).
Additionally, all linters can be run in fix mode concurrently:

```sh
npm run fix
```

Additionally, [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) will auto-fix any staged files.
Read their documentation to learn more about how this happens.

#### Rule overrides

Both eslint and stylelint rules can be [overridden](https://eslint.org/docs/user-guide/configuring.html#using-configuration-comments) or [disabled](https://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css) via code comments.
This should only ever be done as a very last resort.
When used, all instances MUST conform to the following requirements:

- The override MUST include accompanying rationale in a preceding comment
- The override SHOULD be scoped to the specific line via `/* {eslint,stylelint}-disable-next-line <rule_name> */` or `// {eslint,stylelint}-disable-line <rule_name>` directives
  - If a block needs to be ignored, it MUST be re-enabled after the end of the block via `/* {eslint,stylelint}-enable <rule_name> */`
- The override MUST disable only the specific rule (i.e., no `/* {eslint,stylelint}-disable */` without a rule name)

##### Examples of acceptable overrides

A third-party library provides a required method that has a leading underscore, so the [no-underscore-dangle rule](https://eslint.org/docs/rules/no-underscore-dangle#disallow-dangling-underscores-in-identifiers-no-underscore-dangle) is disabled via the only on the line where it occurs:

Disable a single line with a reasonable explanation of why it's disabled:

```javascript
function foo(arg) {
	/* the _foo method is defined by <third_party_library_name> */
	/* eslint-disable-next-line no-underscore-dangle */
	return MyLib._foo(arg);
}
```

Disable a block and then re-enable it after, with a reasonable explanation of why it was disabled:

```javascript
function foo(arg) {
	if (someCondition) {
		/* <third_party_library_name> does not provide a method for reassignment */
		/* eslint-disable no-param-reassign */
		arg.foo = "bar";
		arg.bar = "baz";
		/* eslint-enable no-param-reassign */
	}
	return arg;
}
```

##### Examples of unacceptable overrides

Overriding the [no-underscore-dangle rule](https://eslint.org/docs/rules/no-underscore-dangle#disallow-dangling-underscores-in-identifiers-no-underscore-dangle) at the document level because a third-party library provides a method with a leading underscore:

```javascript
/* DON'T: DISABLE RULES AT THE DOCUMENT LEVEL */
/* eslint-disable no-underscore-dangle */ // <- BAD!
function foo(arg) {
	arg._foo("bar");
}
```

Some rules should never be disabled.
For instance, there is never a good reason to use the `var` keyword since `const` and `let` are [supported in all major browsers](http://kangax.github.io/compat-table/es6/#test-const):

```javascript
/* DON'T: DISABLE RULES THAT ENCOURAGE BEST PRACTICES */
/* eslint-disable-next-line no-var */ // <- GOOD!
var foo = "bar";

/* DO: SIMPLY USE THE CORRECT SYNTAX */
const foo = "bar";
```
