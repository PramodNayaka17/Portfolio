@echo off
echo =======================================
echo Pushing Portfolio to GitHub...
echo =======================================
set "PATH=C:\Program Files\Git\cmd;%PATH%"
git push -u origin main
echo.
echo =======================================
echo Done! Check your GitHub repository.
echo =======================================
pause
