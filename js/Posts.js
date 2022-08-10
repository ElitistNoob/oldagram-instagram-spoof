import event from './utils.js'

class Posts {
    constructor(data) {
        Object.assign(this, data)
    }
    
    likePost() {
        if(!this.liked) {
            this.liked = true
            this.likes++  
        } else if(this.liked) {
            this.liked = false
            this.likes--
        } 
    }
    
    getButtonHtml() {
        return ` 
            <button id="${this.username}" class="not-liked ${this.liked ? "liked" : ""}"></button>
            <button id="comment">
                <img src="images/icon-comment.png">
            </button>
            <button id="dm">
                <img src="images/icon-dm.png">
            </button> 
        `
    }
    
    getPostHtml() {
        const { name, username, location, avatar, post, likes, comment } = this
        const button = this.getButtonHtml()
        return `
            <div class="post__top">
                <div class="img-border">
                    <img class="avatar-img" src="${avatar}">
                </div>
                <div class="post__top-user-info">
                    <h3 class="user-name">${name}</h3>
                    <p class="user-location">${location}</p>
                </div>
            </div>
            <img class="post__content" src="${post}">
            <div class="post__bottom">
                <div class="icons-container">
                    ${button}
                </div>
                <p class="post__likes">${likes} likes</p>
                <p class="post__comment"><b>${username}</b> ${comment}</p>
            </div>
        `
    }
}

export default Posts