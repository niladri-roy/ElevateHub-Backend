const app = require('./app');
console.log("Server Import Line -> Working Good")


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})