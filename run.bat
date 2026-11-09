@echo off
title Xpressions 2027 - Fest Website Launcher
color 0C
cls

echo =======================================================================
echo          XPRESSIONS 2027 - FEST WEBSITE LAUNCHER
echo          Flagship Management ^& Cultural Fest of XIMB
echo =======================================================================
echo.

:: Ensure Node.js is in PATH
set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%PATH%"

:: Verify Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js was not detected in your PATH.
    echo Please make sure Node.js is installed from https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Navigate to script directory
cd /d "%~dp0"

:: Check if node_modules exists, install if missing
if not exist "node_modules\" (
    echo [INFO] First time run detected. Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed successfully.
    echo.
)

echo [INFO] Starting Xpressions 2027 Local Development Server...
echo [INFO] Opening site at http://localhost:3000 in your default browser...
echo.

:: Launch browser in background after 2 seconds
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

:: Start the Vite server
call npm run dev -- --host --port 3000

pause

