# The base image
# Images developer can import thru hub.docker.com
FROM python:3.12.6-alpine

# To define the working directory
# i.e. root of the base image
WORKDIR /

# To copy the files to the working directory
# First dot copy everything from the current directory 
# Second dot means create the same directory files one the Working direvotry with the informaiton we have
COPY . .

# To install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# To open the port 5000 in the container
EXPOSE  5000

# To run the app in the container
CMD  ["python", "app.py"]

# To build docker on termimal
# docker build -t projectName:v1.0.0 .  (where projectName = student-record-management)
# to verify weather docker image is build in termimal 
# docker images


# to run the docker container 
#> docker run -p 5000:500 projectName  (first 5000 is expose port and second 5000 is browswer port)
#> docker run - p 5000:5000 student-record-management:v1.0.0


#----------INSTRCUTION ---------------------------------------
# TO CHECK THE DOCKER images on terminal:
    # > docker images
    # you will see the list of current docker create filename with version i.e: student-record-management   v1.0.1    bf20b609d894   5 minutes ago    175MB

# TO RUN THE DOCKER USER THIS LINE:
    # >  docker run -p 5000:500 student-record-management:v1.0.1

#--------------------------------------------------------------