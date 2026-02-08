db.players.insertMany([
    {
        "firstName":"Virat",
        "lastName":"Kohli",
        "email":"viratkohli@example.com",
        "phone":"+911123456798",
        "address":{
            "street":"1 cricket lane",
            "city":"Delhi",
            "state":"DL",
            "postalCode":"110001",
            "country":"India"
        }
    },
    {
        "firstName":"Rohith",
        "lastName":"Sharma",
        "email":"Rohithsharma@example.com",
        "phone":"+913456765432",
        "address":{
            "street":"41 stadium road",
            "city":"Mumbai",
            "state":"MH",
            "postalCode":"400001",
            "country":"India"
        }
    },
    {
        "firstName":"MS",
        "lastName":"Dhoni",
        "email":"msdhoni@example.com",
        "phone":"+916729472892",
        "address":{
            "street":"42 Ranchi road",
            "city":"Jharkhand",
            "state":"JH",
            "postalCode":"50032",
            "country":"India"
        }
    },
    {
        "firstName":"Ravindra",
        "lastName":"Jadeja",
        "email":"ravindrajadeja@example.com",
        "phone":"+913890765456",
        "address":{
            "street":"3 All-rounder road",
            "city":"Jamnagar",
            "state":"GJ",
            "postalCode":"361001",
            "country":"India"
        }
    },
    {
        "firstName":"Hardik",
        "lastName":"Pandya",
        "email":"hardikpandya@example.com",
        "phone":"+913245347895",
        "address":{
            "street":"19 al-rounder road",
            "city":"Baroda",
            "state":"GJ",
            "postalCode":"390001",
            "country":"India"
        }
    },
    {
        "firstName":"Ajinkya",
        "lastName":"Rahane",
        "email":"ajinkyarahane@example.com",
        "phone":"+913267585456",
        "address":{
            "street":"41 stadium road",
            "city":"Mumbai",
            "state":"MH",
            "postalCode":"400001",
            "country":"India"
        }
    },{
        "firstName":"cheteshwar",
        "lastName":"Pujara",
        "email":"cheteshwarpujara@example.com",
        "phone":"+915647893489",
        "address":{
            "street":"25 Test road",
            "city":"Rajkot",
            "state":"GJ",
            "postalCode":"360001",
            "country":"India"
        }
    },{
        "firstName":"Bhuvaneshwar",
        "lastName":"Kumar",
        "email":"bhuvaneshwarkumar@example.com",
        "phone":"+917869765435",
        "address":{
            "street":"25 swing road",
            "city":"Meerut",
            "state":"UP",
            "postalCode":"250001",
            "country":"India"
        }
    }
    
])

db.playersStats.insertMany([
    {
        "playerId": ObjectId('69687c47b7b10e000129d2e2'),
        "matchesPlayed":250,
        "runsScored":12000,
        "avg":48.00
    },
    {
        "playerId": ObjectId('69687c47b7b10e000129d2e3'),
        "matchesPlayed":200,
        "runsScored":10500,
        "avg":52.50
    },
    {
        "playerId": ObjectId('69687c47b7b10e000129d2e4'),
        "matchesPlayed":350,
        "runsScored":10000,
        "avg":28.50
    }


])
