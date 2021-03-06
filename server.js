// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//allows server to connect to js and css files
// app.get("assets/js/index.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "/assets/js/index.js"));
// });

// app.get("/assets/css/styles.css", (req,res) => {
//     res.sendFile(path.join(__dirname, "/assets/css/styles.css"));
// });

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
