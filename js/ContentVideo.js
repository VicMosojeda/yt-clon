export { contentVideo };

class contentVideo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["video", "img", "title", "source", "description"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {

        if (attr === "video" && oldVal !== newVal) {
            this.video = newVal
        }

        if (attr === "img" && oldVal !== newVal) {
            this.img = newVal
        }

        if (attr === "title" && oldVal !== newVal) {
            this.title = newVal
        }

        if (attr === "source" && oldVal !== newVal) {
            this.source = newVal
        }

        if (attr === "description" && oldVal !== newVal) {
            this.description = newVal
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
                <section class="container-video">
                    <div class="content-video">
                     <video src="${this.video}" controls></video>
                      <img src="${this.img}" alt="" />
                      <div class="content-video-description">
                        <h3>${this.title}</h3>
                        <a href="${this.source}">${this.description}</a>
                      </div>
                    </div>
                </section>
                ${this.getStyle()}
    `;
        return template;
    }
    getStyle() {
        return ` 
            <style>
          
                /* estilos del contendor donde iran los videos */
                .container-video {
                    display: grid;
                    grid-template-rows: auto;
                    grid-template-columns: repeat(3, 1fr);
                }

                /* estilos a los videos */
                .container-video iframe {
                    top: 0;
                    margin: 10px 5px;
                    width: 344px;
                    height: 192px;
                    border-radius: 10px;
                }

                .myVideo {
                    width: 100%;
                    height: 100%;
                }

                .myVideo:hover {
                    border-radius: 0;
                }

                /* estilos contenido del contenedor container-video */
                .content-video {
                    padding: 10px;
                    margin: 10px 5px;
                }

                .content-video img {
                    border-radius: 50%;
                    float: left;
                    width: 50px;
                    margin: 0 20px;
                    background: #fff;
                    top: 0;
                }

                /*.content-video .content-video-description {
                    
                }*/

                .content-video-description {
                    padding: 0 50px;
                }

                .content-video-description a {
                    text-decoration: none;
                }
        </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("video-content", contentVideo);