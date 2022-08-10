import postsData from './data.js'
import Posts from './Posts.js'

const vincent = new Posts(postsData[0])
const gustave = new Posts(postsData[1])
const joseph = new Posts(postsData[2])

function vinceLikeUpdate() {
    vincent.likePost()
    render()
}

function gustaveLikeUpdate() {
    gustave.likePost()
    render()
}

function josephLikeUpdate() {
    joseph.likePost()
    render()
}

function render() {
    document.getElementById('vincent').innerHTML = vincent.getPostHtml()
    document.getElementById('gustave').innerHTML = gustave.getPostHtml()
    document.getElementById('joseph').innerHTML = joseph.getPostHtml() 
}

render()

document.getElementById(vincent.username).addEventListener('click', vinceLikeUpdate)
document.getElementById(gustave.username).addEventListener('click', gustaveLikeUpdate)
document.getElementById(joseph.username).addEventListener('click', josephLikeUpdate)