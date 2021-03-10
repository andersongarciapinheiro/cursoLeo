import VideoGallery from './components/VideoGallery';
import Video from './components/Video';

const gallery1 = new VideoGallery('gallery1', 'Galeria 1');

const gallery2 = new VideoGallery();
gallery2.id = 'gallery2';
gallery2.titulo = 'Galeria 2';

const video1 = new Video('coelho1.mp4', 'video/mp4', 'controls');
const video2 = new Video('coelho2.mp4', 'video/mp4', 'controls');

gallery1.addVideo(video1);
gallery1.addVideo(video2);

gallery2.addVideo(video1);
gallery2.addVideo(video2);

gallery1.render();
gallery2.render();
