📌 Ticket Management System (Backend)

A role-based Ticket Management System API built with Node.js, Express, TypeScript, and PostgreSQL.
This backend handles authentication, user roles, ticket lifecycle, and secure API access for a scalable support system.

🚀 Features
🔐 JWT Authentication (Login/Register)
👥 Role-based Access Control (Admin, Agent, User)
🎫 Ticket Management (Create, Assign, Update, Track)
📊 Ticket Status Workflow (Open, In Progress, Resolved, Closed)
🧑 User Management System
🗄️ PostgreSQL Database with Sequelize ORM
📦 RESTful APIs
🧾 Secure password hashing (bcrypt)
🧩 Modular architecture (Controller / Service / Model)
🏗️ Tech Stack
Node.js
Express.js
TypeScript
PostgreSQL
Sequelize ORM
JWT (JSON Web Token)
bcryptjs
dotenv
📁 Project Structure
src/
│
├── config/          # Database configuration
├── controllers/     # Business logic
├── middleware/      # Auth middleware (JWT, roles)
├── models/          # Sequelize models
├── routes/          # API routes
├── services/        # Reusable logic layer
├── utils/           # Helper functions
└── server.ts        # App entry point
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/ticket-management-system-backend.git
cd ticket-management-system-backend
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file in root:

PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=tms_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
4️⃣ Run Database Migrations (if applicable)
npx sequelize db:migrate
5️⃣ Start Development Server
npm run dev

Server will run at:

http://localhost:5000
🔐 Authentication

All protected routes require JWT token:

Authorization: Bearer <token>
📌 API Endpoints
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
👤 User Routes
Method	Endpoint	Description
GET	/api/users	Get all users (Admin only)
GET	/api/users/:id	Get user by ID
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user
🎫 Ticket Routes
Method	Endpoint	Description
POST	/api/tickets	Create ticket
GET	/api/tickets	Get all tickets
GET	/api/tickets/:id	Get ticket by ID
PUT	/api/tickets/:id	Update ticket
DELETE	/api/tickets/:id	Delete ticket
👥 Roles
Admin
Full system access
Manage users & tickets
Agent
Handle assigned tickets
Update ticket status
User
Create tickets
View own tickets
🧠 Future Improvements
📩 Email notifications for ticket updates
📊 Dashboard analytics (tickets per status)
💬 Comments / chat inside tickets
📎 File attachments in tickets
🔔 Real-time updates with WebSockets
🧪 Sample Login
{
  "email": "admin@example.com",
  "password": "123456"
}
🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Aamir Shah
Built as part of a learning project to master full-stack development with PostgreSQL and TypeScript.
