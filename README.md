# React User Fetch App

This project is a simple React application that fetches and displays user information from an API. The application consists of a single component that retrieves user data and displays it on the screen.

## Functional Requirements

### Data Fetching

1. The application implements an asynchronous operation within the `UserInfo` component to fetch user data from the provided URL upon component mounting.

### State Management

1. The application utilizes React's `useState` hook to manage the fetched data state within the `UserInfo` component.

### Effect Hook

1. The application uses React's `useEffect` hook to trigger the data fetching operation when the component mounts. The fetching operation is performed only once.

### Conditional Rendering

1. The application displays a placeholder text (`<h2>Loading data…</h2>`) while the data is being fetched.
2. Once the data is fetched, the application displays the user's name, email, and username.
3. If there is an error during the fetching process, the application shows an error message (`<h2>Error fetching data</h2>`).

## API Endpoint

The application fetches user data from the following API endpoint:

- `https://jsonplaceholder.typicode.com/users/1`

## Installation

To run this project, clone the repository and install the dependencies:

```bash
npm install
```

## Usage

After installing the dependencies, you can start the application with:

```bash
npm start
```

The application will be available at `http://localhost:3000`.
