# Job Posting App 🏢🚀

This is a **Next.js** application that allows users to create and view job posts. The app fetches job listings from the backend and displays them in a modern, responsive UI.

## 🚀 Features

- ✅ Create and list job postings  
- ✅ Fetch job data dynamically  
- ✅ Stores a unique user ID in `localStorage`  
- ✅ Responsive UI with Tailwind CSS  
- ✅ Optimized for performance  

---

## 🛠 Setup Instructions  

### 1️⃣ Clone the Repository  
To get started, clone this repository to your local machine using Git:  

```bash
git clone https://github.com/your-username/job-posting-app.git
cd recruit


npm install

DATABASE_URL=your_database_url_here

npm run dev


/recruit
│── /components       # Reusable UI components
│── /src/app          # Next.js pages (Routing)
│── /server           # Server-side logic (Prisma actions)
│── /public           # Static assets
│── .env.local        # Environment variables
│── package.json      # Project dependencies
│── README.md         # Documentation


⚙️ How It Works
🔹 User Identification
When a user visits the page, the app generates a unique userId and stores it in localStorage.
If the user already has an ID, it retrieves it from storage.
🔹 Fetching Jobs
The FetchJobs(userId) function retrieves job posts created by the user.
If no jobs exist, a message is displayed.
🔹 Posting Jobs
Users can create a new job post via the /company/jobs/new page.
🔹 UI Components
The job listings are displayed using the <JobPosts /> component.
A button allows users to create new job postings.
🛠 Technologies Used
This project is built with the following technologies:

Next.js – React framework for fast, scalable applications
TypeScript (optional) – For type safety
Prisma – Database ORM
Tailwind CSS – For styling
LocalStorage – To store user data
API Routes – For fetching job data