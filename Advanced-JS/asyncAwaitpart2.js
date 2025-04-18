function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched");
        }, 2000);
    });
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched");
        }, 3000);
    });
}

// How can i fetch two data?
async function getBlogData(){
    try{
        console.log("Fetching blog data");
        // first way
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        // second way
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log("Fetch complete!");
    } catch(error){
        console.error("Error fetching blog data");
    }
}

getBlogData();