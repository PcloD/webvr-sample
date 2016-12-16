var file = document.getElementById('file');
file.addEventListener('change', function(event) {
  var files = file.files;
  for(var i = 0; i < files.length ; i++) {
    var formData = new FormData;
    formData.append('name', files[i].name);
    formData.append('file', files[i]);

    var post = new XMLHttpRequest();
    var apiUrl = 'https://api.viewport.teliportme.com/contents/?sdk=vjs-0.1';
    post.open("POST", apiUrl, true);
    post.onload = function() {
      showEmbed(this.responseText);
    };
    post.send(formData);
  }
});

function showEmbed(response) {
  if (response) {
    var viewportId = JSON.parse(response).response.contentId;
    var embed = document.createElement('iframe');
    embed.setAttribute('allowFullScreen', '');
    embed.style = "width:500px;height: 500px;"
    embed.src = "https://embed.viewportvr.co/embed/" + viewportId;
    document.getElementById('embed').appendChild(embed);
  }
}