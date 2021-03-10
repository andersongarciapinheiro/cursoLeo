class Video {
    constructor(src, type, controls) {
        this.src = src;
        this.type = type;
        this.controls = controls;
    }

    render() {
        return `
        <video ${this.controls}>
            <source src="${this.src}" type="${this.type}">
        </video>
        `;
    }
}

export default Video;