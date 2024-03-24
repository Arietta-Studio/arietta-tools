<div align="center"><a name="readme-top"></a>

<img height="120" src="https://unpkg.com/@arietta-studio/assets-logo@latest/assets/logo-3d.webp" style="vertical-align: middle;">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg" style="vertical-align: middle;">
<img height="120" src="https://unpkg.com/@arietta-studio/assets-emoji@latest/assets/bookmark.webp" style="vertical-align: middle;">

<h1>Arietta CLI Shebang</h1>

Arietta CLI Shebang provide a easy way to add shebang to target file

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
- [🤯 Usage](#-usage)
  - [Custom Shebang](#custom-shebang)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [Credits](#credits)

####

</details>

## 📦 Installation

To install Arietta Shebang, run the following command:

```bash
npm install -g @arietta-studio/arietta-shebang
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

Add `#!/usr/bin/env node` to target file

```shell
$ arietta-shebang -t ./dist/cli.js
# or
$ shebang -t ./dist/cli.js
```

### Custom Shebang

```
$ shebang -t ./dist/cli.js -s "#!/usr/bin/env bun"
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
$ cd packages/arietta-shebang
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

- **ink** - <https://github.com/vadimdemedes/ink>

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
[npm-release-link]: https://www.npmjs.com/package/@arietta-studio/arietta-shebang
[npm-release-shield]: https://img.shields.io/npm/v/@arietta-studio/arietta-shebang?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/arietta-studio/arietta-tools/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/arietta-studio
