# Portfolio Builder - Quick Start Guide

## 🚀 How to Start the Application

### Method 1: Automated Script (Recommended)
```powershell
# Run the startup script
.\start-servers.ps1
```

### Method 2: Manual Start

#### Step 1: Start MySQL
Make sure MySQL is running on port 3306 with:
- Username: `root`
- Password: `root`
- Database: `Portfolio` (will be auto-created)

#### Step 2: Start Backend Server
```powershell
# Open Terminal 1
cd portfoliobackend-project
.\mvnw.cmd spring-boot:run
```
✅ Backend will run on: **http://localhost:8058**

#### Step 3: Start Frontend Server
```powershell
# Open Terminal 2
cd portfolio_FE
npm run dev
```
✅ Frontend will run on: **http://localhost:3000**

---

## 📝 Testing the Application

### 1. Create Account
1. Visit http://localhost:3000
2. Click **"Sign Up"**
3. Fill in:
   - Full Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
4. Click **"Create Account"**
5. You'll be automatically logged in and redirected to the portfolio builder

### 2. Try Existing Account
If the account already exists, you'll see:
```
❌ email id exist
```
Just use the **"Sign In"** button instead.

### 3. Login with Existing Account
1. Click **"Sign In"**
2. Enter email: `john@example.com`
3. Click **"Continue with Email"**
4. Enter password: `password123`
5. Click **"Log In"**

### 4. Invalid Login
If credentials are wrong, you'll see:
```
❌ invalid credentials
```

---

## 🔧 Configuration

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/Portfolio
spring.datasource.username=root
spring.datasource.password=root
server.port=8058
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8058
```

---

## 🐛 Bug Fixes Applied

### ✅ Fixed Issues:
1. **User validation** - Backend now checks if user exists before login
2. **Error handling** - Frontend correctly parses backend error codes (401, 200)
3. **Response parsing** - Fixed `statusCode::message` format parsing
4. **Email duplicate check** - Shows proper error when email already exists
5. **Invalid credentials** - Shows proper error for wrong password/email

### Backend Error Codes:
- `200::` - Success
- `401::` - Unauthorized/Invalid credentials/Email exists

---

## 🔍 Troubleshooting

### Backend won't start
```powershell
# Check if port 8058 is already in use
netstat -ano | findstr :8058

# Kill the process if needed
taskkill /PID <PID> /F
```

### Frontend won't start
```powershell
# Check if port 3000 is already in use
netstat -ano | findstr :3000

# Install dependencies if needed
cd portfolio_FE
npm install
```

### MySQL connection failed
```powershell
# Check MySQL service
Get-Service | Where-Object {$_.Name -like "*mysql*"}

# Create database manually
mysql -u root -proot -e "CREATE DATABASE Portfolio;"
```

### API calls failing
Check that:
1. Backend is running on http://localhost:8058
2. Frontend `.env.local` has correct API URL
3. MySQL service is running
4. Database `Portfolio` exists

---

## 📊 Test Data

### Test User 1
- Email: `john@example.com`
- Password: `password123`

### Test User 2 (Create Your Own)
- Use any valid email
- Password must be at least 6 characters

---

## 🛑 How to Stop Servers

### If using automated script:
```powershell
# Get job IDs
Get-Job

# Stop specific jobs
Stop-Job <JobID>
```

### If running manually:
Press `Ctrl+C` in each terminal window

---

## 📁 Project Structure

```
Portfolio-builder/
├── portfoliobackend-project/      # Spring Boot Backend
│   ├── src/main/java/
│   │   └── com/klu/backend/
│   │       ├── controller/        # REST Controllers
│   │       ├── model/            # JPA Entities & Services
│   │       └── repository/       # JPA Repositories
│   └── src/main/resources/
│       └── application.properties
│
├── portfolio_FE/                  # Next.js Frontend
│   ├── app/                      # Next.js App Router
│   ├── components/               # React Components
│   ├── contexts/                 # Auth Context
│   ├── lib/                      # API Service (api.ts)
│   └── .env.local               # Environment Variables
│
├── start-servers.ps1             # Automated startup script
└── README.md                     # This file
```

---

## ✅ Features Working

- ✅ User Signup with validation
- ✅ Duplicate email check
- ✅ User Login with credential verification
- ✅ JWT token generation & validation
- ✅ Session persistence (localStorage)
- ✅ Logout with token invalidation
- ✅ Portfolio builder (7 steps)
- ✅ Save to MySQL database
- ✅ Dynamic navbar (auth-aware)

---

## 📞 Need Help?

Check the logs:
```powershell
# Backend logs
Receive-Job <BackendJobID>

# Frontend logs
Receive-Job <FrontendJobID>
```

---

**Created:** November 1, 2025  
**Frontend:** Next.js 14 + TypeScript  
**Backend:** Spring Boot 3.5.7 + Java 21  
**Database:** MySQL 8.0.41
