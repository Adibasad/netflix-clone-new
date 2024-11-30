# netflix-clone-new

A dynamic and responsive Netflix clone built with React, featuring real-time data fetching and seamless movie trailer playback. This project replicates the core functionalities of Netflix with a sleek and modern user interface.


Website: [Netflix Clone Demo](https://netflix-clone-b04c1-61e38.web.app)

![Screenshot (10)](https://github.com/user-attachments/assets/c4104a7e-c9b3-4f24-92a8-fd1132675626)

![Screenshot (11)](https://github.com/user-attachments/assets/23382b21-a5d6-4e03-9aec-12e7a9e7a2a0)

![Screenshot (13)](https://github.com/user-attachments/assets/8cbd5d29-a96b-4e2b-beed-f1a232499af0)

![Screenshot 2024-11-30 112959](https://github.com/user-attachments/assets/3a20fcaf-fd6b-456b-b0df-3ad20d592b17)

Can play trailer!



Features
Real-Time Data Fetching: Utilizes the TMDb API to fetch up-to-date information on movies and TV shows.
Trailer Playback: Integrates react-youtube and movie-trailer packages to provide effortless streaming of movie and show trailers directly within the app.
Responsive Design: Ensures optimal viewing experience across a wide range of devices, including desktops, tablets, and mobile phones.
Intuitive UI: Mimics Netflix's sleek and user-friendly interface for easy navigation and content discovery.
Dynamic Categories: Displays content sorted into various genres and categories, updating in real-time.
Hover Effects: Interactive hover effects reveal additional information and playback options for a more engaging user experience.
Search Functionality: Allows users to search for their favorite movies and TV shows effortlessly.
User Authentication: Users can register and log in using Express and MongoDB backend for a secure experience.
Optimized Performance: Efficient loading and rendering of content for a smooth and fast user experience.
Technologies Used
Frontend:
React
react-youtube
movie-trailer
Axios
CSS3
HTML5
Backend:
Express
MongoDB
Mongoose
bcryptjs (for password hashing)
jsonwebtoken (for JWT-based authentication)
API:
The Movie Database (TMDb) API
Getting Started
Follow these instructions to set up the project locally on your machine.

Prerequisites
Node.js (v12 or later)
npm
Installation
Clone the repository

bash
Copy code
git clone https://github.com/your-username/netflix-clone.git
Navigate to the project directory

bash
Copy code
cd netflix-clone
Install dependencies

bash
Copy code
npm install
Obtain TMDb API Key

Sign up at TMDb to get a free API key.
Create a .env file in the root directory and add your API key:
makefile
Copy code
REACT_APP_TMDB_API_KEY=your_api_key_here
Setup MongoDB

Create a MongoDB database (you can use MongoDB Atlas for cloud-based MongoDB).
Update your .env file to include your MongoDB connection string:
makefile
Copy code
MONGO_URI=your_mongodb_connection_string_here
Start the development server for the frontend

bash
Copy code
npm start
Start the backend (Express server)

In the root project directory, create a server.js file or use the one in your backend folder. Then run:
bash
Copy code
node server.js
Open your browser

Visit http://localhost:3000 to view the app.
Usage
User Authentication: Users can register and log in using the backend API. After logging in, they will be able to access the main Netflix clone page.
Browse through different categories to discover movies and TV shows.
Hover over a movie/show poster to view additional details and play the trailer.
Use the search bar to find specific titles.
Project Structure
css
Copy code
netflix-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Nav.jsx
│   │   └── Row.jsx
│   ├── utils/
│   │   ├── requests.js
│   │   └── axios.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── server/
│   ├── server.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── authRoutes.js
│   └── controllers/
│       └── authController.js
└── README.md
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a new branch
bash
Copy code
git checkout -b feature/YourFeatureName
Make your changes
Commit your changes
bash
Copy code
git commit -m 'Add some feature'
Push to the branch
bash
Copy code
git push origin feature/YourFeatureName
Open a Pull Request
License
This project is licensed under the MIT License.

Acknowledgements
Netflix for the inspiration.
TMDb for the comprehensive movie and TV data.
React community for the amazing ecosystem.
YouTube for trailer streaming.
Contact
Adiba Sadaf
Email: adibasadaf300@gmail.com
Feel free to explore, use, and enhance this project. If you like it, give it a ⭐️!
