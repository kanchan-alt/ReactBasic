
# ENV and Appwrite in React Project

### 2.Extra pagake we need in this project
npm i @reduxjs/toolkit react-redux react-router-dom appwirte @tinymce/tinymce-react html-react-parser react-hook-form

create .env file in root enviroment first and it should not be track so listed in .gitignore file.

Remember which package we using either react or vite so see the document how to name the .env varible name
[.ENV for vite]("https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes")
     how to name 
    VITE_SOME_KEY=123
    DB_PASSWORD=foobar

how we see in project
console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined

[output]("appWrite\megaBlog\code.png")


Better way to accees evviroment varible is
create a folder name conf/configure/enviromentimport
file name conf.js


### 3.Build authentication service with appwrite



