---
sidebar_position: 4
title: Weights 
---

In ARGO you may combine top level A/R results (such as results referring to you data center, institution as a whole) into a higher level of abstraction such as organisations, projects, federation.
In this level each member contributes to the final A/R score based on its resource capacity. This contribution is expressed as a weighted average, which is obtained by various ways 
such us by running bemnchmark on the infrastructure (ex. hep spec 06) 

## How weights are used in the computations 

ARGO Monitoring Service takes into consideration the weights to combine top level A/R results. 

## How can i define the weights

A weight is 

```json
"hostname": "www.grnet.gr",
"service": "WEBSITE",
"start_time": "2021-09-04T00:00:00Z",
"end_time": "2021-09-04T23:59:00Z"
 ```

Monitoring Service has a number of connectors for setting the weights: 

 - VAPOR 
 - CSV files (predefined format)
 - Json files (predefined format)
 - xml files (predefined format)
