import express, {Express} from "express";

import { Playerobject } from "./servaces/playerService";

import { countPlayers } from "./servaces/playerService";

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.get("/", (req, res) => {
    res.statusCode = 500;
    res.send("Hello, World");
});

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

export default app;
