(function(b){var c=document.getElementById("creativeWidget");if(c){var h="http://static.creativebloq.futurecdn.net/sites/creativebloq.com/files/creative_network/widget.css";var e="http://static.creativebloq.futurecdn.net/sites/creativebloq.com/files/creative_network/json/widget.json";var i=document.createElement("link");i.setAttribute("type","text/css");i.setAttribute("rel","stylesheet");i.setAttribute("media","all");i.setAttribute("href",h);c.style.display="none";document.getElementsByTagName("head")[0].appendChild(i);var d=document.createElement("h4");d.classList.add("cw-subheader");d.appendChild(document.createTextNode("Trending Today"));var g=document.createElement("span");g.classList.add("cw-footer");var f=document.createElement("ul");f.classList.add("cw-loading");f.classList.add("cw-list");c.appendChild(d);c.appendChild(f);c.appendChild(g);var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=e;var j=document.getElementsByTagName("script")[0];j.parentNode.insertBefore(a,j);setTimeout("widgetError()",5000)}})();function widgetCallback(m){var j=document.getElementById("creativeBanner");if(m.data.length>0){var d=document.getElementById("creativeWidget");var l=d.getElementsByTagName("ul");var g=l[0];g.classList.remove("cw-loading");for(var c=0;c<m.data.length;c++){var a=m.data[c];var k=document.createElement("span");k.classList.add("cw-article-number");k.appendChild(document.createTextNode(c+1));var b=document.createElement("img");b.setAttribute("src",a.articleMedia);b.classList.add("cw-article-media");var f=document.createElement("a");f.setAttribute("href",a.articleUrl);f.setAttribute("rel","nofollow");f.classList.add("cw-article-media-link");f.appendChild(k);f.appendChild(b);var h=document.createElement("a");h.setAttribute("href",a.articleUrl);h.classList.add("cw-article-link");h.appendChild(document.createTextNode(a.articleName));var e=document.createElement("li");e.classList.add("cw-list-item");e.appendChild(f);e.appendChild(h);g.appendChild(e)}d.style.display="block"}else{widgetError()}}function widgetError(){};