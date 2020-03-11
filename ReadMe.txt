To Start the application 
1. Open Terminal
2. Go to the folder containing the files
3. Use "npm start" to run the application

To pass any Environmental Variables while Starting the application
1. Open Terminal
2. Go to the folder containing the files
3. Use "KEY+Value npm start" to run the application

To change the Environmental Variable by changing the code
1. Open package.json file
2. Enter the KEY=Value pair in "script": {
    "start": "cross-env KEY=value nodemon server.js"
}