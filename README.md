# cz-conventional-changelog-for-any
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Fork of https://github.com/digitalroute/cz-conventional-changelog-for-jira.

### Additions made in this fork:

- Custom types
- Custom defaults
- Additional configurations of `branchNameRegExp`, `scopes` and `taskIdRegExp`
- Consistent messages
- Updated dependencies
---------------
\
\
![Demo](/images/demo.gif?raw=true)

## Features:
- It asks for ClickUp task ID associated with the commit
- It asks for the type of change being made in the commit
- It detects the ClickUp task ID from your branch name (provided we use type/id-description format)
- It asks for the scope (vertical) relevant to the change

\
This tool is paired with another tool called Standard Version, which:
- beautifully logs all commits of type features and fixes to changelog
- auto-updates version of the package based on breaking change or feature releases
- tags your commit with the version so releases can be sealed

Example changelog:

![Changelog](/images/changelog.png?raw=true)


## Installing the command line tool

Commitizen is currently tested against
node 10 and 12 although it may work in
older node. You should also have npm 6
or greater.

```sh
npm install -g commitizen
```

## Conventional commit messages as a global utility

Install our `commitizen` adapter [`@dubizzle/cz-conventional-changelog-for-any`](https://www.npmjs.com/package/cz-conventional-changelog-for-any) globally

```sh
npm install -g @dubizzle/cz-conventional-changelog-for-any
```

Create a `.czrc` file in your `home` directory, with `path` referring to the preferred, globally installed, `commitizen` adapter

```sh
echo '{ "path": "@dubizzle/cz-conventional-changelog-for-any" }' > ~/.czrc
```

Add the following configs to `package.json`


```
 "config": {
    "standard-version": {
      "issueUrlFormat": "https://app.clickup.com/t/{{id}}"
    }
  }
```
```
  "standard-version": {
    "issueUrlFormat": "https://app.clickup.com/t/{{id}}"
  }
```

## Repo-scoped usage

You can also use install our `commitizen` adapter [`@dubizzle/cz-conventional-changelog-for-any`](https://www.npmjs.com/package/cz-conventional-changelog-for-any) **locally**

```sh
npm install @dubizzle/cz-conventional-changelog-for-any
```

Add the following configs to `package.json`

```
 "config": {
      "commitizen": {
      "path": "cz-conventional-changelog-for-any",
    },
    "standard-version": {
      "issueUrlFormat": "https://app.clickup.com/t/{{id}}"
    }
  }
```
```
  "standard-version": {
    "issueUrlFormat": "https://app.clickup.com/t/{{id}}"
  }
```

\
You are all set! Now `cd` into any `git` repository and simply use `git cz`, `git-cz`, or just `cz` instead of `git commit` when committing and you will find the `commitizen` prompt with the default configurations.


Protip: You can use all the `git commit` `options` with `git cz`, for example: `git cz -a`.