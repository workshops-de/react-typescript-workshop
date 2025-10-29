# react-typescript-workshop (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## stackblitz iframes

This repo is set up to support stackblitz iframes to display a selected tag interactively.
Usage: `https://stackblitz.com/github/workshops-de/react-typescript-workshop/tree/<tag-name>?embed=1&hideExplorer=1&hideNavigation=1&view=preview`
Example:

```html
<iframe
  style="
    display: block;
    width: 100%;
    max-width: 800px;
    margin: auto;
    aspect-ratio: 4 / 3;
    border: none;
  "
  src="https://stackblitz.com/github/workshops-de/react-typescript-workshop/tree/01-initialize-project-using-create-react-app?embed=1&hideExplorer=1&hideNavigation=1&view=preview"
></iframe>
```

<iframe
  style="
    display: block;
    width: 100%;
    max-width: 800px;
    margin: auto;
    aspect-ratio: 4 / 3;
    border: none;
  "
  src="https://stackblitz.com/github/derzeiss/react-typescript-workshop_new-style/tree/01-initialize-project-using-create-react-app?embed=1&hideExplorer=1&hideNavigation=1&view=preview"
></iframe>

## generate commit tags

Generate git-tags for every commit.

```sh
npm run generate-tags
```

Push tags to remote:

```sh
# remove all tags
git push origin :refs/tags/01-initialize-project-using-create-react-app
git push origin :refs/tags/02-add-an-app-header-component
git push origin :refs/tags/03-display-an-example-book
git push origin :refs/tags/04-create-a-book-list-item-component
git push origin :refs/tags/05-display-a-list-of-books
git push origin :refs/tags/06-display-a-money-bag-emoji-next-to-free-books
git push origin :refs/tags/07-add-a-like-counter-to-the-book-list-item-component
git push origin :refs/tags/08-display-the-book-s-abstract-but-make-it-hideable
git push origin :refs/tags/09-fetch-and-display-books-from-the-bookmonkey-api
git push origin :refs/tags/10-create-a-custom-use-books-hook
git push origin :refs/tags/11-add-a-theme-context-to-provide-a-primary-color
git push origin :refs/tags/12-create-a-theme-editor-component
git push origin :refs/tags/13-install-react-router-and-add-a-fallback-error-screen
git push origin :refs/tags/14-add-a-books-and-an-about-screen
git push origin :refs/tags/15-add-navigation-links-to-the-books-and-about-screen
git push origin :refs/tags/16-add-a-book-detail-screen
git push origin :refs/tags/17-add-a-book-edit-screen-with-a-simple-uncontrolled-form
git push origin :refs/tags/18-refactor-the-edit-form-into-a-controlled-form-and-prefill-it-with-data-from-the-api
git push origin :refs/tags/19-add-form-validation
git push origin :refs/tags/20-save-the-changes-to-the-edited-book
git push origin :refs/tags/21-install-redux-and-create-store
git push origin :refs/tags/22-redux-count-slice
git push origin :refs/tags/23-redux-books-slice
git push origin :refs/tags/24-tdd-leap-year
git push origin :refs/tags/25-component-tests
git push origin :refs/tags/26-component-tests-with-interactivity

# add tags
git push origin tag 01-initialize-project-using-create-react-app
git push origin tag 02-add-an-app-header-component
git push origin tag 03-display-an-example-book
git push origin tag 04-create-a-book-list-item-component
git push origin tag 05-display-a-list-of-books
git push origin tag 06-display-a-money-bag-emoji-next-to-free-books
git push origin tag 07-add-a-like-counter-to-the-book-list-item-component
git push origin tag 08-display-the-book-s-abstract-but-make-it-hideable
git push origin tag 09-fetch-and-display-books-from-the-bookmonkey-api
git push origin tag 10-create-a-custom-use-books-hook
git push origin tag 11-add-a-theme-context-to-provide-a-primary-color
git push origin tag 12-create-a-theme-editor-component
git push origin tag 13-install-react-router-and-add-a-fallback-error-screen
git push origin tag 14-add-a-books-and-an-about-screen
git push origin tag 15-add-navigation-links-to-the-books-and-about-screen
git push origin tag 16-add-a-book-detail-screen
git push origin tag 17-add-a-book-edit-screen-with-a-simple-uncontrolled-form
git push origin tag 18-refactor-the-edit-form-into-a-controlled-form-and-prefill-it-with-data-from-the-api
git push origin tag 19-add-form-validation
git push origin tag 20-save-the-changes-to-the-edited-book
git push origin tag 21-install-redux-and-create-store
git push origin tag 22-redux-count-slice
git push origin tag 23-redux-books-slice
git push origin tag 24-tdd-leap-year
git push origin tag 25-component-tests
git push origin tag 26-component-tests-with-interactivity
```

## update repo

To update the repo while preserving the commit-tags use rebase:

```sh
git rebase -i --root
```

After making your changes you'll need to force push (don't pull!!)

```sh
git push -f
```
