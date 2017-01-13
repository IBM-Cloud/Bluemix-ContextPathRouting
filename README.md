# Context Path Routing with IBM Bluemix

[Context Path Routing](https://www.cloudfoundry.org/context-path-routing/) was introduced by Cloud Foundry in 2015 with CLI support in 2016. It allows to serve an app not just from a domain like "example.com", but also from a relative path like "example.com/myapp". This way, multiple apps and services can share the same domain/host name, but are reached under different paths. It facilitates microservices-based application architectures with one or few host/domain names. Having a separate host for each app or service can be avoided now.

In this sample project we are demonstrating the use of context path routing. Two apps, both implemented in a different language, share the same host name. In adddition, the two apps can be deployed with a single command. App details for both are defined in just one manifest file - another feature to simplify management of microservices-based applications.

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

1. Edit the `manifest.yml` file and change the `name` and `route` properties for the two apps. The names are needed to identify your applications. The routes tell Bluemix how your application should be reachable.
  

1. Push the applications. This is done for both apps with the same manifest file. The following command takes all information from that file which was edited in the previous step.

  ```
  cf push
  ```
  
# Useful Commands
There are a couple commands that directly deal with routes. Once your apps have been successfully deployed, check that the routes are correct:

```
cf routes
```
The `routes` command lists all defined routes for the `space` you are working with.


If you want to clean up routes that have been defined, but are not used by any app or service anymore, then use the following command:
```
cf delete-orphaned-routes
```
All the routes without associated app or service are deleted.


# Troubleshooting

Here are some tips for resolving errors you may encounter when trying to deploy this sample.

- To find out about deployment or runtime errors of your Bluemix app, you can take a look into the error log. The most recent log entries can be obtained like this:

    ```
    cf logs <application-name> --recent
    ```

- Make sure that your installed cf CLI is up-to-date. Pushing several apps with a single manifest and
  included route information requires at least [CLI version 6.21](https://github.com/cloudfoundry/cli/releases/tag/v6.21.0).
  
- If you changed more than just the name and route entries in the manifest then make sure the formatting and indentation is correct.  
  
  
# Documentation Links

Links to cf CLI commands used or mentioned in this sample:
- push: http://cli.cloudfoundry.org/en-US/cf/push.html
- create-route: http://cli.cloudfoundry.org/en-US/cf/create-route.html
- map-route: http://cli.cloudfoundry.org/en-US/cf/map-route.html
- routes: http://cli.cloudfoundry.org/en-US/cf/routes.html
- delete-routes:http://cli.cloudfoundry.org/en-US/cf/delete-route.html
- unmap-routes: http://cli.cloudfoundry.org/en-US/cf/unmap-route.html
- check-route: http://cli.cloudfoundry.org/en-US/cf/check-route.html
- delete-orphaned-routes http://cli.cloudfoundry.org/en-US/cf/delete-orphaned-routes.html

Read the documentation for manifest files:
- Cloud Foundry: https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html
- Bluemix: https://console.ng.bluemix.net/docs/manageapps/depapps.html#appmanifest


# License
See [LICENSE](LICENSE) for license information.

# Contact Information
If you have found errors or some instructions are not working anymore, then please open an GitHub issue or, better, create a pull request with your desired changes.

You can find more tutorials and sample code at:
https://ibm-bluemix.github.io/

[cloud_foundry_url]: https://github.com/cloudfoundry/cli
[bluemix_signup_url]: https://console.ng.bluemix.net/
