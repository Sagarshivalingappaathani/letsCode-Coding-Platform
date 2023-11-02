<img src="https://github.com/Sagarshivalingappaathani/letsCode/assets/121311033/e88b2239-2e5a-41f1-978d-6071f07d47a5" alt="logo" width="200" style="border-radius: 10px; margin: 10px;">

### Project Description:
- This platform is designed to resemble popular coding websites such as LeetCode and GeeksforGeeks.
-  Its primary purpose is to assist users in competitive coding. Users can solve coding problems and track their progress, including the number of problems they've solved in each topic.
-   Additionally, they can participate in coding contests to further enhance their skills.
- [Explore the live demo →](https://lets-code-pink.vercel.app/)(see this in desktop)
- [See the live demo video →](https://www.youtube.com/watch?v=iezi3JEZW10&t=306s)

  
### Features Implemented in the project 

1. **Authorization**
   - Email and Password Authentication
   - Sign In and Sign Up through Google and Github

2. **Problems along with solution**
   - Added 8 challenging problems along with solutions in C++ and Java

3. **Code Execution**
   - Utilizes the Judge0 API for running and evaluating code submissions

4. **Educational Courses**
   - Includes 3 comprehensive courses: Data Structures and Algorithms (DSA), C++, and JavaScript

5. **Contests**
   - Added a contest page where users can participate in timed contests.
   - Users receive a random problem and have 20 minutes to solve it. If solved, it's added to their profile.

6. **User Profile**
   - Basic user details
   - Problem distribution statistics using a pie chart (easy, medium, hard problems solved)
   - Displaying all solved problems
   - User activity log and calendar
  

### Upcoming Features

- **User Forums:** Createing a community for users to discuss problems, solutions, and coding strategies.

- **Real-time Code Collaboration:** Implementing real-time collaborative code editing and debugging.

- **Leaderboards:** Adding leaderboards to track user progress and encourage friendly competition.

- **In-Depth Analytics:** Provideing detailed analytics on user performance and learning progress.

- **User Profile Customization:** Enable users to customize their profiles with avatars, bios, and more.

- **Dark Mode:** Implementing the dark mode for users who prefer it.


## Tech Stack:

- **TypeScript (TS):** A statically typed superset of JavaScript for enhanced code quality and developer experience.
- **JavaScript (JS):** The core programming language used for web development.
- **React:** A popular JavaScript library for building user interfaces.
- **Next.js:** A React framework for server-rendered applications with routing and other features.
- **Tailwind CSS:** A utility-first CSS framework for fast and responsive web development.
- **Firebase:** A cloud-based platform for building web and mobile applications, used for authentication and data storage.
- **Judge0 API:** An API for executing and evaluating code submissions in various programming languages.

### Prerequisites to Run this Project In your System
Before you begin, ensure you have met the following requirements:

- **Node.js installed on your machine**
- **Firebase Setup:** to store problems and users' details
- **Google and Github Developer Console credentials for OAuth2.0 (client ID and client secret)**


## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/Sagarshivalingappaathani/letsCode.git
   ```
2. **Change Directory:**

   ```
   cd letsCode
   ```
3. **Install project dependencies:**

   ```
    npm install
   ```
4. **Create a .env file in the project root and add your environment variables how i made in .env.example file:**
   ```
    NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
    NEXT_PUBLIC_X_RAPIDAPI_KEY=YOUR_X_RAPIDAPI_KEY


5. **Start the application:**

   ```
   npm run dev
   ```


### References used

- Next.js Documentation
- Tailwind CSS
- Various YouTube tutorials
- Google's invaluable support
- FreeCodeCamp

<br>

**🌟Thank you for embarking on this coding journey with us! We're thrilled to have you on board and can't wait to see the incredible code you'll craft with letsCode. Happy coding and let's build a brighter future together!**


