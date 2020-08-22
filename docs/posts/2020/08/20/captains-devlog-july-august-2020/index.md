<!--
.. title: Captain's Devlog: July-August 2020
.. slug: captains-devlog-july-august-2020
.. date: 2020-08-20 14:29:50 UTC-04:00
.. tags: devlog, beta, testing, steam
.. description: I discuss the latest changes with Unscripted, including a brand new changelog format and distribution options.
.. type: text
-->

Hey, folks! It's about that time again where I give some insight on what's been going on with Unscripted. Get comfortable; I got a lot to tell you.

## A brand new identity

![Itch.io header](https://img.itch.zone/aW1nLzM5NTcwMDcucG5n/original/zkmTli.png)

Back in May/June, I started working on bringing a new, adaptable look to Unscripted, built off of the Ayu color scheme. This feature is ready to go in the game and the look has also been adopted on the official website. The Itch.io page also saw an interface update to better match the colors.

In late June, Apple unveiled a new look for macOS Big Sur during their WWDC event. I wanted to make Unscripted feel at home on the new update while giving it the signature identity it's had since inception. So, with the new macOS Big Sur icons, I've given the Unscripted brand more subtlety. Gone are the random bubble artworks from before; in their place, we're using gradients with Unscripted's signature brand colors.

## A better minigame has landed

![New minigame look](/assets/img/preview3.png)

Since June, I've been working on giving the minigame in Unscripted a major overhaul. As it exists in the demo, it felt more of a tacked-on gimmick with no potential meaning whatsoever. In my previous devlog, I stated that I wanted to change that:

> I hope that, within the next month or so, I will have a fully working rewrite of the minigame with more appealing visuals, a coherent plot, and a new input mechanic.

Since then, I've made several improvements to the minigame:

- First, the visuals. Gone is the tacky minigame look with some mastodon and coins. Now, the tileset consists of pixel art walls, floors, desks, etc. The main character is no longer a mastodon but Mia, an employee at a tech startup company.
- Next, there are several improvements to the Fira API and NadiaVM language. New features like interactive modes, comment support, and a more direct way of controlling the player via the API exist in the library.
- Additionally, there's a brand-new basic mode that utilizes the interactive mode in NadiaVM to send commands and play levels in real time, without complilation. I think this is a more fun way of playing the minigame than attempting to push buttons and guess the correct order to push them in.
- Besides the API and interactive improvements, the minigame now includes little "glitches" that also act as game mechanics. These bugs are to be exploited by the player to solve the puzzle, giving the game an interesting approach to solving puzzles. Sadly, we couldn't fit any portals in.
- Finally, the minigame will be better integrated into the game's plot by becoming the game that you, the player, are publishing to the PackStore Arcade! Parts of the story have been rewritten to accomodate for this change, and I hope to add more levels and content to the minigame that make it feel integrated, yet stand out.
