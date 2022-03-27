# 🕹️ imissmyarcade

We hope you have fun in our virtual arcade!

💻 Website is LIVE at http://imissmyarcade.tech/ 

Based off of https://imissmycafe.com/ but our own code


## 📅 Instructions to use with Google Calendar:

Because GitHub Pages only hosts static pages, to run this code with the Google Calendar API, clone it from the repo

Create an account and a new project at https://console.cloud.google.com/ following these instructions: https://developers.google.com/workspace/guides/create-project

Retrieve authorization credentials following these instructions: https://developers.google.com/workspace/guides/create-credentials

You will need at least a credentials key for the local host server http://localhost:8000
 and an API key

Create a Google account with Google Calendar enabled and events in the calendar.

If the app has not been published yet, add the gmail to the test users of the Google Cloud project via APIs & Services -> OAuth consent screen

Open a terminal with Python 3 and type python -m http.server 8000 to start the web server

In a browser, navigate to http://localhost:8000

🎉 Congrats! You did it!
