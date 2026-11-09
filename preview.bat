@echo off
title Xpressions 2027 - Production Preview Launcher
color 09
cls

echo =======================================================================
echo          XPRESSIONS 2027 - PRODUCTION PREVIEW
echo =======================================================================
echo.

set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%PATH%"

cd /d "%~dp0"

echo [INFO] Opening production build at http://localhost:4173 ...
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:4173"

call npm run preview -- --host --port 4173

pause

