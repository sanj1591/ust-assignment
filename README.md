# UST Assignment for MyDoc


## Installation

Use the npm package manager 

```bash
npm install 
```

## Usage

List of APIs

 ####  GET 

Endpoint : http://ec2-18-217-187-86.us-east-2.compute.amazonaws.com/object 

  It gets all the objects

```
Response :

{
    "objects": [
        {
            "key": "mykey1",
            "value": "value1",
            "timestamp": "1598464286",
            "__v": 0
        },
        {
            "key": "mykey1",
            "value": "value2",
            "timestamp": "1598464481",
            "__v": 0
        }
    ]
}

```

 #### POST

http://ec2-18-217-187-86.us-east-2.compute.amazonaws.com/object 

```
Request body :

{
"mykey":"value1"
}

```

 #### GET

http://ec2-18-217-187-86.us-east-2.compute.amazonaws.com/object/:mykey

It gets single latest value of key given

```
Response :

{
    "object": {
        "value": "value2"
    }
}

```

 #### GET

http://ec2-18-217-187-86.us-east-2.compute.amazonaws.com/object/:mykey/:timestamp 

It gets single latest value of key given at that particular timestamp

```
Response :

{
    "object": {
        "value": "value1"
    }
}

```
