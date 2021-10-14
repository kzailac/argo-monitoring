---
sidebar_position: 4
title: Metrics Profile
---

## Description
An infrastructure may offer various services. These services need to be checked periodically in order to decide their operational state. The various functionalities of a given service are checked by metrics (a chunk of code) and the results of the metrics are computed in order to conclude into the operations state of the service during a specific period.   

**e.x  Web-Site.Portal-WebCheck  checks if the http connection responds or not.**

A client can define, through POEM API,  the metrics that will be included in the calculations in order to decide the service operational state, in the Metrics Profile.  During the calculations of the Argo Monitoring Service the Metrics Profile information is retrieved and only the defined metric results are taken into account to decide the service state. 

##### Example 1 : 
A service of type Site runs on  host1.example.com. Three metrics can apply on the service to decide it’s operational status : 
**Portal-WebCheck** to check if  the http responds
**http.download** to check if download functionality operates well 
**http.upload** to check if upload functionality operates well. 

In the Metrics Profile for the specific service , the metrics  http.download and http.upload are defined as associated metrics, so only the results of these checks will be considered by the argo monitoring service  to the calculations

#### Example 2:
A service of type Repository runs on  host2.example.com. Two metrics can apply on the service to decide it’s operational status : 
**Portal-WebCheck** to check if the http responds
**CertValidity** to check if the certification is valid. 

In the Metrics Profile for the specific service , both  metric are defined, so both metric results  will be considered by the argo monitoring service  to the calculations


```json 
"services": [
               {
                   "service": "WEB-SITE",
                   "metrics": [
                       "http.download",
                       "http.upload"
                   ]
               },
               {
                   "service": "www.example-repository.com",
                   "metrics": [
                       "Portal-WebCheck",
                       "CertValidity"
                   ]
               }
      ]
```
          


