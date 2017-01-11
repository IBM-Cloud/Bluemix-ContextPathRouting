# Context Path Routing with IBM Bluemix

yup, text goes here

# Running the app on Bluemix

1. Create a Bluemix Account

    [Sign up][bluemix_signup_url] for Bluemix, or use an existing account.

1. Download and install the [Cloud-foundry CLI][cloud_foundry_url] tool

1. Clone the app to your local environment from your terminal using the following command

  ```
  git clone https://github.com/data-henrik/Bluemix-ContextPathRouting.git
  ```

1. Edit the `manifest.yml` file and change the application `host` to something unique.

  The host you use will determinate your application url initially, e.g. `<host>.mybluemix.net`.


1. Push the application

  ```
  cf push
  ```


# Troubleshooting

To troubleshoot your Bluemix app the main useful source of information is the logs. To see them, run:

  ```
  cf logs <application-name> --recent
  ```

### License

[Apache License, Version 2.0](LICENSE)


[cloud_foundry_url]: https://github.com/cloudfoundry/cli
[bluemix_signup_url]: https://console.ng.bluemix.net/
