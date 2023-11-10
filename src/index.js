import App from "./app.js";

import connectDB from "./bd.js";

connectDB()

App.listen(3000,()=>{
    console.log("listening onport 3000");
})