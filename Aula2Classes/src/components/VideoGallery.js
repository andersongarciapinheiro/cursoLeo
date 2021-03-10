export default class VideoGallery {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.videos = [];
    }

    addVideo(video) {
        this.videos.push(video);
    }

    render() {
        const html = `
        <section id="${this.id}">
            <h3>${this.titulo}</h3>
            ${this.videos.map(el => {
                return el.render();
            }).join('')}
        </section>
        `;
        const app = document.getElementById("app");
        app.innerHTML += html;
    }
}

function teste() {
    console.log('teste');
}