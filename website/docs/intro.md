---
sidebar_position: 1
title: Introduction
---

## Welcome to ARGO Monitoring

### Measuring and Monitoring the Availability and Reliability of Electronic Infrastructures
The electronic infrastructure availability / reliability monitoring service is designed for Service Level Monitoring, for medium and large infrastructures. It monitors the status, availability and reliability of services provided by electronic infrastructures with moderate to high complexity. It supports flexible development models and modular design, allowing easy communication with external systems (such as CMDBs, Service Catalogs, etc.). 
The service allows the creation of multiple reports using profiles (profiles are different ways and filters of organizing and displaying the services and their service components),   which are defined by the client (e.g. for managing SLAs, operations, etc.). When calculating reports (using big data management technologies) the service takes into account a number of external factors, such as specific service parameters, scheduled or unscheduled downtime, etc.

### How it works

There are several things to consider when monitoring a Service. The more complex a system gets, the harder it gets to monitor. The ARGO Monitoring follows a plan for solving these kinds of challenges and provides an easy path to gain powerful insights. The ARGO Monitoring service starts monitoring the service by checking its liveness /health of the service. The main focus though is to check the availability and reliability of the services as well as groups of services by simulating the actions that the respective user would do interacting with it. For instance, in the case of a file transfer server (FTP), the service tries to transfer, save and delete a file in the server. These tests are performed at regular random intervals (e.g. every hour or 15 minutes) and their results are recorded to be included in the measuring of the availability and reliability of the service. The service supports different profiles for creating the topology and grouping of services and the algorithm for calculating the availability and reliability of services. 

The calculations are done in big data management and processing infrastructures (use of apache flink platform) which provide results both in real time and their correction at regular intervals. The service publishes the results of its calculations in real time, thus allowing the creation of a control panel of the status of the services (through a special interface that has been created) and provides the possibility of timely notification (alerts via email as well as SMS and slack messages) of administrators in case to detect an error.
Argo monitoring provides a modern and comprehensive web-ui in which users can easily view details and results (status results and a/r scores) on items monitored. Users can navigate through the different layers of topology (groups, services, endpoints) and with various levels of granularity (monthly, daily, etc…)

