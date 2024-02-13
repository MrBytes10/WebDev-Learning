
//Here is a program to find the nearest restaurant:
//START.........................
// Array of restaurants with name, latitude, longitude
        const restaurants = [
        ["Pizza Hut", 12.9121, 77.6024],
        ["Domino's", 12.9089, 77.6345],
        ["Burger King", 12.9203, 77.5983],
        ["KFC", 12.9307, 77.6114]  
        ];
        // Current location  
        const currentLat = 12.9147; 
        const currentLong = 77.6231;
        // Function to calculate distance between two lat/long points
        function getDistance(lat1, lon1, lat2, lon2) {
        // Haversine formula
        const R = 6371; // Radius of earth in km
        const dLat = (lat2-lat1) * Math.PI / 180;
        const dLon = (lon2-lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
                    Math.sin(dLon/2) * Math.sin(dLon/2);         
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c;
        return d; // Distance in km
        }
        // Find nearest restaurant
        let minDistance = Infinity; 
        let nearestRestaurant;

        for(let i = 0; i < restaurants.length; i++) {
        const dist = getDistance(
            currentLat, currentLong, 
            restaurants[i][1], restaurants[i][2]
        );
        
        if(dist < minDistance) {
            minDistance = dist;
            nearestRestaurant = restaurants[i][0]; 
        }  
        }
        console.log(`Nearest restaurant is ${nearestRestaurant}`);
/*
The key steps:
    1.Store list of restaurants with name, lat, long
    2. Define current location
    3. Calculate distance between two points using Haversine formula
    4. Loop through restaurants to find min distance
    5. Print nearest restaurant
*/
------This should be checked later and modify to a website..