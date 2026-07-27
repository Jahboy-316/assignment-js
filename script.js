//Post Method

async function createPost() {

    const title = document.getElementById("posttitle").value
    const body = document.getElementById("postbody").value
    const userId = Number(document.getElementById("postuserId").value)

    const output = document.getElementById("output")

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            })
        });

        if (!response.ok) {
            throw new Error("Failed to Create Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was created successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch (error) {
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Put Method

async function updatePost() {

    const title = document.getElementById("puttitle").value
    const body = document.getElementById("putbody").value
    const userId = Number(document.getElementById("putuserId").value)

    const postId = Number(document.getElementById("putpostId").value)

    const output = document.getElementById("output")

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            })
        });

        if (!response.ok) {
            throw new Error("Failed to update Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was updated successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch (error) {
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Patch Method
async function patchPost() {
    const title = document.getElementById("patchtitle").value
    const postId = Number(document.getElementById("patchpostId").value)

    const output = document.getElementById("output")

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                title: title
            })
        });

        if (!response.ok) {
            throw new Error("Failed to Patch Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was patched successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch (error) {
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Delete Method
async function deletePost() {
    const postId = Number(document.getElementById("deletepostId").value)

    const output = document.getElementById("output")

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE"
        });


        if (!response.ok) {
            throw new Error("Failed to delete Post");
        }

        output.innerHTML = `<p>Your Post was deleted successfully</p>`

    }
    catch (error) {
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

