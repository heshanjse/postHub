<h2><b>PostHub Application React and python Flask</b></h2>

To run the backend Flask application, use the command:
```
flask run
```
For starting the React frontend application, use:
```
npm run dev
```
Note: Cross-origin configurations have not been added. If you encounter any cross-origin issues, you can resolve them using the following commands:

For Windows:
```
cd "C:\Program Files (x86)\Google\Chrome\Application"
chrome.exe --disable-web-security --user-data-dir=c:\my-chrome-data\data
```
For macOS:
```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_sess_1" --disable-web-security
```
