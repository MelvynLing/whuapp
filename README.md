# West Ham United Team App

Please follow the link below to see the app live:
https://westhamapp.herokuapp.com/

This is a firebase app with both public and private routes. The player and match data was uploaded to firebase via a JSON file that I had created.

home page, with main, matches, team, and promotion sections. All links are working and live. The promotions input is linked with a firebase database to store contestants emails. This is a public page/route
![](screenshots/wh1.png)
![](screenshots/wh2.png)
![](screenshots/wh3.png)
![](screenshots/wh4.png)

The team link in the nav bar leads the user to a page listing all the West Ham Senior players in a card format. This is a public page/route (/the_team)
![](screenshots/whteam.png)

The schedule link in the nav bar also leads the user to another page. this time is page listing all west ham games. It allows the user to filter the games by result and by if the games have been played or not. It also shows the league table to the right. This is a public page/route (/schedule)
![](screenshots/whsched.png)


The private routes allow the owner of the page to change and maniuplate the team and schedules, allowing the owner of the page to keep up to date with the team and update this matches and players if needd (/sign_in)
![](screenshots/whlogin.png)



The dashboards below allow the owner of the page to access the necessary pages needed to maniuplate their teams rosters and schedules so taht they can udate scores etc.
(/dashboard)
![](screenshots/whdash.png)
(/admin_matches)
![](screenshots/whtd.png)
(/admin_players)
![](screenshots/whpd.png)

The section below shows where the page owner can maniplyuate the teams and players, either creating new players/matches or edititng them.
(/admin_matches/edit_match)
![](screenshots/whaddm.png)
(/admin_players/add_players)
![](screenshots/whaddp.png)

