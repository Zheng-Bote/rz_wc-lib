<div id="top" align="center">
<h1>rz-wc-lib</h1>

<p>Web Components library</p>

[Report Issue](https://github.com/Zheng-Bote/rz_wc-lib/issues) [Request Feature](https://github.com/Zheng-Bote/rz_wc-lib/pulls)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Zheng-Bote/rz_wc-lib?logo=GitHub)](https://github.com/Zheng-Bote/rz_wc-lib/releases)

</div>

<hr>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Description](#description)
  - [Features](#features)
  - [Status](#status)
    - [Application / Tool](#application--tool)
    - [Documentation](#documentation)
      - [README](#readme)
      - [other Markdown files](#other-markdown-files)
- [Installation](#installation)
  - [Dependencies](#dependencies)
  - [folder structure](#folder-structure)
  - [Usage/Examples/Tests](#usageexamplestests)
- [API Reference](#api-reference)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Parameters](#parameters)
- [Documentation](#documentation-1)
  - [Architecture](#architecture)
    - [Github](#github)
      - [Github Repo](#github-repo)
      - [Github Actions / Workflows](#github-actions--workflows)
  - [Application](#application)
  - [DevOps](#devops)
  - [Github Page](#github-page)
  - [Github Wiki](#github-wiki)
  - [Comments](#comments)
  - [Screenshots](#screenshots)
- [Authors and License](#authors-and-license)
  - [License](#license)
    - [MIT License](#mit-license)
    - [Apache License](#apache-license)
  - [Authors](#authors)
    - [Code Contributors](#code-contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<hr>

# Description

![HTML5](https://img.shields.io/badge/HTML-5+-E34F26?logo=html5)
![Typescript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![Svelte.js](https://img.shields.io/badge/Svelte-5-324FFF?logo=svelte)
![CSS3](https://img.shields.io/badge/CSS-663399?logo=css3)

Web Components library

## Features

- \[ ] advanced-super-extra-special feature xyz

  <br>

- \[x] OSS and license
- \[x] works as designed
- \[ ] no bugs

<br>

- \[x] runs on modern Browsers

### Web Components

- \[x] rz-breadcrumbs : dynamic generated breadcrumbs
- \[x] rz-button-top : shows a button "goto top" if viewport is invisible
- \[x] rz-clock : Displays an analog clock with the given timezone and locale.
- \[x] rz-cookie-alert : sets a website cookie, if accepted by user
- \[x] rz-datetime : shows date / time in the choosen timezone and format
- \[x] rz-fontsize : choose and change website fontsize (S, M, L, XL)
- \[x] rz-footer : horizontal footer with 3 defineable sections
- \[x] rz-header : horizontal header with brand logo and site functions (change language, toogle dark/light mode, change fontsize, login...)
- \[x] rz-imprint: loads the imprint / legal-notice based on the current language
- \[x] rz-language : switch website language
- \[x] rz-loginform : standardized login-form
- \[x] rz-modal : shows a modal window with given header-, body-, footer-text
- \[x] rz-navmenu : Button-based navigation menu
- \[x] rz-online : shows if client is on-/offline (for PWA)
- \[x] rz-theme : toogle dark-/light-mode

<p align="right">(<a href="#top">back to top</a>)</p>

# Status

![GitHub Created At](https://img.shields.io/github/created-at/Zheng-Bote/rz_wc-lib)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz_wc-lib)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Zheng-Bote/rz_wc-lib?logo=GitHub)](https://github.com/Zheng-Bote/rz_wc-lib/releases)

![Status](https://img.shields.io/badge/Status-stable-green)
![Status](https://img.shields.io/badge/Status-works_as_designed-green)

![GitHub Issues](https://img.shields.io/github/issues/Zheng-Bote/rz_wc-lib)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Zheng-Bote/rz_wc-lib)

# Documentation

> \[!TIP]
> see also: <a href="https://www.hase-zheng.net/" title="[www.hase-zheng.net/](https://www.hase-zheng.net/)">www.hase-zheng.net/</a> for examples

## Usage

### Declaration of Web-Component

Declare the web-component script in html-header or somewhere in body

```html
<script type="module" src="/assets/rz-xxx.js"></script>
```

### Initialization of Web-Component

initalizize the web-component, in some cases with optional attribute=value

```html
<rz-xxx optional="value" optional="value"></rz-xxx>
```

## Development

### Dependencies

> \[!NOTE]
> All licenses are therefore Open Source.

- \[x] Vite (tested with 6.2.0)
- \[x] Typescript (tested with 5.7.2)
- \[x] Svelte (tested with 5.20.2)
- \[x] sveltejs/vite-plugin-svelte (tested with 5.0.3)

### folder structure

<!-- readme-tree start -->
```
.
├── .github
│   ├── actions
│   │   └── doctoc
│   │       ├── README.md
│   │       ├── action.yml
│   │       └── dist
│   │           ├── index.js
│   │           ├── index.js.map
│   │           ├── licenses.txt
│   │           └── sourcemap-register.js
│   └── workflows
│       ├── ghp-call_Readme.yml
│       ├── ghp-create_doctoc.yml
│       ├── ghp-markdown_index.yml
│       ├── repo-actions_docu.yml
│       ├── repo-call_Readme.yml
│       ├── repo-create_doctoc.yml_
│       ├── repo-create_doctoc_md.yml
│       └── repo-create_tree_readme.yml
├── .gitignore
├── .vscode
│   └── extensions.json
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   ├── coding.css
│   │   ├── index.css
│   │   ├── link.css
│   │   ├── text.css
│   │   └── theme.css
│   ├── i18n
│   │   ├── de.json
│   │   └── en.json
│   ├── img
│   │   ├── icons
│   │   │   ├── dontpanic.svg
│   │   │   ├── favicon.ico
│   │   │   ├── favicon.svg
│   │   │   ├── glasses-outline.svg
│   │   │   ├── home-outline.svg
│   │   │   ├── information-outline.svg
│   │   │   ├── language-outline.svg
│   │   │   ├── log-in-outline.svg
│   │   │   ├── mail-open-outline.svg
│   │   │   ├── moon-outline.svg
│   │   │   ├── nok.svg
│   │   │   ├── ok.svg
│   │   │   ├── search-outline.svg
│   │   │   ├── sunny-outline.svg
│   │   │   └── sync-outline.svg
│   │   ├── rz-address_mail.svg
│   │   ├── rz-address_mail_white.svg
│   │   ├── rz-address_postal.png
│   │   ├── rz-clock_bg.jpg
│   │   ├── rz-qr-code.svg
│   │   └── zheng_bote.svg
│   ├── imprint_de.htm
│   ├── imprint_en.htm
│   ├── index.html
│   ├── js
│   │   └── i18n.js
│   ├── legal.html
│   ├── login.html
│   ├── rz-navmenu.json
│   ├── template.htm
│   └── wc-docs
│       ├── index.html
│       ├── rz-breadcrumbs.html
│       ├── rz-button-top.html
│       ├── rz-clock.html
│       ├── rz-cookiealert.html
│       ├── rz-datetime.html
│       ├── rz-fontsize.html
│       ├── rz-footer.html
│       ├── rz-header.html
│       ├── rz-imprint.html
│       ├── rz-language.html
│       ├── rz-loginform.html
│       ├── rz-modal.html
│       ├── rz-navmenu.html
│       ├── rz-online.html
│       └── rz-theme.html
├── src
│   ├── App.svelte
│   ├── lib
│   │   ├── Counter.svelte
│   │   ├── rz-breadcrumbs.js
│   │   ├── rz-button-top.svelte
│   │   ├── rz-clock.js
│   │   ├── rz-cookie-alert.js
│   │   ├── rz-datetime.svelte
│   │   ├── rz-fontsize.svelte
│   │   ├── rz-footer.svelte
│   │   ├── rz-header.svelte
│   │   ├── rz-imprint.svelte
│   │   ├── rz-language.svelte
│   │   ├── rz-loginform.svelte
│   │   ├── rz-modal.svelte
│   │   ├── rz-navmenu.svelte
│   │   ├── rz-online.svelte
│   │   └── rz-theme.svelte
│   ├── main.ts
│   └── vite-env.d.ts
├── svelte.config.js
├── tree.bak
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

16 directories, 98 files
```
<!-- readme-tree end -->

<p align="right">(<a href="#top">back to top</a>)</p>

# Authors and License

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2025 ZHENG Robert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

        https://choosealicense.com/licenses/mit/

## Authors

- [![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

### Code Contributors

![Contributors](https://img.shields.io/github/contributors/Zheng-Bote/rz_wc-lib?color=dark-green)

[![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

<hr>

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
