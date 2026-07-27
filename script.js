//Post Method

async function createPost() {
    
    const output = document.getElementById("output")

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {"Content-Type" :"application/json"},

            body: JSON.stringify({
                title: "Jason and his first Post",
                body: "This is the body of my post, I do not know what to say",
                userId: 1
            })
        });

        if(!response.ok){
            throw new Error ("Failed to Create Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was created successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch(error){
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Put Method

async function updatePost() {
    
    const output = document.getElementById("output")

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {"Content-Type" :"application/json"},

            body: JSON.stringify({
                title: "Jason and his first Updated Post",
                body: "This is the body of my updated post, I still do not know what to say",
                userId: 1
            })
        });

        if(!response.ok){
            throw new Error ("Failed to update Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was updated successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch(error){
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Patch Method
async function patchPost() {
    
    const output = document.getElementById("output")

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {"Content-Type" :"application/json"},

            body: JSON.stringify({
                title: "Jason just changed this title"
            })
        });

        if(!response.ok){
            throw new Error ("Failed to Patch Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was patched successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch(error){
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

//Delete Method
async function deletePost() {
    
    const output = document.getElementById("output")

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if(!response.ok){
            throw new Error ("Failed to delete Post");
        }

        const data = await response.json()

        output.innerHTML = `<p>Your Post was deleted successfully</p>
                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

    }
    catch(error){
        output.innerHTML = `<p style="color: red">${error.message}</p>`;

    }
}

