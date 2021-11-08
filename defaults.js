var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: false,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  jiraPrefix: '',
  jiraOptional: false,
  jiraLocation: 'pre-description',
  jiraPrepend: '',
  jiraAppend: '',
  branchNameRegExp: /(?<jiraIssue>([a-zA-Z0-9]{6,7}))/,
  scopes: [
    '🚗 cars',
    '📦 classifieds',
    '🤝 communities',
    '🌀 horizontal',
    '🎓 jobs',
    '🏡 properties',
    '🧩 others'
  ],
  taskIdRegExp: /[a-zA-Z0-9]{6,7}/
};
