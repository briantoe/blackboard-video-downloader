var targetUrl = '';

function download() {
    console.log('attempt downloading');
    chrome.downloads.download({url: targetUrl}, function (id) {
        console.log(id)
    });
}

console.log('checking for video..');
chrome.tabs.executeScript({
    file: './detectVideo.js'
},
    function (src) {
        console.log("src");
        src = src[0];
        console.log(src);

        if (src !== null) {
            var downloadBtn = document.getElementById('download');
            downloadBtn.onclick = download;
            downloadBtn.disabled = false; // allow button to run download
            targetUrl = src;

            var msg = document.getElementById('verifyVideoPresent');
            msg.innerHTML = 'Video avaliable below if extension fails';
            var videoLink = document.getElementById('videoLink');
            videoLink.href = src;
            videoLink.innerHTML = 'Video here';
        }
        else {
            var msg = document.getElementById('verifyVideoPresent');
            msg.innerHTML = 'Cannot find Blackboard video to download';
        }
    });

