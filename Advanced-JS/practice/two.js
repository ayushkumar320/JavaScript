function fetchBlogData(){
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if(!error){
                resolve({
                    username: "ayush",
                    age: 19,
                    isLoggedIn: true,
                });
            } else {
                reject(`Error: There was a technical failure`);
            }
        }, 2000); 
    });
}

function fetchCommentData(){
    return new Promise((resolve, reject) => {
        let error = true;
        setTimeout(() => {
            if(!error){
                resolve(`Comments fetched successfully!`);
            } else {
                reject(`Error: There was an error loading the comments`);
            }
        }, 3000);
    });
}


async function fetchData(){
    try {
        const [blogData, commentData] = await Promise.all([fetchBlogData(), fetchCommentData()]);
        console.log(blogData);
        console.log(commentData);
    } catch(error) {
        console.log(error);
    }
}

fetchData();