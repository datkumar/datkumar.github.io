---
title: GigaChat
description: Real-time private chat built on WebSockets. Connect with anyone on the network and chat confidentially in rooms
code_url: https://github.com/datkumar/gigachat
tech_stack: [js, nodejs, react, socketio]
---

## Overview

- A real-time chat application that runs locally on your machine via an Express server and web-sockets
- Multi-User accomodation with private rooms available
- Enter the room number and join that private session. Each private chat session runs isolated from each other and the messages are hidden from each other
- Chat history lives within the session as long as there is at least one person in there. If empty, the history gets cleared out

## Demo

<video controls>
  <source src="/demos/gigachat.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Instructions

- Clone the repository on your machine
- Open Two terminals. Navigate i.e. `cd` into `server` folder in one terminal and `client` folder in another
- Run `npm install` and then `npm run dev` in both terminals (first server, then client)
- Inside your browser, open a new tab and go to `http://127.0.0.1:5173` (NOT `localhost:5173`)
