[![jcplaboratory](https://www.jcplaboratory.org/wp-content/uploads/2016/08/nav-banner_ra_large.png?w=250)](http://jcplaboratory.org)
--------------------------------------------

# Custom HTTP Error pages for NGINX.
These responsive HTTP error pages are based on Twitter's Bootstrap framework.  
Follow a very simple design and feature auto actions with Javascript.  

## List of HTTP Error pages  
* [403](403.html)
* [404](404.html)
* [500](500.html)
* [502](502.html)

[Visit demo site](https://jcplaboratory.github.io/http_error-pages-nginx/)

## Forked from https://github.com/alexbaldwin/error
This project is based upon the work mentioned & linked above.


Icons by Flaticons
----------------------------------------------

All Icons are made by their respective authors as discributed by http://flaticon.com

#How to use?
----------------------------------------------
1. Clone this repository to your NGINX root "/var/www/html"
2. Edit your the NGINX configuratory for each site to include the following:
```
error_page 403 /http_error-pages-nginx/404.html;
error_page 404 /http_error-pages-nginx/404.html;
error_page 500 /http_error-pages-nginx/404.html;
error_page 502 /http_error-pages-nginx/404.html;
```
