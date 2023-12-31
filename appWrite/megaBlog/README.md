
# ENV and Appwrite in React Project

### Extra package we need in this project
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

![output](appWrite\megaBlog\src\assets\code.png) 

### Appwrite  create a project name Blog

 1. Blog( In setting we get projectid and APIEnd point )

  2. Auth- (check for emailto enable )
  3. database(database id)
      
      name: blog(blog id)
      colection: Article(collection id)(setting>> permission--- All User)

      Attribute:
      title, content, feactureImage, status, userId
      string everyone
      255
      requird everyone expect status

      Indexs:
      attribute== status
      index type == key
      order === ASC
   
  4. storage --- create Bucket(Images) (Bucket Id)(update permission)



### Better way to accees enviroment varible is
create a folder name conf/configure/enviromentimport
file name conf.js
src /conf/conf.js


const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectId:String(VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseId:String(VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId:String(VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketId:String(VITE_APPWRITE_BUCKET_ID),
}

export default conf


# Build authentication service with appwrite

 - all service related thing we do on appwrite folder
 - create auth.js








  