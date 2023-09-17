import AbstractView from "./AbstractView.js";
import axios from "../../vendor/axios/dist/esm/axios.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    getHtml() {
        return new Promise(async resolve => {
            await axios.post('/getpostdata', { id: this.postId }).then(response => {
                resolve(`
                    <h1>${response.data.title}</h1>
                    <p>${response.data.content}</p>
                `);
            });
        });
    }
}
