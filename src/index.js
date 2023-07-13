import app from './app.js'
import {PORT} from "./config.js"

app.listen(PORT);
console.log("App corriendo por el puerto", PORT);