order
    .then(value => {
        console.log("OK:", value);
    })
    .catch(err => {
        console.log("Failed:", err.message);
    })
    .finally(() => {
        console.log("done either way");
    });