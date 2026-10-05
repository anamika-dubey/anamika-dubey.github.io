# SCALE Lab website

Website for SCALE Lab at Washington State University, led by Dr. Anamika Dubey. Our research addresses power-system optimization, resilience, and the integration of distributed energy resources.

[Visit the website](https://anamika-dubey.github.io/) · [Current members and alumni](https://anamika-dubey.github.io/people/)

## Request an update or editing access

- **Website updates:** contact [Aryan Ritwajeet Jha](mailto:aryan.r.jha@wsu.edu). Send the page or profile to change, the replacement text, relevant links, and any photos. For member profiles, include your joining/graduation dates and preferred contact links. Photos and announcements can be added later.
- **Collaborator access:** contact [Dr. Anamika Dubey](mailto:anamika.dubey@wsu.edu), the repository owner, with your GitHub username and the pages you intend to maintain. You can also coordinate the request through Aryan.
- **Ownership stays with Dr. Anamika Dubey.** Editing access is granted to collaborators; it does not transfer repository ownership. Dr. Dubey can invite editors through **Settings → Collaborators → Add people**. The invited person must accept the invitation before editing access becomes available. See [GitHub's invitation guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

## Where content lives

| Content | Files |
| --- | --- |
| Member biographies | `_pages/<Name>.md` |
| Member order, portraits, announcements, and milestone photos | `_pages/profiles.md` |
| Portraits | `assets/img/` |
| Preliminary/final defense photos | `assets/img/milestones/` |
| Home page and other pages | `_pages/about.md` and other files in `_pages/` |
| News and publications | `_news/` and `_bibliography/` |

Milestone photos appear as small thumbnails. Clicking one opens that member's gallery; use the ‹ / › buttons or left/right arrow keys to browse, and Escape to close. Additional photos go in the member's `milestones` list in `_pages/profiles.md`.

## Edit, preview, and publish

Routine text edits can be made directly on GitHub; a local development environment is optional.

1. Create a branch from the latest **`master`**. Open the relevant file and use the pencil button to edit. Keep each commit focused on one purpose.
2. Open a pull request (PR) targeting `master`. For a branch in this repository, the `deploy` workflow builds a preview automatically.
3. Once the build and GitHub Pages publication finish, open `https://anamika-dubey.github.io/previews/pr-N/people/`, replacing `N` with your PR number. Other pages use the same preview prefix. Review the text, photos, and mobile layout before merging.
4. Merge the reviewed PR. The live website updates automatically after the production deployment finishes, usually within a few minutes. Check [Actions](https://github.com/anamika-dubey/anamika-dubey.github.io/actions) for the `deploy` and `pages-build-deployment` runs. If the page looks stale, refresh with **Ctrl + Shift + R**.

`master` holds the editable source. **`gh-pages`** holds the generated website and PR previews; the deployment workflow updates it automatically. Make content changes in source branches. A preview URL shows that PR's build; use the live site to see all merged changes.

The site uses Jekyll, so opening a source `.md` or `.html` file on your computer does not show the finished website. Use the hosted PR preview for review. Build settings live in `_config.yml` and `.github/workflows/deploy.yml`; the workflow also records the build dependencies.

## Reduce build emails

These emails are GitHub Actions notifications. Each editor controls their own notification settings; changing the README or website does not change anyone's inbox.

**On GitHub:** open [Notification settings](https://github.com/settings/notifications), then **System → Actions**. Choose **Only notify for failed workflows** to keep failure alerts, or remove **Email** / choose **Don't notify** to stop Actions emails. Save your changes. These are account-wide Actions preferences, including your other repositories. See [GitHub's current instructions](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-github-actions-notifications).

**Only quiet this repo in Gmail:** select a build email, choose **More → Filter messages like these**, and narrow the filter using the repository name `anamika-dubey/anamika-dubey.github.io` and the build/workflow text from that email. Use **Search** to confirm it matches the intended build emails. Then create the filter with **Skip the Inbox (Archive it)** and, optionally, a label such as `SCALE website builds`. The emails remain searchable. Filtering just the sender would also catch unrelated GitHub notifications. See [Gmail's filter guide](https://support.google.com/mail/answer/6579?hl=en).

## Acknowledgement

Built with [Jekyll](https://jekyllrb.com/) using the [al-folio theme](https://github.com/alshedivat/al-folio). Thank you to the theme's authors and contributors. The original MIT license is retained in [LICENSE](LICENSE).
