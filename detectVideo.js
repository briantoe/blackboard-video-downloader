function getVideoSrc() {
    var searchFor = 'vjs-tech';
    var video = document.getElementsByClassName(searchFor)[0];
    if (video === undefined) {
        return null;
    }
    else {
        return video.src;
    }
}
getVideoSrc();
