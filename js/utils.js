import postsData from './data.js'

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    let searchPosts = event.target.value.toLowerCase()
    let allPosts = document.getElementsByClassName('post')

    for(let i = 0; i < allPosts.length; i++) {
        const currentSearch = allPosts[i].textContent.toLowerCase()
        
        if(currentSearch.includes(searchPosts)) {
            allPosts[i].style.display = "block"
        } else {
            allPosts[i].style.display = "none"
        }
    }
})

export default event