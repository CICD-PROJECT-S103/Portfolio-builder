# Portfolio Builder - Startup Guide

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Portfolio Builder - Startup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if MySQL is running
Write-Host "[1/4] Checking MySQL Service..." -ForegroundColor Yellow
$mysqlService = Get-Service | Where-Object {$_.Name -like "*mysql*"}

if ($mysqlService -and $mysqlService.Status -eq "Running") {
    Write-Host "✓ MySQL is running" -ForegroundColor Green
} else {
    Write-Host "✗ MySQL is not running!" -ForegroundColor Red
    Write-Host "Please start MySQL service first" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if Portfolio database exists
Write-Host "[2/4] Checking Database..." -ForegroundColor Yellow
try {
    $dbCheck = mysql -u root -proot -e "SHOW DATABASES LIKE 'Portfolio';" 2>$null
    if ($dbCheck -match "Portfolio") {
        Write-Host "✓ Portfolio database exists" -ForegroundColor Green
    } else {
        Write-Host "Creating Portfolio database..." -ForegroundColor Yellow
        mysql -u root -proot -e "CREATE DATABASE Portfolio;" 2>$null
        Write-Host "✓ Portfolio database created" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Failed to check database" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
}

Write-Host ""

# Start Backend
Write-Host "[3/4] Starting Backend Server..." -ForegroundColor Yellow
Write-Host "Location: portfoliobackend-project" -ForegroundColor Gray
Write-Host "URL: http://localhost:8058" -ForegroundColor Gray

$backendJob = Start-Job -ScriptBlock {
    Set-Location "C:\Users\lenovo\Desktop\Portfolio-builder\portfoliobackend-project"
    .\mvnw.cmd spring-boot:run
}

Write-Host "Backend starting (Job ID: $($backendJob.Id))..." -ForegroundColor Yellow
Write-Host "Waiting 20 seconds for backend to initialize..." -ForegroundColor Gray
Start-Sleep -Seconds 20

Write-Host "✓ Backend server started" -ForegroundColor Green
Write-Host ""

# Start Frontend
Write-Host "[4/4] Starting Frontend Server..." -ForegroundColor Yellow
Write-Host "Location: portfolio_FE" -ForegroundColor Gray
Write-Host "URL: http://localhost:3000" -ForegroundColor Gray

$frontendJob = Start-Job -ScriptBlock {
    Set-Location "C:\Users\lenovo\Desktop\Portfolio-builder\portfolio_FE"
    npm run dev
}

Write-Host "Frontend starting (Job ID: $($frontendJob.Id))..." -ForegroundColor Yellow
Write-Host "Waiting 5 seconds for frontend to initialize..." -ForegroundColor Gray
Start-Sleep -Seconds 5

Write-Host "✓ Frontend server started" -ForegroundColor Green
Write-Host ""

# Final Summary
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Servers Running!" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend:  http://localhost:8058" -ForegroundColor Green
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "To stop servers:" -ForegroundColor Yellow
Write-Host "  Stop-Job $($backendJob.Id); Stop-Job $($frontendJob.Id)" -ForegroundColor Gray
Write-Host ""
Write-Host "To view backend logs:" -ForegroundColor Yellow
Write-Host "  Receive-Job $($backendJob.Id)" -ForegroundColor Gray
Write-Host ""
Write-Host "To view frontend logs:" -ForegroundColor Yellow
Write-Host "  Receive-Job $($frontendJob.Id)" -ForegroundColor Gray
Write-Host ""
Write-Host "Press Ctrl+C to exit this script (servers will continue running)" -ForegroundColor Cyan
Write-Host ""

# Keep script running and show job status
while ($true) {
    Start-Sleep -Seconds 30
    $backendStatus = Get-Job $backendJob.Id
    $frontendStatus = Get-Job $frontendJob.Id
    
    Write-Host "[Status Check] Backend: $($backendStatus.State) | Frontend: $($frontendStatus.State)" -ForegroundColor Gray
    
    if ($backendStatus.State -eq "Failed" -or $frontendStatus.State -eq "Failed") {
        Write-Host "✗ One or more servers failed!" -ForegroundColor Red
        break
    }
}
