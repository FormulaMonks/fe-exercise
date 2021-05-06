# Front-end exercise

See the [development guide](./CONTRIBUTING.md).

## Process

1. Copy this repository into your account without forking. Step-by-step:
   1. [Create a new private repository](https://github.com/new) on GitHub under your name;
   2. Clone the repository: `git clone git@github.com:Theorem/fe-exercise.git`;
   3. Change the remote URL of the cloned repository: `git remote set-url origin git@github.com:YOUR/PATH.git`;
   4. Push: `git push --all origin`.
2. Add the following collaborators to your repo:
   - `brettdewoody`
   - `jordanpapaleo`
   - `denis-sokolov`
   - `mentos`
3. Select (at least) 1 task from each of the task groups below - the choice is yours but try to complete at least 1 task from each group.
4. For each task create a feature branch, then open and merge a PR to the `main` branch when the task is completed. For each completed task we should see a corresponding PR.
5. Deploy your project so it's publicly available on the web. One option is [Netlify](https://www.netlify.com/), but many other options exist.
6. Let us know if you have any questions, and when you're finished with the project, in the designated Slack channel.

You can change any existing code or dependencies. Ideally add a brief explanation why.

At the end of the exercise, please replace the contents of this README with your explanations of what you’ve done, added, changed, or anything else that makes sense to document.

## Tasks

There are groups of tasks we have prepared for this exercise. Inside the groups the tasks at the top of the list are more important than items at the bottom.

There are purposefully too many tasks, there is no goal to do all of them. Use your judgement working on the tasks. It’s okay to skip a task that is needlessly difficult.

Please do at least one task from every group to show some diversity, though.

It’s okay to change UI design and behavior if you have good input, as long as you communicate the changes. It’s great to add something that’s not on the list if it does not cost a lot of effort.

Project designs are available [in Figma](https://www.figma.com/file/0502uQRIymsq7BEQBhid91bV/Untitled?node-id=0%3A1).

### New UI

- [ ] Add a “No Reviews Yet” screen to the Review Feedback section.
- [ ] Add a questionairre completion indicator.

### Improving UI

- [ ] Improve the layout on smaller screens. In particular, the Review feedback view looks bad right now.
- [ ] Handle avatar loading errors, make them look nicer.
- [ ] Fix the background style. Right now it depends on the page length, so when a user navigates between different pages, the bottom right corner of the background shifts around.

### New interactive features

- [ ] Add a feature to save a questionairre and continue it later.
- [ ] Add more question types: a multiple choice, a rating slider.
- [ ] Add a view for feedback you have received.
- [ ] Add a feedback period selector.

### Improving interactive features

- [ ] Add a feature to skip a question.
- [ ] Handle network errors when submitting feedback
- [ ] Retry button on the crash screen should do something
