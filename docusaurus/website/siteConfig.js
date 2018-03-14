/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const users = []

const siteConfig = {
  title: '' /* empty, as we have the logo in the header title for your website */,
  title_index: 'Klicker',
  subtitle_index: 'UZH',
  tagline: 'An open source instant audience response system',
  url: 'https://uzh-bf.github.io' /* your website url */,
  baseUrl: '/klicker-docs/' /* base url for your project */,
  projectName: 'klicker-docs',
  organizationName: 'uzh-bf',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'faq', label: 'FAQ'},
    /*{doc: 'doc4', label: 'API'},*/
    /*{page: 'help', label: 'Help'},*/
    /*{blog: true, label: 'Blog'},*/
  ],
  /* path to images for header/footer */
  headerIcon: 'img/klicker_uzh_logo_transparent_white.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#1e70bf',  /* header, navigation bar and sidebar */
    secondaryColor: '#1e70bf',  /* second row of header for narrow and mobile view */
  },
  users,
  /* custom fonts for website */
  fonts: {
    myFont: [
      "Open Sans",
      "Serif"
    ]
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' IBF Teaching Center, Department of Banking and Finance, University of Zurich. All rights reserved.\n' +
    'Products and Services displayed herein are trademarks or registered trademarks of their respective owners.',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
