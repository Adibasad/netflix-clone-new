﻿# netflix-clone-new

A dynamic and responsive Netflix clone built with React, featuring real-time data fetching and seamless movie trailer playback. This project replicates the core functionalities of Netflix with a sleek and modern user interface.


Website: [Netflix Clone Demo](https://netflix-clone-b04c1-61e38.web.app)

![Screenshot (10)](https://github.com/user-attachments/assets/c4104a7e-c9b3-4f24-92a8-fd1132675626)

![Screenshot (11)](https://github.com/user-attachments/assets/23382b21-a5d6-4e03-9aec-12e7a9e7a2a0)

![Screenshot (13)](https://github.com/user-attachments/assets/8cbd5d29-a96b-4e2b-beed-f1a232499af0)

![Screenshot 2024-11-30 112959](https://github.com/user-attachments/assets/3a20fcaf-fd6b-456b-b0df-3ad20d592b17)

Can play trailer!




## Features

- **Real-Time Data Fetching:** Utilizes the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch up-to-date information on movies and TV shows.
- **Trailer Playback:** Integrates `react-youtube` and `movie-trailer` packages to provide effortless streaming of movie and show trailers directly within the app.
- **Responsive Design:** Ensures optimal viewing experience across a wide range of devices, including desktops, tablets, and mobile phones.
- **Intuitive UI:** Mimics Netflix's sleek and user-friendly interface for easy navigation and content discovery.
- **Dynamic Categories:** Displays content sorted into various genres and categories, updating in real-time.
- **Hover Effects:** Interactive hover effects reveal additional information and playback options for a more engaging user experience.
- **Search Functionality:** Allows users to search for their favorite movies and TV shows effortlessly.
- **Optimized Performance:** Efficient loading and rendering of content for a smooth and fast user experience.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [react-youtube](https://www.npmjs.com/package/react-youtube)
  - [movie-trailer](https://www.npmjs.com/package/movie-trailer)
  - [Axios](https://axios-http.com/)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **API:**
  - [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd netflix-clone
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. **Obtain TMDb API Key**
   - Sign up at [TMDb](https://www.themoviedb.org/) to get a free API key.
   - Create a `.env` file in the root directory and add your API key:
     ```
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```
5. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
6. **Open your browser**
   - Visit `http://localhost:3000` to view the app.

## Usage

- Browse through different categories to discover movies and TV shows.
- Hover over a movie/show poster to view additional details and play the trailer.
- Use the search bar to find specific titles.
  
## Project Structure

```
netflix-clone/
├── client-side/                          # Client-side (React)
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/              # React components for UI
│   │   │   ├── Banner.jsx
│   │   │   ├── Nav.jsx
│   │   │   └── Row.jsx
│   │   ├── utils/                   # Utility files for API requests
│   │   │   ├── requests.js
│   │   │   └── axios.js
│   │   ├── App.js                   # Main React app
│   │   ├── index.js                 # React entry point
│   │   └── ...
│   ├── .env                         # Environment variables for frontend (e.g., API keys)
│   ├── package.json                 # Dependencies and scripts for React
│   └── README.md                    # Frontend specific readme (optional)
├── server-side/                          # Server-side (Express + MongoDB)
│   ├── models/                      # Mongoose models for MongoDB
│   │   ├── User.js                  # Example user model
│   │   └── ...
│   ├── config/                      # Configuration files
│   │   ├── db.js                    # MongoDB connection setup
│   │   └── ...
│   ├── server.js                    # Main Express server
│   ├── .env                         # Environment variables for backend (e.g., DB URI)
│   ├── package.json                 # Dependencies and scripts for server
│   └── README.md                    # Backend specific readme (optional)
├── .gitignore                       # Files/folders to ignore by Git
├── package.json                     # Root level package.json (optional for full-stack)
└── README.md                        # Main project readme (optional, can reference both client and server)

```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Netflix](https://www.netflix.com/) for the inspiration.
- [TMDb](https://www.themoviedb.org/) for the comprehensive movie and TV data.
- [React](https://reactjs.org/) community for the amazing ecosystem.
- [YouTube](https://www.youtube.com/) for trailer streaming.

## Contact

- **Adiba Sadaf**
- **Email:** adibasadaf300@gmail.com

---

Feel free to explore, use, and enhance this project. If you like it, give it a ⭐️!

