import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

import "dotenv/config";

class Mima {
    public app : express.Application;

    constructor() {
        this.app = express();

        this.loadRoutes();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };


    loadRoutes() {
        this.app.route("/").get((req, res) => {
            res.send({ version: "0.0.1"});
        });
    }

    listen(port: string) {
        this.app.listen(port, () => {
          console.log(`Mima's hair Api is running at the port: ${port}`);
        });
    }
}

export default new Mima();