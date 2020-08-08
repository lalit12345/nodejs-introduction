### To run locally

npm run dev

### To deploy to heroku platform

1. Sign In on https://www.heroku.com/ 
2. Download and install heroku CLI tool for Mac/Windows
3. Check if it’s installed  - heroku —version
4. Login to heroku using `heroku login`. Enter credentials.
5. To push to code to heroku, need to have Git. So, install Git first for Mac/Windows
6. `git init` - to initiate git repo for our application
7. `git add .` - to add all files
8. `git commit -m “Initial commit”` - commit to git
9. `heroku create` - to create new app on heroku (gives domain name)
10. Go to /apps and click on your application on heroku
11. Click on ‘Deploy’ tab and get the command to add our application as remote repo
         `heroku git:remote -a limitless-meadow-87507`
12. `git push heroku master` - to push to heroku master
          This will push our application to heroku master, download all node-modules and deploy it
13. `heroku open` - to run application on browser

#### IDE used
Visual Studio Code
