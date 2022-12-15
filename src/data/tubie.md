## Tubie KTV --- A Home Karaoke System

- Scrape MVs from YouTube.
- Use VLC player to control the playlist, switch audio track, etc with low delay via Lua scripting.
- A web front for users to pass commands and view history.

The main idea is to control VLC video play in real-time. We customize a Lua script to implement the APIs such as adding/skipping songs and switching the audio track without delay. A NodeJS backend is used for maintaining the playlist and bridging the frontend and VLC player via Socket and REST. In the Preact frontend, users can view history, query the song library and edit the current playlist. Note the song library was built by scrapping YouTube, making use of the related videos and keywords in their titles.