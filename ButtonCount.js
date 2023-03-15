class ButtonCount extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const button = document.createElement("button");

        this.buttonCount = 0;

        button.textContent = `Times Clicked: ${this.buttonCount}`;

        shadow.appendChild(button);

        button.addEventListener('click', () => {
            button.textContent = `Times Clicked: ${++this.buttonCount}`;
        });
    }
}

customElements.define('button-count', ButtonCount);