==============
audreymroy.com
==============

This repo contains everything for my personal site, `audreymroy.com`_.

Built with Complexity
---------------------

It's made with the `Complexity`_ static site generator.

Try out the code for `audreymroy.com`_ locally::

    $ pip install complexity==0.6
    $ git clone git@github.com:audreyr/audreymroy.com.git
    $ cd audreymroy.com
    $ complexity project/ www/
    
Then view the website at http://127.0.0.1:9090/.
    
.. _`audreymroy.com`: http://audreymroy.com/
.. _`Complexity`: https://complexity.readthedocs.io/

Deployment
----------

Make sure `~/.boto` is configured with the correct AWS access key/secret.
See https://github.com/audreyr/alotofeffort#quickstart

To copy the generated website to an Amazon S3 bucket::

    $ alotofeffort www/ www.audreyr.com

Then:

* Add a CNAME pointing `www` to the URL that `alotofeffort` prints out.
* Forward the naked domain to the `www` subdomain.
