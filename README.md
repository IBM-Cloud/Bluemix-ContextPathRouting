# Context Path Routing with IBM Bluemix

[Context Path Routing](https://www.cloudfoundry.org/context-path-routing/) was introduced by Cloud Foundry in 2015 with CLI support in 2016. Context Path Routing is routing based not only on domain names (host header) but also the path specified in the URL. This way, multiple apps and services can share the same domain/host name, but are reached under different paths.

## Table of Contents
* [What this sample does](#what-this-sample-does)
* [Running this sample on Bluemix](#running-this-sample-on-bluemix)
* [Useful Commands](#useful-commands)
* [Troubleshooting](#troubleshooting)
* [Documentation Links](#documentation-links)
* [Contact Information](#contact-information)


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
  
# Useful Commands
Describe some useful commands to manage routes

cf routes

delete-orphaned-routes

# Troubleshooting

Here are some tips for resolving errors you may encounter when trying to deploy this sample.

- To troubleshoot your Bluemix app, a useful source of information is the logs. To see them, run:

    ```
    cf logs <application-name> --recent
    ```

- Make sure that your installed cf CLI is up-to-date. Pushing several apps with a single manifest and
  included route information requires at least [CLI version 6.21](https://github.com/cloudfoundry/cli/releases/tag/v6.21.0).
  
  
# Documentation Links

link to CLI commands having route/path support
link to manifest syntax/docs

Push: http://cli.cloudfoundry.org/en-US/cf/push.html
create-route: http://cli.cloudfoundry.org/en-US/cf/create-route.html
map-route http://cli.cloudfoundry.org/en-US/cf/map-route.html
routes http://cli.cloudfoundry.org/en-US/cf/routes.html
delete-routes
unmap-routes
delete-orphaned-routes

https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html

# License
See [LICENSE](LICENSE) for license information.

# Contact Information
If you have found errors or some instructions are not working anymore, then please open an GitHub issue or, better, create a pull request with your desired changes.

You can find more tutorials and sample code at:
https://ibm-bluemix.github.io/

[cloud_foundry_url]: https://github.com/cloudfoundry/cli
[bluemix_signup_url]: https://console.ng.bluemix.net/
