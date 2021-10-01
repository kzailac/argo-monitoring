---
sidebar_position: 2
title:Topology 
---

One of the main sources of truth used in the Monitoring Service is the topology. It helps to discover and map relationships between services / resources. Via the topology the owner may have in-depth visibility into the infrastructure, by enabling the Monitoring Service to categorize, classify, and finally monitor the services in it. 

Topology includes all the necessary information about how an infrastructure is structured and organized.  ARGO Monitoring Service via the connectors (components used to connect to well known Configuration Databases (DPMT, GOCDB, csv files, json) retrieves information about the infrastructure, the hierarchy of the services that will be monitored, and  the service owners. 

**Topology information includes :** 

* the monitored services  
* the way they are organized  (ex. in groups of sites, in groups of services, in groups of projects). Model different types of infrastructure architectures
* the service actors (owners, admins) 

The monitored infrastructure (group) , such as SITE or a PROJECT, can be part of a higher level of hierarchy, gathered with other groups. The new level of hierarchy contains information about:

* group , which is the super group of the top level 
* type , the type of the new level of hierarchy (e.x project) 
* subgroup, the group endpoint that participates to the super group


So before we start with examples … 
![](/img/infofeeds/topVocabulary.png) 


#### Example 1 - Monitoring the services of a Project- The topology: 
A project gathers all the groups of services to offer,  to a higher level and creates one more level of hierarchy. Project acts as a supergroup,  at the top level of the infrastructure definition.  
```
Project   
   |---Group of services                 
             |--Service Endpoints 
```
I have a project (MyProject)  which offers an AAI and a Document Management Service. The information about the topology includes the supergroup  (MyProject) , the group services (AAI service, Document Management Service) that combine the service endpoints (aai.myproject.org, aai1.myproject.org) and (docu.myproject.org, database.myproject.org) 
….
```
  MyProject
        |---AAI service                                         |---Document Management Service                  
            |------aai.myproject.org                                       |------docu.myproject.org
            |------aai1.myproject.org                                     |------database.myproject.org  
```


#### Example 2 - Monitoring the services of 1 or more Organizations - The topology: 
```
ORGANIZATION 
        |---- SITE   
                   |---Group of services                 
                            |------Service Endpoints 
```


I have an organization , such as GRNET , which offers sites  such as HEBLAB ,IASA,EKT. Each site gathers group of services (SRM ,WEBDAV) that combine the service-endpoints grid02.physics.uoi.gr ,  se01.marie.hellasgrid.gr, se01.athena.hellasgrid.gr

```
                                            GRNET 
|---- HEBLAB
	     |-- SRM 
		       |-- grid02.physics.uoi.gr
|---- IASA 
         |-- WEBDAV 
               |-- se01.marie.hellasgrid.gr
|---- EKT
         |-- SRM 
               |-- se01.athena.hellasgrid.gr
```


A visual representation of the above topology example can be represented from the image : 
![](/img/infofeeds/topology.png) 

Monitoring Service supports topology information from various sources like
DPMT
GOCDB
CSV files (predefined format)
Json files (predefined format)
xml files  (predefined format)             

