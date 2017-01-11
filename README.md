# Context Path Routing with IBM Bluemix

[Context Path Routing](https://www.cloudfoundry.org/context-path-routing/) was introduced by Cloud Foundry in 2015 with CLI support in 2016. Context Path Routing is routing based not only on domain names (host header) but also the path specified in the URL. This way, multiple apps and services can share the same domain/host name, but are reached under different paths.


# What this sample does
Two applications (top, lower), reachable under different routes/paths
one app written in Python, one in Node.js   

each app prints which path was used and whether it is Node/Python


# Running this sample on Bluemix

1. Create a Bluemix Account

    [Sign up][bluemix_signup_url] for Bluemix, or use an existing account.

1. Download and install the [Cloud-foundry CLI][cloud_foundry_url] tool

1. Clone the app to your local environment from your terminal using the following command

  ```
  git clone https://github.com/data-henrik/Bluemix-ContextPathRouting.git
  ```

1. Edit the `manifest.yml` file and change the applications `name`s and the `route` entries. The names are needed to identify your applications. The routes tell Bluemix how your application should be reachable.
  

1. Push the application

  ```
  cf push
  ```


# Troubleshooting

To troubleshoot your Bluemix app the main useful source of information is the logs. To see them, run:

  ```
  cf logs <application-name> --recent
  ```
# Links

link to CLI commands having route/path support
link to manifest syntax/docs

Push: http://cli.cloudfoundry.org/en-US/cf/push.html
create-route: http://cli.cloudfoundry.org/en-US/cf/create-route.html
map-route http://cli.cloudfoundry.org/en-US/cf/map-route.html
routes http://cli.cloudfoundry.org/en-US/cf/routes.html
delete-routes
unmap-routes


https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html

# License

[Apache License, Version 2.0](LICENSE)


[cloud_foundry_url]: https://github.com/cloudfoundry/cli
[bluemix_signup_url]: https://console.ng.bluemix.net/
