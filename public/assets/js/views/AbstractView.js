export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  addScript(src) {
    var additionalScript = document.createElement('script');
    additionalScript.setAttribute('src', src);
    document.head.appendChild(additionalScript);
  }

  async getHtml() {
    return "";
  }
}
