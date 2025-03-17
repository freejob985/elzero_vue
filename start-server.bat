@echo off
title Server Launcher Bot

:: تعيين الألوان
color 0A

:: عرض رسالة الترحيب
echo ====================================
echo        Vue.js Server Launcher Bot
echo ====================================
echo.

:: التحقق من وجود Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit
)

:: قراءة التكوين من الملف
if exist config.bat (
    call config.bat
) else (
    set PROJECT_PATH="%CD%"
    set BROWSER_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
    set SERVER_URL=http://localhost:8080
)

:: الانتقال إلى مجلد المشروع
cd %PROJECT_PATH%

:: التحقق من وجود node_modules
if not exist node_modules\ (
    echo Installing dependencies...
    npm install
)

:: عرض رسالة بدء التشغيل
echo Starting Vue.js development server...
echo Server will be available at: %SERVER_URL%
echo.

:: بدء تشغيل السيرفر في نافذة منفصلة
start "Vue Development Server" cmd /c "npm run serve"

:: انتظار وقت قبل فتح المتصفح
echo Waiting for server to start...
timeout /t 15 /nobreak

:: فتح المتصفح
start "" %BROWSER_PATH% %SERVER_URL%

:: الانتظار للإغلاق
echo.
echo Press any key to close all servers and exit...
pause >nul

:: إغلاق جميع عمليات Node.js عند الخروج
taskkill /F /IM node.exe >nul 2>&1

exit 