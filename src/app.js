// const {envs} = require('./config/env') forma vieja
import {envs} from './config/env.js'
import { startServer } from './server/server.js'

const Main =()=>{
   startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
   })
} 

(async()=>{
    Main()
})()

