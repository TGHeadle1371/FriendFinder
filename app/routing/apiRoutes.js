// Displays Friends JSON
app.get("/api/friends", function (req, res) {
    return res.json(userData);
});