# klicker-docs

This repository provides the documentation of the actual klicker application ([Klicker API](https://github.com/uzh-bf/klicker-api) and [Klicker Frontend](https://github.com/uzh-bf/klicker-react)).

## How to work with this repository

There are two main branches with different purposes:

* The **master** branch contains the source code of the documentation which is made with [Docusaurus](https://docusaurus.io/).
* The **gh-pages** branch contains the compiled documentation which is accessible under https://uzh-bf.github.io/klicker-docs/.

Develop as usual with branches and merge your changes into the master branch.

You may use the following command (within `klicker-docs/docusaurus/website`) to run the documentation on the localhost and enable a file watcher for live compiling:

```
yarn start:watch
```

Run the following commands to publish the newest version of the documentation to the gh-pages branch:
```
yarn
yarn publish:alexscheitlin
```

Add your own shortcut by adding your GitHub name to the following file: `docusaurus/website/package.json`

### Workaround if the publish command fails

Then follow these steps to publish the newest version of the documentation to the gh-pages branch:

1.  Go to the website folder of docusaurus within the master branch:

```
git checkout master

cd klicker-docs\docusaurus\website\
```

2.  Run yarn and the publish command (see below to create your own shortcut):

```
yarn
yarn publish:alexscheitlin
```

_If the publish command fails, try to rerun yarn and the again the publish command._

Add your own shortcut adding your GitHub name to the following file: `docusaurus/website/package.json`

```
cross-env GIT_USER=AlexScheitlin CURRENT_BRANCH=master yarn run publish-gh-pages
```

3.  Stash the changes as we don't need them and change to the gh-pages branch:

```
git stash
git checkout gh-pages
```

4.  Go to the root folder within the gh-pages branch.

```
cd ../..
```

5.  Remove the old version of the documentation, get the new one and copy the HTML files to the root folder:

```
rm -rf blog\ css\ docs\ en\ img\ *.html

cp -r docusaurus/website/build/klicker-docs/* ./

cp en/*.html ./
```

6.  Remove the compiled docusaurus folder:

```
rm -rf docusaurus
```

7.  Commit and push the changes:

```
git add .

git commit -m "publish"

git push
```

8.  Exit the gh-pages branch and never change the documentation within this branch:

```
git checkout master
```
