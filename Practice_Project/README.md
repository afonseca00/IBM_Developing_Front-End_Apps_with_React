# Practice_Project: Conference Event Planner

This project implements a *Conference Event Planner* using *React* and *Redux Toolkit* for state management.

## Objectives:
- Create a dynamic interface for calculating costs of conference events.
- Implement core functionalities: room selection, add-ons, and meal options.
- Use Redux Toolkit to manage global state effectively.
- Display a detailed summary of selected items and total costs.

## Project Structure:
- *ConferenceEvent.jsx*: Main component for selecting rooms, add-ons, and meals.
- *VenueSlice.js*: Manages Redux state for selected rooms.
- *avSlice.js*: Manages Redux state for add-ons such as projectors and speakers.
- *mealsSlice.js*: Handles logic for selecting meal options.
- *store.js*: Configures the Redux store.
- *TotalCost.jsx*: Displays the total cost of selected items along with a detailed summary table.

## Features:
1. *Room Selection*:  
   - Choose rooms with specific capacities and costs.  
   - Limit selections for certain rooms, such as the auditorium (maximum of 3 units).  

2. *Add-Ons*:  
   - Add optional items like projectors, microphones, whiteboards, and signage.  

3. *Meals*:  
   - Select meal options such as breakfast, high tea, lunch, and dinner.  
   - Calculate costs based on the number of attendees.  

4. *Detailed Summary*:  
   - Display selected items in a table format, including unit cost, quantity, and subtotal.  

## Technologies Used:
- *React*: For creating components and managing client-side logic.
- *Redux Toolkit*: For global state management.
- *CSS*: For styling and layout.
- *JavaScript (ES6)*: For logic and event handling.

## How to Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-developer-skills-network/conference_event_planner.git
   cd conference_event_planner