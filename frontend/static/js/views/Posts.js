import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <ul>
                <li><a href="/posts/1" data-link>Post 1</a></li>
                <li><a href="/posts/2" data-link>Post 2</a></li>
                <li><a href="/posts/3" data-link>Post 3</a></li>
                <li><a href="/posts/4" data-link>Post 4</a></li>
                <li><a href="/posts/5" data-link>Post 5</a></li>
            </ul>
        `;
    }
}