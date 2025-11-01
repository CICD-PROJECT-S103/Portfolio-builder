# API Testing Script for Portfolio Backend
Write-Host "Portfolio Backend API Test Suite" -ForegroundColor Cyan
Write-Host ""

$baseUrl = "http://localhost:8058"
$token = ""

# Test 1: User Signup
Write-Host "[TEST 1] User Signup API" -ForegroundColor Yellow
try {
    $signupBody = '{"fullname":"John Doe","email":"john@example.com","password":"password123"}'
    $signupResponse = Invoke-WebRequest -Uri "$baseUrl/customer/signup" -Method POST -Headers @{"Content-Type"="application/json"} -Body $signupBody
    Write-Host "SUCCESS: $($signupResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 2: User Signin
Write-Host "[TEST 2] User Signin API" -ForegroundColor Yellow
try {
    $signinBody = '{"email":"john@example.com","password":"password123"}'
    $signinResponse = Invoke-WebRequest -Uri "$baseUrl/customer/signin" -Method POST -Headers @{"Content-Type"="application/json"} -Body $signinBody
    $token = $signinResponse.Content
    Write-Host "SUCCESS - Token: $token" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 3: Add Personal Info
Write-Host "[TEST 3] Add Personal Info API" -ForegroundColor Yellow
try {
    $personalInfoBody = '{"email":"john@example.com","fullname":"John Doe","professionalTitle":"Full Stack Developer","phoneNumber":"+1234567890","location":"New York, USA","personalWebsite":"https://johndoe.com","professionalBio":"Passionate developer","githubProfile":"https://github.com/johndoe","linkedinProfile":"https://linkedin.com/in/johndoe"}'
    $personalInfoResponse = Invoke-WebRequest -Uri "$baseUrl/personalinfo/addinfo" -Method POST -Headers @{"Content-Type"="application/json";"Authorization"="Bearer $token"} -Body $personalInfoBody
    Write-Host "SUCCESS: $($personalInfoResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 4: Add Project
Write-Host "[TEST 4] Add Project API" -ForegroundColor Yellow
try {
    $projectBody = '{"personalInfo":{"email":"john@example.com"},"title":"E-Commerce Platform","description":"Full-featured shopping platform","liveUrl":"https://shop.example.com","githubUrl":"https://github.com/johndoe/ecommerce","technologies":"React, Node.js"}'
    $projectResponse = Invoke-WebRequest -Uri "$baseUrl/Projects/add" -Method POST -Headers @{"Content-Type"="application/json";"Authorization"="Bearer $token"} -Body $projectBody
    Write-Host "SUCCESS: $($projectResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 5: Add Work Experience
Write-Host "[TEST 5] Add Work Experience API" -ForegroundColor Yellow
try {
    $workExpBody = '{"personalInfo":{"email":"john@example.com"},"company":"Tech Corp","position":"Senior Developer","startDate":"2020-01-01","endDate":"2023-12-31","description":"Led projects"}'
    $workExpResponse = Invoke-WebRequest -Uri "$baseUrl/WorkExperince/add" -Method POST -Headers @{"Content-Type"="application/json";"Authorization"="Bearer $token"} -Body $workExpBody
    Write-Host "SUCCESS: $($workExpResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 6: Add Technical Skills
Write-Host "[TEST 6] Add Technical Skills API" -ForegroundColor Yellow
try {
    $skillsBody = '{"personalInfo":{"email":"john@example.com"},"skillName":"JavaScript","proficiencyLevel":"Expert"}'
    $skillsResponse = Invoke-WebRequest -Uri "$baseUrl/skills/add" -Method POST -Headers @{"Content-Type"="application/json";"Authorization"="Bearer $token"} -Body $skillsBody
    Write-Host "SUCCESS: $($skillsResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# Test 7: Logout
Write-Host "[TEST 7] User Logout API" -ForegroundColor Yellow
try {
    $logoutResponse = Invoke-WebRequest -Uri "$baseUrl/customer/logout" -Method POST -Headers @{"Authorization"="Bearer $token"}
    Write-Host "SUCCESS: $($logoutResponse.Content)" -ForegroundColor Green
} catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "API Testing Complete!" -ForegroundColor Cyan
