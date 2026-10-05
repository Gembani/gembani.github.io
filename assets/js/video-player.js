document.querySelectorAll('[data-youtube-id]').forEach(function (button) {
  button.addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.youtubeId + '?autoplay=1&hl=fr';
    iframe.title = button.dataset.videoTitle;
    iframe.width = '1280';
    iframe.height = '720';
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    // YouTube needs the embedding origin, including under the analytics referrer policy.
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    button.parentElement.replaceChildren(iframe);
    iframe.focus();
  }, { once: true });
});
