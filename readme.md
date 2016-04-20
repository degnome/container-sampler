This is a very simple demo application that is used to show a web
client application executing in Docker containers. 

The application is very simple, a web client application communicates
to the Internet to determine if Internet connectivity exists and returns
the information to the user.

# Getting Started #

1. To start 3 instances of the website container with 1 lb instance execute the following.

```
$ docker-compose -f docker-compose-dev.yml scale web=3 lb=1 
```

2. To remove and clean up execute the following.

```
$ docker-compose -f docker-compose-dev.yml kill
$ docker-compose -f docker-compose-dev.yml rm
```

3. Access the website
	- http://{machine-ip}  (Load Balanced UI)
	- http://{machine-ip}:1936  (HAProxy)