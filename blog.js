export function Blog() {
    let blogPosts = [];

    function addBlog(title, date, summary){
        blogPosts.push({title, date, summary});
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

    function getBlog() {
        return JSON.parse(localStorage.getItem('blogPosts'))
    }

    function editBlog(index, title, date, summary) {
        blogPosts[index] = {title, date, summary};
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

    function deleteBlog(title, date, summary) {
        for(let i = 0; i < blogPosts.length; i++) {
            if(blogPosts[i] == {title, date, summary}) {
                blogPosts.splice(i, 1);
            }
        }
    }

    return {
        addBlog, getBlog, editBlog, deleteBlog
    }
}