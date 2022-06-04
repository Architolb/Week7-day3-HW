const getData = async () => {
    // const userInput = document.querySelector('.input').value
    const response = await fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
    const data = response.json()
    return data
}

getData()
    .then(data => {
        console.log(data)
        const position1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .positionText
        console.log(position1)

        document.querySelector('.pos-1').textContent = position1

    
    })

    getData()
    .then(data => {
        console.log(data)
        const position2 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[1]
        .positionText
        console.log(position2)

        document.querySelector('.pos-2').textContent = position2

    
    })


    getData()
    .then(data => {
        console.log(data)
        const position3 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[2]
        .positionText
        console.log(position3)

        document.querySelector('.pos-3').textContent = position3

    
    })    

    
    getData()
    .then(data => {
        console.log(data)
        const position4 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .positionText
        console.log(position4)

        document.querySelector('.pos-4').textContent = position4

    
    })

    getData()
    .then(data => {
        console.log(data)
        const position5 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[4]
        .positionText
        console.log(position5)

        document.querySelector('.pos-5').textContent = position5

    
    })


    getData()
    .then(data => {
        console.log(data)
        const position6 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[5]
        .positionText
        console.log(position6)

        document.querySelector('.pos-6').textContent = position6

    
    })


    getData()
    .then(data => {
        console.log(data)
        const position7 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[6]
        .positionText
        console.log(position7)

        document.querySelector('.pos-7').textContent = position7

    
    })

// set up nationality calls
    getData()
    .then(data => {
        console.log(data)
        const nat1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .Driver
        .nationality
        console.log(nat1)

        document.querySelector('.nation-1').textContent = nat1
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat2 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .Driver
        .nationality
        console.log(nat2)

        document.querySelector('.nation-2').textContent = nat2
        
    })



    getData()
    .then(data => {
        console.log(data)
        const nat3 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[2]
        .Driver
        .nationality
        console.log(nat3)

        document.querySelector('.nation-3').textContent = nat3
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat4 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .Driver
        .nationality
        console.log(nat4)

        document.querySelector('.nation-4').textContent = nat4
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat5 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[4]
        .Driver
        .nationality
        console.log(nat5)

        document.querySelector('.nation-5').textContent = nat5
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat6 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[5]
        .Driver
        .nationality
        console.log(nat6)

        document.querySelector('.nation-6').textContent = nat6
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat7 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[6]
        .Driver
        .nationality
        console.log(nat7)

        document.querySelector('.nation-7').textContent = nat7
        
    })


    getData()
    .then(data => {
        console.log(data)
        const nat1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .Driver
        .nationality
        console.log(nat1)

        document.querySelector('.nation-1').textContent = nat1
        
    })

    getData()
    .then(data => {
        console.log(data)
        const points1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .points
        console.log(points1)

        document.querySelector('.points-1').textContent = points1

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points2 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[1]
        .points
        console.log(points2)

        document.querySelector('.points-2').textContent = points2

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points3 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[2]
        .points
        console.log(points3)

        document.querySelector('.points-3').textContent = points3

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points4 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .points
        console.log(points4)

        document.querySelector('.points-4').textContent = points4

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points5 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[4]
        .points
        console.log(points5)

        document.querySelector('.points-5').textContent = points5

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points6 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[5]
        .points
        console.log(points6)

        document.querySelector('.points-6').textContent = points6

    
    })

    getData()
    .then(data => {
        console.log(data)
        const points7 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[6]
        .points
        console.log(points7)

        document.querySelector('.points-7').textContent = points7

    
    })

    getData()
    .then(data => {
        console.log(data)
        const constructs1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .Constructors[0]
        .name
        console.log(constructs1)

        document.querySelector('.constructs-1').textContent = constructs1


    })


    getData()
    .then(data => {
        console.log(data)
        const constructs2 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[1]
        .Constructors[0]
        .name
        console.log(constructs2)

        document.querySelector('.constructs-2').textContent = constructs2


    })


    getData()
    .then(data => {
        console.log(data)
        const constructs3 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[2]
        .Constructors[0]
        .name
        console.log(constructs3)

        document.querySelector('.constructs-3').textContent = constructs3


    })


    getData()
    .then(data => {
        console.log(data)
        const constructs4 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .Constructors[0]
        .name
        console.log(constructs4)

        document.querySelector('.constructs-4').textContent = constructs4


    })


    getData()
    .then(data => {
        console.log(data)
        const constructs5 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[4]
        .Constructors[0]
        .name
        console.log(constructs5)

        document.querySelector('.constructs-5').textContent = constructs5


    })


    getData()
    .then(data => {
        console.log(data)
        const constructs6 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[5]
        .Constructors[0]
        .name
        console.log(constructs6)

        document.querySelector('.constructs-6').textContent = constructs6


    })

    getData()
    .then(data => {
        console.log(data)
        const constructs7 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[6]
        .Constructors[0]
        .name
        console.log(constructs7)

        document.querySelector('.constructs-7').textContent = constructs7
    })

// names

    getData()
    .then(data => {
        console.log(data)
        const name1 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0]
        .Driver
        .familyName
        console.log(name1)

        document.querySelector('.name-1').textContent = name1


    })


    getData()
    .then(data => {
        console.log(data)
        const name2 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[1]
        .Driver
        .familyName
        console.log(name2)

        document.querySelector('.name-2').textContent = name2


    })

    getData()
    .then(data => {
        console.log(data)
        const name3 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[2]
        .Driver
        .familyName
        console.log(name3)

        document.querySelector('.name-3').textContent = name3


    })


    getData()
    .then(data => {
        console.log(data)
        const name4 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[3]
        .Driver
        .familyName
        console.log(name4)

        document.querySelector('.name-4').textContent = name4

    })

    getData()
    .then(data => {
        console.log(data)
        const name5 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[4]
        .Driver
        .familyName
        console.log(name5)

        document.querySelector('.name-5').textContent = name5


    })

    getData()
    .then(data => {
        console.log(data)
        const name6 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[5]
        .Driver
        .familyName
        console.log(name6)

        document.querySelector('.name-6').textContent = name6


    })

    getData()
    .then(data => {
        console.log(data)
        const name7 = data
        .MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[6]
        .Driver
        .familyName
        console.log(name7)

        document.querySelector('.name-7').textContent = name7


    })