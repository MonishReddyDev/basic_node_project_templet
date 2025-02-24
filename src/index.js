import { PORT } from "./config/server-config.js"
import express from "express"
import apiRoutes from "./routes/index.js"
import logger from "./config/logger-config.js"


const app = express()

app.use("/api", apiRoutes)

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`)
})