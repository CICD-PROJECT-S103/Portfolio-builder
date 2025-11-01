# Portfolio Backend API Test Report

**Test Date:** November 1, 2025  
**Backend URL:** http://localhost:8058  
**Database:** MySQL 8.0.41 (Portfolio database)

---

## ✅ Test Results Summary

| # | API Endpoint | Method | Status | Response |
|---|--------------|--------|--------|----------|
| 1 | `/customer/signup` | POST | ✅ PASS | 200::Registration done successfully |
| 2 | `/customer/signin` | POST | ✅ PASS | 200::{JWT_TOKEN} |
| 3 | `/personalinfo/addinfo` | POST | ✅ PASS | 200::Information added successfully |
| 4 | `/Projects/add` | POST | ✅ PASS | 200::Project added successfully. |
| 5 | `/WorkExperince/add` | POST | ❌ FAIL | 500::Internal Server Error |
| 6 | `/skills/add` | POST | ✅ PASS | 200::Technical Skill added successfully. |
| 7 | `/customer/logout` | POST | ✅ PASS | 200::Logout successful. Token invalidated. |

**Success Rate:** 6/7 (85.7%)

---

## 📋 Detailed Test Cases

### Test 1: User Signup ✅
**Endpoint:** `POST /customer/signup`  
**Request Body:**
```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:** `200::Registration done successfully`  
**Status:** SUCCESS

---

### Test 2: User Signin ✅
**Endpoint:** `POST /customer/signin`  
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:** `200::eyJhbGciOiJIUzI1NiJ9...` (JWT Token)  
**Token Expiry:** 24 hours  
**Status:** SUCCESS

---

### Test 3: Add Personal Info ✅
**Endpoint:** `POST /personalinfo/addinfo`  
**Headers:** `Authorization: Bearer {token}`  
**Request Body:**
```json
{
  "email": "john@example.com",
  "fullname": "John Doe",
  "professionalTitle": "Full Stack Developer",
  "phoneNumber": "+1234567890",
  "location": "New York, USA",
  "personalWebsite": "https://johndoe.com",
  "professionalBio": "Passionate developer",
  "githubProfile": "https://github.com/johndoe",
  "linkedinProfile": "https://linkedin.com/in/johndoe"
}
```
**Response:** `200::Information added successfully`  
**Status:** SUCCESS

---

### Test 4: Add Project ✅
**Endpoint:** `POST /Projects/add`  
**Headers:** `Authorization: Bearer {token}`  
**Request Body:**
```json
{
  "personalInfo": {
    "email": "john@example.com"
  },
  "title": "E-Commerce Platform",
  "description": "Full-featured shopping platform",
  "liveUrl": "https://shop.example.com",
  "githubUrl": "https://github.com/johndoe/ecommerce",
  "technologies": "React, Node.js"
}
```
**Response:** `200::Project added successfully.`  
**Status:** SUCCESS

---

### Test 5: Add Work Experience ❌
**Endpoint:** `POST /WorkExperince/add`  
**Headers:** `Authorization: Bearer {token}`  
**Request Body (INCORRECT):**
```json
{
  "personalInfo": {"email": "john@example.com"},
  "company": "Tech Corp",
  "position": "Senior Developer",
  "startDate": "2020-01-01",
  "endDate": "2023-12-31",
  "description": "Led projects"
}
```
**Response:** `500::Internal Server Error`  
**Status:** FAILED

**Issue:** The model expects `duration` field (String) instead of `startDate` and `endDate`.

**Correct Request Body:**
```json
{
  "personalInfo": {"email": "john@example.com"},
  "company": "Tech Corp",
  "position": "Senior Developer",
  "duration": "Jan 2020 - Dec 2023",
  "description": "Led development of multiple projects"
}
```

---

### Test 6: Add Technical Skills ✅
**Endpoint:** `POST /skills/add`  
**Headers:** `Authorization: Bearer {token}`  
**Request Body:**
```json
{
  "personalInfo": {"email": "john@example.com"},
  "skillName": "JavaScript",
  "proficiencyLevel": "Expert"
}
```
**Response:** `200::Technical Skill added successfully.`  
**Status:** SUCCESS

---

### Test 7: User Logout ✅
**Endpoint:** `POST /customer/logout`  
**Headers:** `Authorization: Bearer {token}`  
**Response:** `200::Logout successful. Token invalidated.`  
**Status:** SUCCESS

---

## 🔍 Additional API Endpoints (Not Tested)

### Delete Endpoints
- `DELETE /Projects/delete/{id}` - Delete a project
- `DELETE /WorkExperince/delete/{id}` - Delete work experience
- `DELETE /skills/delete/{id}` - Delete a skill

---

## 📊 Database Tables Created

| Table Name | Purpose | Key Fields |
|------------|---------|------------|
| `customer` | User accounts | email (PK), fullname, password |
| `personalinfo` | User profiles | email (PK), professionalTitle, bio, etc. |
| `projects` | Portfolio projects | id (PK), email (FK), title, liveUrl, etc. |
| `workexperince` | Work history | id (PK), email (FK), company, position, duration |
| `techincalskills` | Technical skills | id (PK), email (FK), skillName, proficiencyLevel |

---

## 🔒 Authentication & Security

- **JWT Token:** Generated on signin, expires in 24 hours
- **Token Format:** `Bearer {token}`
- **Token Blacklist:** Implemented via `TokenHandle` class
- **Logout:** Invalidates token by adding to blacklist
- **CORS:** Enabled for all origins (`@CrossOrigin(origins = "*")`)

---

## 🎯 Recommendations

1. **Fix Work Experience API:** Update field from `duration` to accept `startDate` and `endDate` for better data structure
2. **Add GET endpoints:** Implement retrieval endpoints for:
   - Get user profile
   - Get all projects for a user
   - Get all work experiences
   - Get all skills
3. **Add UPDATE endpoints:** Allow editing of existing data
4. **Error Messages:** Standardize error response format
5. **API Documentation:** Generate Swagger/OpenAPI documentation
6. **Validation:** Add input validation for all fields
7. **Security:** 
   - Implement password hashing (BCrypt)
   - Add rate limiting
   - Restrict CORS to specific origins in production

---

## 💾 Sample JWT Token

```
eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NjIwMTcxNTAsImV4cCI6MTc2MjEwMzU1MH0.mYcD0RhXxTT1p91qDRsoETUi3o9tr8O3yaamE6Yo5ss
```

**Decoded Payload:**
```json
{
  "email": "john@example.com",
  "iat": 1762017150,
  "exp": 1762103550
}
```

---

## ✨ Next Steps

1. ✅ Backend APIs tested (6/7 working)
2. ⏳ Update frontend to connect to backend endpoints
3. ⏳ Test full user flow from signup to portfolio creation
4. ⏳ Deploy backend to cloud (optional)
5. ⏳ Push changes to `ronit` branch

---

**Test Completed By:** GitHub Copilot  
**Backend Version:** 0.0.1-SNAPSHOT  
**Spring Boot Version:** 3.5.7
