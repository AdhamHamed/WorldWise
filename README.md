# The WorldWise App
This is a personal trips tracking application built using React.

# The technologies are:
1. React.
2. Json Server.

## Disclaimer
If you wish to test the application locally, after pulling the code to your local machine, make sure to run a json server so you can test it fully; command line: npm run server. Also make sure that you have json server installed on your modules, if not, installing using command line: npm i json-server. And as a final, make sure the port which the server is running on it port 9000.

# In-depth expalination:
This tracker is designed to make you track your trips and specify what places from around the world you have visited thorughout your life.

You start by:
- Opening the website which will be a landing page on the first.
- Press on "Start tracking now"/"Login" button which will redirect you to login page.
- Login with the credentials that's already put in there as a placeholder
- After login, you'll be redirected to a page that's split in two:
  on the left side you'll find two buttons that shows "Cities" and "Countires", when you click on either of them, it shows the content they has from cities that you recorded before and where do they lie on the       world in which countries.
  On the right side you'll find an interactive world map.
- To start adding a city, you scroll around in the map to choose which city you'd like to add, and click on its position; a form on the left side will open which has inherited the values of coordinates and name of the city automatically, and you can add some notes to it along with a specified date of your choice on when you visited that city.
- Click add; on the left side you'll be redirected to the cities list where you'll find your new city in a list view item highlighted with a green border, and on the left side, you'll find a pin that visually represent the place you've went to, hovering on it shows the name of the city.
- To delete a city, you can simply press on the rounded "x" button in the cities' list item and it'll disappear from the whole application: the cities list, the map, and the database.

# Purpose of the project:
This project is built as an implementation for advanced state management. And representing advanced techniques and methods to implement using react hooks such as useState, useEffect, useContext, and useReducer. It also shows an important concept in building SPA which is code splitting, lazy loading and proper ways to bundle the application, so there were performance optimization techniques held in place such as "Memoization" to eliminate wasted rendering, and also lazy loading for proper bundling. The project also never runs out of many basic concepts such as props handling, components, optional rendering, derived state, and form submission handling. It showcases the ability to perform and implement such skills in professional situations and workspaces.
