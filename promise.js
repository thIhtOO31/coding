const order = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const ok = Math.random() > 0.3;
            if (ok) resolve("noodles ready");
            else reject(new Error("closed"));
        }, 1000);
    });