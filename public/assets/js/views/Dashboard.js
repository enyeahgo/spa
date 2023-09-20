import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
    this.addScript('/vendor/lib/dashboard.js');
  }

  async getHtml() {
    return `
        <h1>Welcome back, <span id="username"></span></h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <button class="btn btn-primary" onclick="Swal.fire('Hello World', 'This is the content of the modal', 'success');">Show Modal</button>
        </p>
    `;
  }
}
