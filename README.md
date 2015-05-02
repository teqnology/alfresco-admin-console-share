# alfresco-admin-console-share
Alfresco Share 4.2x example of custom admin console page built with Aikau framework

This is an example of how to create a custom admin-console page in Alfresco Share 4.2+ with some minor extensions and customizations along the road.

## Features and Customizations

- *Alfresco Share 4.2.x* and *5.x* compatible module creation and extension
- Alfresco Share web script as part of `admin-console` family web scripts
- `slingshot.properties` extension through a custom `.properties` file
- A custom widget built with the brand new `Aikau` framework and deployed as an Alfresco Share module
- Extension of the new header in Alfresco Share with a custom menu and group list
- A new custom page in the admin console on the accessible through `/share/page/console/admin-console/` + web script endpoint url

## Essentials

- Alfresco Community or Enterprise `4.2.x/5.0.x`
- Alfresco Maven Version 2.0.0 ([Alfresco Maven compatibility matrix](http://docs.alfresco.com/5.0/concepts/alfresco-sdk-compatibility.html))
- Alfresco Maven Enterprise account to access the enterprise source code (otherwise the `pom.xml` need to be changed accordingly).

## Quickstart

- Locate the AMP files inside the path:
	- `alfresco-admin-console-share/target/alfresco-admin-console-share.amp`, you can download it [here](blob/master/target/alfresco-admin-console-share.amp)
- Stop Alfresco
- Copy the `alfresco-admin-console-share.amp` inside your alfresco `amps_share` folder
- Run `bin/apply_amps.sh` in order to install the extension
- Start Alfresco
- Open Alfresco Share module deploy URL `/share/page/module/deploy` in order to see the two installed modules
- Open Alfresco Share URL (eg. `http://localhost:8080/share`) and open the admin console from the header menu in order to check the changes were applied 

## Quickstart for devs

### alfresco-admin-console-share

- Enter the project folder and run `./run.sh` (you might need to `chmod u+x run.sh` to make it executable). This will setup the SDK and the Alfresco Share on port 8081 (not Alfresco Repository or Solr).
- Wait for the startup of the webapp and then go `http://localhost:8081/share`. NOTE: For this to work you need to have an Alfresco previously running on port 8080, for example as provided by the Alfresco AMP archetype
- Import the project in your favorite IDE (with Maven integration) and start developing right away.
- Alternative: you can run a manual `mvn` comand: `mvn integration-test -Pamp-to-war -Dmaven.tomcat.port=8081` in order to start the local dev instance

For additional info please refer to [Maven Alfresco SDK documentation - Share AMP Archetype](https://artifacts.alfresco.com/nexus/content/groups/public/alfresco-sdk-aggregator/latest/archetypes/share-amp-archetype/index.html).

## IMPORTANT

* Remember that you need a working Alfresco instance running on `http://localhost:8080/alfresco` in order for the above steps to work*

In case you want to make changes, you can update the share config file  `alfresco-admin-console-share/src/main/resources/META-INF/share-config-custom.xml`. Just locate the `config evaluator="string-compare" condition="Remote">` section and update it's `<endpoint-url>` values accordingly.

# Credits

- [Androgogic](http://www.androgogic.com/)
- [Alen Subat](http://alensubat.me/), blog: [curiousnerd.me](http://www.curiousnerd.me/)

> Written with [StackEdit](https://stackedit.io/).