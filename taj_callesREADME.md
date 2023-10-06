
# E6Golf Frontend Developer Exercise

This project is a frontend application built to display information about a 9-hole round of golf played within the E6 Connect software. The application consumes data from the provided JSON files (shotsNine.json, playerData.json, and roundData.json) and presents it in a user-friendly manner.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Data Integration](#data-integration)
- [Displaying Shot Information](#displaying-shot-information)
- [Filtering Shots](#filtering-shots)
- [Additional Shot Details](#additional-shot-details)
- [User Interface](#user-interface)

## Project Overview

The goal of this exercise was to create a clean and reusable frontend application using either ES5 or ES6 JavaScript. The project leverages Vue.js, Vuetify 2 for the UI framework, and Vuex for state management. It simulates a fake API call to retrieve golf round data and display key information about each shot.

### Technologies Used

- Vue.js: This JavaScript framework was chosen for its ease of use and component-based architecture, making it ideal for building a UI-focused application like this.

- Vuetify 2: Vuetify provides pre-designed components and styles, allowing for a visually appealing and consistent user interface. It simplifies UI development and enhances the user experience.

- Vuex: Vuex is employed for state management, ensuring that data is efficiently shared across components. This central store makes it easier to handle API data and UI interactions.

### Data Integration

The application reads data from the provided JSON files (shotsNine.json, playerData.json, and roundData.json) and processes it to create a user-friendly display. A simulated API call is used to fetch this data, providing a realistic development scenario.

### Displaying Shot Information

The key data fields for each golf shot, including `courseHoleIndex`, `shotIndex`, `clubTypeKey`, `totalDistance`, `carryDistance`, `launchBallSpeed`, `launchBackSpin`, and `launchAngle`, are displayed to provide users with essential shot information.

### Filtering Shots

Users can filter shots by club type using the table sorting functionality. Adding a search function is something I would love to add, given more time.

### Additional Shot Details

Clicking on a single shot record opens a modal popup that displays additional details about the shot. This feature provides users with a deeper level of information for each shot, enhancing their understanding of the round.

### User Interface

The project prioritizes a visually appealing user interface, thanks to Vuetify's styling and component library. The layout and design have been created to make the data easy to read and interact with, ensuring a positive user experience.

### What I'd add/do differently

Meeting the base requirements of the challenge was my top priority. That being said, I would love to add an image with a hole overview. I also would love to add a 3-D simulator that takes the shot data and simulates ball flight, just like TruGolf's simulators. Given more time, I also would have added more player data, shot history, and other cool features like trends in play, what other players typically scored on the hole, etc. 
