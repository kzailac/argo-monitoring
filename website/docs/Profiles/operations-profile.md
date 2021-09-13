---
sidebar_position: 2
title: Operations Profile  
---

## Description 

An operations profile defines how to aggregate status results from the metric level onto service endpoint and service flavour status results. 

In principle these define how ANDing and ORing operations are performed between status values. To keep it simple an “AND” operation is when we want to express the statement “if one out the two fails then the two combined are failing” while the “OR” statement signifies “if either one is working properly then the combination of them is also “OK”. “AND” and “OR” are generalized straightforward in cases of more than two entities. For example: 

```
**OK** AND **CRITICAL** => CRITICAL 
**OK** OR **CRITICAL** => OK  
```

The operations profile for AND operations is given in the following tabular:


| **AND** | **OK** | **WARNING** | **UNKNOWN** | **MISSING** | **CRITICAL** | **DOWNTIME** | 
| --- | --- |   --- | --- |  --- | --- | -- |
| **OK** | OK | WARNING | UNKNOWN | MISSING | CRITICAL | DOWNTIME |
| **WARNING** | WARNING | WARNING | UNKNOWN | MISSING | CRITICAL | DOWNTIME |
| **UNKNOWN** | UNKNOWN | UNKNOWN | UNKNOWN | MISSING | CRITICAL | DOWNTIME |
| **MISSING** | MISSING | MISSING | MISSING | MISSING | CRITICAL | DOWNTIME |
| **CRITICAL** | CRITICAL | CRITICAL | CRITICAL | CRITICAL | CRITICAL | CRITICAL |
| **DOWNTIME** | DOWNTIME | DOWNTIME | DOWNTIME | DOWNTIME |CRITICAL | DOWNTIME |

As can be seen the most prominent status in the case of the “AND” operation is the CRITICAL, while the least prominent is the “OK” status. 

The operations profile for “OR” operations is given in the following tabular:

| **OR** | **OK** | **WARNING** | **UNKNOWN** | **MISSING** | **CRITICAL** | **DOWNTIME** | 
| --- | --- |   --- | --- |  --- | --- | -- |
| **OK** | OK | OK | OK | OK | OK | OK |
| **WARNING** | OK | WARNING | WARNING | WARNING | WARNING | WARNING |
| **UNKNOWN** | OK | WARNING | UNKNOWN | UNKNOWN | CRITICAL | UNKNOWN |
| **MISSING** | OK | WARNING | UNKNOWN | MISSING | CRITICAL | DOWNTIME |
| **CRITICAL** | OK | WARNING | CRITICAL | CRITICAL | CRITICAL |CRITICAL |
| **DOWNTIME** | OK | WARNING | UNKNOWN | DOWNTIME | CRITICAL | DOWNTIME |

In the case of “OR” the most prominent status result is the “OK”. 

