@echo off
echo Starting autopush...
cd /d %~dp0
git add .
git commit -m "Auto update"
git push
echo Autopush completed.
pause
