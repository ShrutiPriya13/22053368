# Social Media Analytics Backend

This is a backend service for analyzing user activity, posts, and comments from a social media application. It provides APIs to fetch users, posts, and comments while also offering insights such as the most active users and the most popular posts.

## 🚀 Features
- Fetch registered users
- Retrieve posts by a specific user
- Get comments on posts
- Identify the top 5 users with the most posts
- Fetch latest or most popular posts

## 🛠 Tech Stack
- **Node.js** with **Express.js**
- **TypeScript**
- **REST APIs**
- **Supabase** (for database, if applicable)
- **Docker** (optional for containerization)

## 📂 Project Structure
/src ├── services/ # API calls & business logic ├── routes.ts # Express routes ├── types.ts # TypeScript interfaces ├── server.ts # Entry point ├── .env # Environment variables (ignored in Git)

markdown
Copy
Edit

## 📌 API Endpoints

### **Get Users**
- **URL:** `GET /users`
- **Description:** Fetches all users
- **Response:**
  ```json
  {
    "users": {
      "1": "John Doe",
      "2": "Jane Doe",
      ...
    }
  }
Get User Posts
URL: GET /users/:userid/posts

Example: GET /users/1/posts

Response:

json
Copy
Edit
{
  "posts": [
    { "id": 246, "userid": 1, "content": "Post about ant" },
    { "id": 161, "userid": 1, "content": "Post about elephant" }
  ]
}
Get Post Comments
URL: GET /posts/:postid/comments

Example: GET /posts/150/comments

Response:

json
Copy
Edit
{
  "comments": [
    { "id": 3893, "postid": 150, "content": "Old comment" },
    { "id": 4791, "postid": 150, "content": "Boring comment" }
  ]
}
🚀 Getting Started
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Run the Backend
bash
Copy
Edit
npx ts-node src/server.ts
or compile and run:

bash
Copy
Edit
npx tsc && node dist/server.js
3️⃣ Test APIs
Use Postman, cURL, or a browser to test the API endpoints.

🛠 Environment Variables
Create a .env file in the root directory and configure necessary API keys, database URLs, or other environment settings.

💡 Contributing
Feel free to submit pull requests or open issues to improve the project!

📜 License
This project is open-source under the MIT License.

💡 Happy Coding! 🚀

vbnet
Copy
Edit

Let me know if you need any modifications! 😊
