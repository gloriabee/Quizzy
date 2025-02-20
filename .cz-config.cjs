/**
 * Commitizen Configuration File - cz-customizable
 *
 * This file defines the commit types, scopes, and rules for commit messages
 * to maintain a structured and readable Git history.
 *
 * Usage: `npm run commit` instead of `git commit -m "message"`
 */

module.exports = {
  /**
   * Define the commit types with improved icons for better clarity.
   */
  types: [
    { value: ":sparkles: feat", name: "🆕 feat:    Add a new feature" },
    { value: ":bug: fix", name: "🛠️ fix:      Fixing a bug or issue" },
    { value: ":books: docs", name: "📖 docs:    Documentation updates" },
    {
      value: ":art: style",
      name: "🎨 style:   Code style, formatting, missing semicolons",
    },
    {
      value: ":recycle: refactor",
      name: "🔄 refactor: Code restructuring without changing functionality",
    },
    { value: ":rocket: perf", name: "🚀 perf:    Performance improvements" },
    {
      value: ":test_tube: test",
      name: "🧪 test:    Adding or updating test cases",
    },
    {
      value: ":wrench: chore",
      name: "🔧 chore:   Build process, dependencies, or minor tasks",
    },
    {
      value: ":rewind: revert",
      name: "⏪️ revert:  Reverting a previous commit",
    },
    {
      value: ":construction: wip",
      name: "🚧 wip:     Work in progress (not ready for merge)",
    },
    {
      value: ":building_construction: build",
      name: "🏗️ build:   Changes to build tools or dependencies",
    },
    { value: ":gear: ci", name: "⚙️ ci:      Continuous integration updates" },

    {
      value: ":label: types",
      name: "🏷️ types:   TypeScript type definitions or fixes",
    },
    {
      value: ":goal_net: error-handling",
      name: "🥅 error-handling: Improve error handling",
    },
    {
      value: ":passport_control: security",
      name: "🛂 security: Security updates or fixes",
    },
    {
      value: ":iphone: responsive",
      name: "📱 responsive: Improve mobile responsiveness",
    },
  ],

  /**
   * Define available scopes for commit messages.
   * Scopes help categorize commits for better organization.
   * Example: "feat(auth)" or "fix(ui)"
   *
   * Set an empty array to allow any custom scope.
   */
  scopes: [],

  /**
   * Override the available scopes for specific commit types.
   * This ensures that commits of a certain type can only have predefined scopes.
   */
  scopeOverrides: {
    fix: [
      { name: "merge" }, // Fixing merge conflicts
      { name: "style" }, // Fixing UI/style-related issues
      { name: "test" }, // Fixing issues in test cases
      { name: "hotfix" }, // Emergency bug fixes
    ],
  },

  /**
   * Allow developers to enter custom scopes in commit messages.
   * If set to false, only predefined scopes can be used.
   */
  allowCustomScopes: true,

  /**
   * Define which commit types allow breaking changes.
   * Developers will be prompted to enter breaking change details for these types.
   */
  allowBreakingChanges: ["feat", "fix"],

  /**
   * Skip questions that are unnecessary for the commit process.
   * "footer" and "breaking" are omitted for a cleaner experience.
   */
  skipQuestions: ["footer", "breaking", "body"],

  /**
   * Set a character limit for the commit message subject.
   * This prevents overly long commit messages.
   */
  subjectLimit: 100,
  /**
   * Disable wrapping
   */
  wrap: false,
};
