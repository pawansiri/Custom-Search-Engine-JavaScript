function submit()
{
    document.getElementById('content').innerHTML = '';
    var val = document.getElementById('search').value;
    var newElement = document.createElement('script');
    newElement.src = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDNFvT4CtU34Jn_tIams67c5D_8h-JSxGE&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${val}&callbackhndlr';
    newElement.id = "mainscript";
    document.body.appendChild(newElement);
}