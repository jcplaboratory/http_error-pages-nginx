[![jcplaboratory](https://www.jcplaboratory.org/wp-content/uploads/2016/08/nav-banner_ra_large.png?w=250)](http://jcplaboratory.org)
--------------------------------------------

# Custom HTTP Error pages for NGINX.
These responsive HTTP error pages are based on Twitter's Bootstrap framework.  
Follow a very simple design and feature auto actions with Javascript.  

## List of HTTP Error pages  
* [401](401.html)
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

How to use?
----------------------------------------------
1. Fork this repository.
2. Re-direct the CSS and images to your fork.
3. Customize the templates.
4. Clone the repository to your NGINX root `/var/www/html`
5. Edit each NGINX virtual site configuration to include the following inside the `server` block.
```
        error_page 403 /http_error-pages-nginx/403.html;
        location = /http_error-pages-nginx/403.html {
                root /var/www/html;
                internal;
        }
        
        error_page 404 /http_error-pages-nginx/404.html;
        location = /http_error-pages-nginx/404.html {
                root /var/www/html;
                internal;
        }

        error_page 500 /http_error-pages-nginx/500.html;
        location = /http_error-pages-nginx/500.html {
                root /var/www/html;
                internal;
        }

        error_page 502 /http_error-pages-nginx/502.html;
        location = /http_error-pages-nginx/502.html {
                root /var/www/html;
                internal;
        }

```
How to contribute?
----------------------------------------------
See the [master](https://github.com/jcplaboratory/http_error-pages-nginx/tree/master) branch.

