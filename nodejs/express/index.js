const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// to get the body of the request we need to use body-parser
app.use(express.json()); // to support JSON-encoded bodies

let patients = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: false,
            },
        ],
    },
];
// a middleware to find the average time my server takes to handle a request
function averageTime(req, res, next) { 
    const start = Date.now();
    next();
    const end = Date.now();
    console.log(`Average time: ${end - start}ms`);
}
app.use(averageTime);

function universalMiddleware(req, res, next) { 
    console.log("I am a Universal middleware");
    next();
}
app.use(universalMiddleware);

function middleware1(req, res, next) {
    console.log("First middleware");
    next();
}
function middleware2(req, res, next) {
    console.log("Second middleware");
    next();
}

app.get("/test", middleware1, middleware2, (req, res, next) => {
    console.log("Third middleware");
    res.json("All middlewares have been executed");
});

// If we do not need middleware1 here, we can just exclude it
app.get("/test2", middleware2, (req, res, next) => {
    console.log("Third middleware");
    res.json("All middlewares have been executed");
});

// for get we usually get data through query and headers
app.get("/", (req, res) => {
    const patientName = req.query.patient; // patient name
    const username = req.headers.username; // username
    const password = req.headers.password; // password
    if (username !== "admin" || password !== "admin") {
        // throw an error if the username or password is wrong
        res.status(401).json({
            message: "Username or password is wrong",
        });
        return;
    }
    if (!patientName) {
        // throw an error if the patient name is not provided
        res.status(411).json({
            message: "Patient name is required",
        });
        return;
    }
    const patient = patients.find((p) =>
        p.name.toLowerCase().includes(patientName.toLocaleLowerCase())
    );
    const totalKidneys = patient.kidneys.length;
    const healthyKidneys = patient.kidneys.filter((k) => k.healthy).length;
    const unhealthyKidneys = totalKidneys - healthyKidneys;

    res.json({
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys,
    });
});

// for post we usually get data through body
// add a new kidney to a patient
app.post("/addKidney", (req, res) => {
    const patientName = req.body.patient; // patient name
    const kidney = req.body.kidney; // kidney object
    if (patientName && kidney) {
        const patient = patients.find((p) =>
            p.name.toLowerCase().includes(patientName.toLocaleLowerCase())
        );
        patient.kidneys.push(kidney);
        res.json({
            patient,
        });
    } else {
        // throw an error if the patient name or kidney object is not provided
        res.status(411).json({
            message: "Patient name and kidney object are required",
        });
    }
});

// replace all unhealthy kidneys with healthy ones
app.put("/replaceUnhealthyKidneys", (req, res) => {
    const patientName = req.body.patient; // patient name
    if (patientName) {
        //  send error if there are no unhealthy kidneys
        const patient = patients.find((p) =>
            p.name.toLowerCase().includes(patientName.toLocaleLowerCase())
        );
        const unhealthyKidneys = patient.kidneys.filter((k) => !k.healthy);
        if (unhealthyKidneys.length === 0) {
            res.status(411).json({
                message: "There are no unhealthy kidneys",
            });
        } else {
            patient.kidneys = patient.kidneys.map((k) => {
                if (!k.healthy) {
                    return {
                        healthy: true,
                    };
                }
                return k;
            });
            res.json({
                patient,
            });
        }
    } else {
        // throw an error if the patient name or kidney object is not provided
        res.status(411).json({
            message: "Patient name is required",
        });
    }
});

// delete all unhealthy kidneys
app.delete("/deleteUnhealthyKidneys", (req, res) => {
    const patientName = req.body.patient; // patient name
    if (patientName) {
        // send error if there are no unhealthy kidneys
        const patient = patients.find((p) =>
            p.name.toLowerCase().includes(patientName.toLocaleLowerCase())
        );
        const unhealthyKidneys = patient.kidneys.filter((k) => !k.healthy);
        if (unhealthyKidneys.length === 0) {
            res.status(411).json({
                message: "There are no unhealthy kidneys",
            });
        } else {
            patient.kidneys = patient.kidneys.filter((k) => k.healthy);
            res.json({
                patient,
            });
        }
    } else {
        // throw an error if the patient name or kidney object is not provided
        res.status(411).json({
            message: "Patient name is required",
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
