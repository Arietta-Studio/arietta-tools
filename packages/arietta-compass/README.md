<div align="center"><a name="readme-top"></a>

<img height="120" src="https://unpkg.com/@arietta-studio/assets-logo@latest/assets/logo-3d.webp" style="vertical-align: middle;">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg" style="vertical-align: middle;">
<img height="120" src="https://unpkg.com/@arietta-studio/assets-emoji@latest/assets/love-letter.webp" style="vertical-align: middle;">

<h1>Arietta Compass</h1>

Arietta Compass is a CLI tool that uses ChatGPT to generate Gitmoji-based commit messages

[Changelog](./CHANGELOG.md) · [Report Bug][issues-url] · [Request Feature][issues-url]

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

![](https://gw.alipayobjects.com/zos/kitchen/3%26ByxtP39X/preview.webp)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🤯 Usage](#-usage)
  - [Git hook](#git-hook)
  - [Configuration](#configuration)
  - [Options](#options)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)
  - [More Products](#more-products)
  - [Credits](#credits)

####

</details>

## ✨ Features

- [x] 🤯 Supports auto-generating commit messages based on diffs using ChatGPT
- [x] 🛠️ Supports streamlined commit message editing workflow
- [x] 😜 Supports adding Gitmojis
- [x] 📝 Supports Conventional Commits specification
- [x] ⚡️ Supports pulling a list of issues and convenient binding
- [x] 💄 Supports custom prompts
- [x] 🗺️ Supports multi-language commit messages

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Installation

To install Arietta Compass, run the following command:

```bash
npm install -g @arietta-studio/arietta-compass
```

> \[!IMPORTANT]\
> Please make sure you have `Node.js` version **>= 18**

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

You can use the `arietta-compass` command to generate a commit message for your staged changes:

```shell
$ git add <files...>
$ arietta-compass
```

> \[!NOTE]\
> Use the `acgit` alias if `arietta-compass` is too long for you.

<br/>

#### AI mode

With AI mode, you can generate a complete commit message using ChatGPT.

> \[!IMPORTANT]\
> To use AI auto-generation, you need to fill in your OpenAI token in the settings by `arietta-compass -o`. and if you have special network requirements, you can add OpenAI's forwarding address in the settings.

![](https://gw.alipayobjects.com/zos/kitchen/qmXcNvnjKf/preview-ai.webp)

<br/>

#### Editor mode

In Editor mode, you can choose the `<type>(<optional scope>): <subject> [<issues>]` format by following a simple flow.

> \[!NOTE]\
> If your project is a GitHub repository, the Editor mode feature will automatically fetch the issues associated with your repository. You can select multiple issues to link to your commit message by <kbd>space</kbd> .

![](https://gw.alipayobjects.com/zos/kitchen/QkJ5V8nbY6/preview-editor.webp)

<div align="right">

[![][back-to-top]](#readme-top)

</div>

### Git hook

You can integrate Arietta Compass with Git via the `prepare-commit-msg` hook. This allows you to use Git as you normally would and edit the commit message before committing.

<br/>

#### Install

To install the hook in the Git repository, run the following command:

```shell
$ arietta-compass --init # or use short flag -i
```

<br/>

#### Uninstall

To uninstall the hook from the Git repository, run the following command:

```shell
$ arietta-compass --remove # or use short flag -r
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

### Configuration

To configure Arietta Compass, run the following command:

```shell
$ arietta-compass --option # or use short flag -o
```

- To use AI auto-generation, you need to fill in your [OpenAI token](<(https://platform.openai.com/account/api-keys)>) in the settings.
- To automatically pull private issues, you need to fill in your [GitHub token](https://github.com/settings/tokens) with repo permissions in the settings.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

### Options

Arietta Compass supports the following options:

```shell
--commit -c Interactively commit using the prompts
--option -o Setup arietta-compass preferences
--help -h Print basic options
--init -i Initialize arietta-compass as a commit hook
--remove -r Remove a previously initialized commit hook
--list -l List all the available commit type
--version -v Print arietta-compass installed version
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/arietta-studio/arietta-tools.git
$ cd arietta-tools
$ bun install
$ cd packages/arietta-compass
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

### Credits

- **langchainjs** - <https://github.com/hwchase17/langchainjs>
- **ink** - <https://github.com/vadimdemedes/ink>
- **gitmoji-commit-workflow** - <https://github.com/arvinxx/gitmoji-commit-workflow>
- **gitmoji-cli** - <https://github.com/carloscuesta/gitmoji-cli>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2024 [Arietta Studio][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/arietta-studio/arietta-tools/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/arietta-tools/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/arietta-studio/arietta-tools/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/arietta-tools/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/arietta-studio/arietta-tools
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/arietta-studio/arietta-tools/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=arietta-studio%2Farietta-tools
[github-contributors-link]: https://github.com/arietta-studio/arietta-tools/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/arietta-studio/arietta-tools?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/arietta-studio/arietta-tools/network/members
[github-forks-shield]: https://img.shields.io/github/forks/arietta-studio/arietta-tools?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/arietta-studio/arietta-tools/issues
[github-issues-shield]: https://img.shields.io/github/issues/arietta-studio/arietta-tools?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/arietta-studio/arietta-tools/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/arietta-studio/arietta-tools?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/arietta-studio/arietta-tools/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/arietta-studio/arietta-tools?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/arietta-studio/arietta-tools/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/arietta-studio/arietta-tools?color=ffcb47&labelColor=black&style=flat-square
[issues-url]: https://github.com/arietta-studio/arietta-compass/issues/new/choose
[npm-release-link]: https://www.npmjs.com/package/@arietta-studio/arietta-compass
[npm-release-shield]: https://img.shields.io/npm/v/@arietta-studio/arietta-compass?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/arietta-studio/arietta-tools/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/arietta-studio
