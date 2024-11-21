# Lab 4: Fetching Data using Custom Hook (useFetch)

This lab demonstrates how to fetch data in a React application using a custom hook (useFetch) and a corresponding component (FetchData). By encapsulating the logic for data fetching into a reusable hook, the codebase becomes more maintainable and efficient.

## Objectives:
- Learn how to fetch data from an external API using the fetch method in React.
- Implement a custom React hook (useFetch) to encapsulate data-fetching logic.
- Dynamically render retrieved data in the UI, displaying details such as name, importance, benefits, and best time to consume.

## Project Structure:
- *UseFetch.jsx*: Implements a custom hook to fetch and return data from a given API URL.
- *FetchData.jsx*: A React functional component to render the fetched data dynamically in the UI.
- *FetchData.css*: Stylesheet for the FetchData component.

## Features:
1. *Custom Hook (useFetch)*:
   - Encapsulates reusable logic for fetching data from a URL.
   - Utilizes useState and useEffect hooks for asynchronous operations.

2. *Fetching and Rendering Data*:
   - Fetches data from an API endpoint.
   - Dynamically displays data in a list format, including key details: name, importance, benefits, and best time to consume.

3. *Dynamic Data Handling*:
   - Renders a list of data objects using the map() method in React.
   - Ensures clean and efficient code by separating concerns between the hook and the UI components.

## How to Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-developer-skills-network/custom_hook.git
   cd custom_hook