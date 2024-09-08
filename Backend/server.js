import app from "./app.js";

const app = express()
const port = process.env.PORT || 4000;

app.listen(process.env.PORT, ()=>{
    console.log(`server listening at port ${process.env.PORT}`);
});
