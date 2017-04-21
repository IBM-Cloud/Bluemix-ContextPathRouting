# Context Path Routing with IBM Bluemix

[Context Path Routing](https://www.cloudfoundry.org/context-path-routing/) was introduced by Cloud Foundry in 2015 with CLI support in 2016. It allows to serve an app not just from a domain like "example.com", but also from a relative path like "example.com/myapp". This way, multiple apps and services can share the same domain/host name, but are reached under different paths. It facilitates microservices-based application architectures with one or few host/domain names. Having a separate host for each app or service can be avoided now.

In this sample project we are demonstrating the use of context path routing. Two apps, both implemented in a different language, share the same host name. In adddition, the two apps can be deployed with a single command. App details for both are defined in just one manifest file - another feature to simplify management of microservices-based applications.

The project includes a second manifest file, `manifest2.yml`, that shows variations of how to push several apps and specify
host and domain names.

The following blog articles mention this sample:
- Context path routes for your Bluemix Cloud Foundry apps: https://www.ibm.com/blogs/bluemix/2017/01/context-path-routes-hour-bluemix-cloud-foundry-apps/
- Bluemix: Simplified Deployment of Complex Cloud Foundry Apps: http://blog.4loeser.net/2017/01/bluemix-simplified-deployment-of.html
- Context Path Routing of Apps and Services in Bluemix: http://blog.4loeser.net/2017/01/context-path-routing-of-apps-and.html

## Table of Contents
* [What this sample does](#what-this-sample-does)
* [Running this sample on Bluemix](#running-this-sample-on-bluemix)
* [Useful Commands](#useful-commands)
* [Troubleshooting](#troubleshooting)
* [Documentation Links](#documentation-links)
* [Contact Information](#contact-information)


# What this sample does

This sample project consists of two small apps. One app, found in the `top` directory, is written in Python using the [Flask](http://flask.pocoo.org/) framework. The other, found in the `lower` directory, is a Node.js app based on the [Express](http://expressjs.com/) framework. Both apps simply render a simple template and return an HTML page. The web page states which programming language was used, which route was defined was that specific app and with what path the app was invoked.

As you may have noticed, both apps share this GitHub repository and there is only a single [manifest](manifest.yml) file. That file defines the properties for both apps. Moreover, in that file `routes` are defined. They state under which addresses the apps are reachable. Demonstrating the concept of *Context Path Routing* the apps share the same host and domain name, i.e., most parts of an URI. Only the subpath (or directory) of the URI differs. The Node.js app utilizes the path `base-url/lower` and `base-url/sub` while the Python app is in charge of the top directory, i.e., the base-url, and all paths not explicitly defined. Thus, visiting `base-url/anotherpath` would be served by the Python app.

Things to do:
- Try out different path and see which app serves the request.
- Change the routes in the manifest file, push the apps again and see how the routes are created and bound during the deployment process.
- List the routes and find out which apps are served by them (see [Useful Commands](#useful-commands)).
- Delete unused routes (see [Useful Commands](#useful-commands)).
- Use the file `manifest2.yml` as input. It uses `domain` and `host` instead of the routes. You can push the apps by specifying the that manifest file: `cf push -f manifest2.yml`.
- [Encrypt your custom domain on Bluemix](https://www.ibm.com/blogs/bluemix/2016/08/securing-custom-domains-lets-encrypt/) as explained in this cool use of Context Path Routing.
- ...


![Context Path Routes](https://g.gravizo.com/source/cpr10?https%3A%2F%2Fraw.githubusercontent.com%2FIBM-Bluemix%2FBluemix-ContextPathRouting%2Fmaster%2FREADME.md)

<details>
<summary></summary>
cpr10
  digraph G {
    aize ="4,4";
    app1 [shape=box, label="app 1"];
    app2 [shape=box, label="app 2"];
    server1 [shape=box, label="myapp.mybluemix.net"];
    server2 [shape=box, label="myapp.mybluemix.net/lower"];
    server3 [shape=box, label="myapp.mybluemix.net/sub"];
    app1 -> server1 [style=bold,label="            served from"];
    app2 -> server2;
    app2 -> server3;
  }
cpr10
</details>

Note that the Bluemix UI currently does not support management of Context Path Routes. They can neither be displayed nor edited. All related actions have to be performed from the command line using the CF CLI.

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

To add a new route to an existing application, you first create that route, then map it to the identified application. `myspace` would be the space you are working with. Create it:   
```
cf create-route myspace mybluemix.net –hostname host4app –path newpath
```
Map it:   
```
cf create-route myapp mybluemix.net –hostname host4app –path newpath
```
The app `myapp` would now be reachable under `host4app.mybluemix.net/newpath`. To delete the route you can use the `unmap-route` followed by a `delete-route` command. See the documentation links below for the detailed syntax.

# Troubleshooting

Here are some tips for resolving errors you may encounter when trying to deploy this sample.

- To find out about deployment or runtime errors of your Bluemix app, you can take a look into the error log. The most recent log entries can be obtained like this:

    ```
    cf logs <application-name> --recent
    ```

- You can also do the following to get a verbose readout of the push in your terminal:
  ```
  CF_TRACE=true cf push yourname-myapp
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
