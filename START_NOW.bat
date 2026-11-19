@echo off
title Dr. Paul Miller - Mainstage Development Server
cd /d "%~dp0"

echo ===================================================
echo   DR. PAUL MILLER - MAINSTAGE WEBPAGE
echo   Starting development server on http://localhost:3000
echo ===================================================
echo.

:: Automatically open default browser after a short delay
start "" http://localhost:3000/

:: Start the Vite server
call npx vite --port 3000 --host

pause

