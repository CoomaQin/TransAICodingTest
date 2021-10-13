# Tennis Go --- A Web Mini-game

- Used a star-like network topology, implemented bidirectional communication based on WebSocket. and configured Nginx to provide HTTPS.
- In the NodeJS back end, we implemented a physical engine to deal with collisions, rebounds, velocity, etc). It uses players’ keypresses to calculate the position of each non-stationary element in the next frame then notify each client which makes cheating theoretically impossible.
- In the front end, it renders real-time gaming graphics with 62 FPS and passes keyboard actions to the back end. We also designed the nightclub-style UI for this game