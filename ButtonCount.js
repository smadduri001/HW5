class ButtonCount extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const button = document.createElement("button");
        button.textContent = ``;

        shadow.appendChild(button);

        button.addEventListener('click', () => {

        });
    }
}

customElements.define('button-count', ButtonCount);