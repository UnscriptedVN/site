<!-- 
.. title: v1.2.3 has been released, and a new issue tracker!
.. slug: v123-has-been-released-and-a-new-issue-tracker
.. date: 2020-05-15 14:07:03 UTC-04:00
.. tags: devlog, update, github
.. description: I've pushed out a new update to the extended demo (v1.2.3) and have migrated new issues to GitHub.
.. type: text
-->

Hey, everyone!

I've pushed out an update with tons of quality of life improvements and bug fixes. If you find anything out of the ordinary or encounter a new bug, let me know! You can join the Discord server and tell me there, or use the issue tracker.

Speaking of the issue tracker, there's been a big change regarding bug reports. Since I started coding Unscripted, I used the YouTrack issue tracker to manage issues related to the game, and it's served me well thus far. However, there are some limitations with YouTrack currently, and it's not the best experience for play testers or regular players; it's still heavily developer-oriented and may be daunting. After working with my team and a handful of play testers, I'm pleased to announce that we're going all in with GitHub!

Starting with this release, if you want to file a bug report or make a feature request, create an issue on GitHub at [https://github.com/UnscriptedVN/issues/issues/](https://github.com/UnscriptedVN/issues/issues/). You can also click the message icon in the game menu or press Shift+B while in-game to open GitHub.

Here's the full changelog for those who are interested:

- Resolves an issue where minigame levels with "collect" in Basic Mode fail due to incorrect VM code.
- Fixes a couple of minor typos, including pronoun conjugation agreement issues.
- Resolves an issue where attempting to view the license on a read-only file system fails (IOError).
- Adds more details about the different game modes and a preview image.
- Adds new "Warp Speed" option to minigame preview animation speeds.
- Adds options to show hidden NadiaVM commands and reduce spacing in VM preview window in Basic Mode.
- Adds an option to forcefully show the editor in Advanced Mode when an existing VM file is present.
- Improves minigame experience by rolling back to last checkpoint if an error occurs during the minigame.
- Prevents minigame overriding between modes by namespacing NadiaVM based on game mode.
- Adds keybinding 'l' to open the Unscripted log file (or select it in the file browser).
- Makes AliceOS Desktop keybind ('d') universally available, not just the game menu or in the quick menu.
- Updates Fira API, which includes fixes for reporting proper list coordinates when calling "as_list".
- Increases the font contrast on muted text colors in the game menu.
- Adds message bubble around NVL text in chat history.
- Renames "John Doe" on empty saves to "Foo Bar" to be gender neutral.
- Removes "entitlements.plist" from Windows and Linux builds.
- Adds option to display the chapter number and chapter title when switching to a new chapter.
- Changes some hiding animations of characters to the side instead of the standard hide.
- Changes default tab in Help to About instead of Keyboard.
- Changes RepoHive icon to a flat icon to remain visually consistent.
- Improved new credits screen with condensed spacing.
- Adds keybinding 'Shift+B' to open the bug reporter.
- Replaces "Back", "Hub", "Report a Bug", and "Quit" with icon buttons in game menu.
- Moves back button in the game menu to far left.
- Moves bug reporter button in the game menu to far right.
- Fixes alignment of the game menu buttons on the right side.
- Updates bug reporting links to new issue tracking pages on GitHub.

I hope you enjoy this update as much as I did writing it, and I look forward to any bug reports or feature requests on GitHub.

\- Marquis