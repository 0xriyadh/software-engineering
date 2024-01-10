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

// for get we usually get data through query
app.get("/", (req, res) => {
    const patientName = req.query.patient; // patient name
    if (patientName) {
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
    } else {
        res.json({});
    }
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
