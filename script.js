
        // Global variables
        document.addEventListener('DOMContentLoaded', function() {
    // Graph data structure for each city
    const cityGraphs = {
        delhi: {
            locations: [
                "Red Fort", "India Gate", "Qutub Minar", "Lotus Temple", 
                "Humayun's Tomb", "Akshardham Temple", "Jama Masjid", "Chandni Chowk"
            ],
            // Adjacency list representation
            connections: {
                "Red Fort": [
                    { to: "India Gate", distance: 5 },
                    { to: "Chandni Chowk", distance: 2 },
                    { to: "Jama Masjid", distance: 3 }
                ],
                "India Gate": [
                    { to: "Red Fort", distance: 5 },
                    { to: "Humayun's Tomb", distance: 4 },
                    { to: "Lotus Temple", distance: 7 }
                ],
                "Qutub Minar": [
                    { to: "Lotus Temple", distance: 6 },
                    { to: "Humayun's Tomb", distance: 8 }
                ],
                "Lotus Temple": [
                    { to: "India Gate", distance: 7 },
                    { to: "Qutub Minar", distance: 6 },
                    { to: "Akshardham Temple", distance: 10 }
                ],
                "Humayun's Tomb": [
                    { to: "India Gate", distance: 4 },
                    { to: "Qutub Minar", distance: 8 },
                    { to: "Akshardham Temple", distance: 9 }
                ],
                "Akshardham Temple": [
                    { to: "Lotus Temple", distance: 10 },
                    { to: "Humayun's Tomb", distance: 9 }
                ],
                "Jama Masjid": [
                    { to: "Red Fort", distance: 3 },
                    { to: "Chandni Chowk", distance: 1 }
                ],
                "Chandni Chowk": [
                    { to: "Red Fort", distance: 2 },
                    { to: "Jama Masjid", distance: 1 }
                ]
            }
        },
        bangalore: {
            locations: [
                "Lalbagh Botanical Garden", "Cubbon Park", "UB City",
                "Vidhana Soudha", "Bangalore Palace", "ISKCON Temple",
                "Wonderla", "Nandi Hills"
            ],
            connections: {
                "Lalbagh Botanical Garden": [
                    { to: "Cubbon Park", distance: 4 },
                    { to: "UB City", distance: 5 }
                ],
                "Cubbon Park": [
                    { to: "Lalbagh Botanical Garden", distance: 4 },
                    { to: "Vidhana Soudha", distance: 1 },
                    { to: "UB City", distance: 3 }
                ],
                "UB City": [
                    { to: "Lalbagh Botanical Garden", distance: 5 },
                    { to: "Cubbon Park", distance: 3 },
                    { to: "Bangalore Palace", distance: 6 }
                ],
                "Vidhana Soudha": [
                    { to: "Cubbon Park", distance: 1 },
                    { to: "Bangalore Palace", distance: 5 }
                ],
                "Bangalore Palace": [
                    { to: "Vidhana Soudha", distance: 5 },
                    { to: "UB City", distance: 6 },
                    { to: "ISKCON Temple", distance: 9 }
                ],
                "ISKCON Temple": [
                    { to: "Bangalore Palace", distance: 9 },
                    { to: "Wonderla", distance: 15 }
                ],
                "Wonderla": [
                    { to: "ISKCON Temple", distance: 15 },
                    { to: "Nandi Hills", distance: 18 }
                ],
                "Nandi Hills": [
                    { to: "Wonderla", distance: 18 }
                ]
            }
        },
        uttrakhand: {
            locations: [
                "Haridwar", "Rishikesh", "Mussoorie", 
                "Nainital", "Dehradun", "Jim Corbett",
                "Auli", "Kedarnath"
            ],
            connections: {
                "Haridwar": [
                    { to: "Rishikesh", distance: 25 },
                    { to: "Dehradun", distance: 50 }
                ],
                "Rishikesh": [
                    { to: "Haridwar", distance: 25 },
                    { to: "Mussoorie", distance: 45 },
                    { to: "Dehradun", distance: 40 }
                ],
                "Mussoorie": [
                    { to: "Rishikesh", distance: 45 },
                    { to: "Dehradun", distance: 35 }
                ],
                "Nainital": [
                    { to: "Jim Corbett", distance: 65 },
                    { to: "Dehradun", distance: 170 }
                ],
                "Dehradun": [
                    { to: "Haridwar", distance: 50 },
                    { to: "Rishikesh", distance: 40 },
                    { to: "Mussoorie", distance: 35 },
                    { to: "Nainital", distance: 170 }
                ],
                "Jim Corbett": [
                    { to: "Nainital", distance: 65 }
                ],
                "Auli": [
                    { to: "Rishikesh", distance: 230 },
                    { to: "Kedarnath", distance: 120 }
                ],
                "Kedarnath": [
                    { to: "Auli", distance: 120 }
                ]
            }
        }
    };

    // Driver information for each city
    const cityDrivers = {
        delhi: [
            { name: "Raj Kumar", rating: 4.8, vehicles: ["Sedan", "SUV"], experience: "8 years", phone: "+91 9876543210" },
            { name: "Amit Singh", rating: 4.5, vehicles: ["Hatchback", "Van"], experience: "5 years", phone: "+91 9876543211" },
            { name: "Vijay Sharma", rating: 4.9, vehicles: ["Luxury Sedan", "SUV"], experience: "10 years", phone: "+91 9876543212" }
        ],
        bangalore: [
            { name: "Karthik R", rating: 4.7, vehicles: ["Sedan", "Electric Car"], experience: "6 years", phone: "+91 9876543213" },
            { name: "Mahesh Kumar", rating: 4.6, vehicles: ["Hatchback", "SUV"], experience: "7 years", phone: "+91 9876543214" },
            { name: "Suresh Babu", rating: 4.8, vehicles: ["Luxury Sedan", "Minivan"], experience: "9 years", phone: "+91 9876543215" }
        ],
        uttrakhand: [
            { name: "Deepak Rawat", rating: 4.7, vehicles: ["SUV", "MUV"], experience: "12 years", phone: "+91 9876543216" },
            { name: "Hemant Bisht", rating: 4.9, vehicles: ["Jeep", "Off-road SUV"], experience: "15 years", phone: "+91 9876543217" },
            { name: "Sanjay Negi", rating: 4.6, vehicles: ["Tata Sumo", "Mahindra Bolero"], experience: "10 years", phone: "+91 9876543218" }
        ] 
    };

    // DOM elements
    const elements = {
        // Screens
        loadingScreen: document.getElementById('loadingScreen'),
        welcomeScreen: document.getElementById('welcomeScreen'),
        citySelection: document.getElementById('citySelection'),
        locationsScreen: document.getElementById('locationsScreen'),
        navigationOptions: document.getElementById('navigationOptions'),
        pathfindingScreen: document.getElementById('pathfindingScreen'),
        allLocationsScreen: document.getElementById('allLocationsScreen'),
        driverInfoScreen: document.getElementById('driverInfoScreen'),

        // Buttons
        startBtn: document.getElementById('startBtn'),
        exploreBtn: document.getElementById('exploreBtn'),
        backToCities: document.getElementById('backToCities'),
        backToLocations: document.getElementById('backToLocations'),
        backToOptions: document.getElementById('backToOptions'),
        backToOptionsFromAll: document.getElementById('backToOptionsFromAll'),
        backToOptionsFromDrivers: document.getElementById('backToOptionsFromDrivers'),
        findShortestBtn: document.getElementById('findShortestBtn'),
        addStopsBtn: document.getElementById('addStopsBtn'),
        findPathWithStopsBtn: document.getElementById('findPathWithStopsBtn'),
        addStopBtn: document.getElementById('addStopBtn'),

        // Elements for dynamic content
        progressFill: document.getElementById('progressFill'),
        locationsList: document.getElementById('locationsList'),
        selectedCityName: document.getElementById('selectedCityName'),
        currentLocationName: document.getElementById('currentLocationName'),
        fromLocation: document.getElementById('fromLocation'),
        toLocation: document.getElementById('toLocation'),
        mapVisualization: document.getElementById('mapVisualization'),
        allPaths: document.getElementById('allPaths'),
        startingPoint: document.getElementById('startingPoint'),
        allLocationsMap: document.getElementById('allLocationsMap'),
        optimalPath: document.getElementById('optimalPath'),
        totalDistance: document.getElementById('totalDistance'),
        driverLocationName: document.getElementById('driverLocationName'),
        driversList: document.getElementById('driversList'),
        stopSelection: document.getElementById('stopSelection'),
        stopSelect: document.getElementById('stopSelect'),
        selectedStops: document.getElementById('selectedStops')
    };

    // Option cards
    const optionCards = {
        travel: document.getElementById('optionTravel'),
        visitAll: document.getElementById('optionVisitAll'),
        transport: document.getElementById('optionTransport')
    };

    // State variables
    let currentState = {
        city: null,
        currentLocation: null,
        destinations: [],
        selectedStops: []
    };

    // Start animation
    elements.progressFill.style.width = '100%';

    // Event listeners for buttons
    elements.startBtn.addEventListener('click', function() {
        elements.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            elements.loadingScreen.style.display = 'none';
            elements.welcomeScreen.style.display = 'block';
        }, 500);
    });

    elements.exploreBtn.addEventListener('click', function() {
        elements.welcomeScreen.style.display = 'none';
        elements.citySelection.style.display = 'block';
    });

    elements.backToCities.addEventListener('click', function() {
        elements.locationsScreen.style.display = 'none';
        elements.citySelection.style.display = 'block';
    });

    elements.backToLocations.addEventListener('click', function() {
        elements.navigationOptions.style.display = 'none';
        elements.locationsScreen.style.display = 'block';
    });

    elements.backToOptions.addEventListener('click', function() {
        elements.pathfindingScreen.style.display = 'none';
        elements.navigationOptions.style.display = 'block';
    });

    elements.backToOptionsFromAll.addEventListener('click', function() {
        elements.allLocationsScreen.style.display = 'none';
        elements.navigationOptions.style.display = 'block';
    });

    elements.backToOptionsFromDrivers.addEventListener('click', function() {
        elements.driverInfoScreen.style.display = 'none';
        elements.navigationOptions.style.display = 'block';
    });

    // City selection
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach(card => {
        card.addEventListener('click', function() {
            const selectedCity = this.getAttribute('data-city');
            currentState.city = selectedCity;
            showLocations(selectedCity);
        });
    });

    // Option cards event listeners
    optionCards.travel.addEventListener('click', function() {
        showPathfinding();
    });

    optionCards.visitAll.addEventListener('click', function() {
        showAllLocationsRoute();
    });

    optionCards.transport.addEventListener('click', function() {
        showDriverInfo();
    });

    // Path finding buttons
    elements.findShortestBtn.addEventListener('click', function() {
        findShortestPath();
    });

    elements.addStopsBtn.addEventListener('click', function() {
        elements.stopSelection.style.display = 'block';
        populateStopSelect();
    });

    elements.addStopBtn.addEventListener('click', function() {
        addStop();
    });

    elements.findPathWithStopsBtn.addEventListener('click', function() {
        findPathWithStops();
    });

    // Helper function to display locations for a selected city
    function showLocations(city) {
        elements.citySelection.style.display = 'none';
        elements.locationsScreen.style.display = 'block';
        
        // Update city name
        elements.selectedCityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
        
        // Clear previous locations
        elements.locationsList.innerHTML = '';
        
        // Add locations
        const cityData = cityGraphs[city];
        cityData.locations.forEach(location => {
            const locationItem = document.createElement('div');
            locationItem.className = 'location-item';
            locationItem.textContent = location;
            locationItem.addEventListener('click', function() {
                currentState.currentLocation = location;
                showNavigationOptions(location);
            });
            
            elements.locationsList.appendChild(locationItem);
        });
    }

    // Helper function to display navigation options
    function showNavigationOptions(location) {
        elements.locationsScreen.style.display = 'none';
        elements.navigationOptions.style.display = 'block';
        
        // Update location name
        elements.currentLocationName.textContent = location;
    }

    // Helper function to show pathfinding screen
    function showPathfinding() {
        elements.navigationOptions.style.display = 'none';
        elements.pathfindingScreen.style.display = 'block';
        
        // Clear previous data
        elements.allPaths.innerHTML = '';
        elements.stopSelection.style.display = 'none';
        currentState.selectedStops = [];
        elements.selectedStops.innerHTML = '';
        
        // Populate dropdowns
        populateLocationDropdowns();
        
        // Visualize the graph
        visualizeGraph();
    }

    // Helper function to populate location dropdowns
    function populateLocationDropdowns() {
        const cityData = cityGraphs[currentState.city];
        
        // Clear previous options
        elements.fromLocation.innerHTML = '';
        elements.toLocation.innerHTML = '';
        
        // Set current location as from
        const fromOption = document.createElement('option');
        fromOption.value = currentState.currentLocation;
        fromOption.textContent = currentState.currentLocation;
        elements.fromLocation.appendChild(fromOption);
        
        // Add all other locations to destination dropdown
        cityData.locations.forEach(location => {
            if (location !== currentState.currentLocation) {
                const toOption = document.createElement('option');
                toOption.value = location;
                toOption.textContent = location;
                elements.toLocation.appendChild(toOption);
            }
        });
    }

    // Helper function to populate stop selection dropdown
    function populateStopSelect() {
        const cityData = cityGraphs[currentState.city];
        
        // Clear previous options
        elements.stopSelect.innerHTML = '';
        
        // Add all locations except source and destination
        const source = elements.fromLocation.value;
        const destination = elements.toLocation.value;
        
        cityData.locations.forEach(location => {
            if (location !== source && location !== destination && !currentState.selectedStops.includes(location)) {
                const option = document.createElement('option');
                option.value = location;
                option.textContent = location;
                elements.stopSelect.appendChild(option);
            }
        });
    }

    // Helper function to add a stop
    function addStop() {
        const selectedStop = elements.stopSelect.value;
        
        if (selectedStop && !currentState.selectedStops.includes(selectedStop)) {
            currentState.selectedStops.push(selectedStop);
            
            // Create a stop tag
            const stopTag = document.createElement('div');
            stopTag.className = 'stop-tag';
            stopTag.innerHTML = `
                ${selectedStop}
                <span class="remove-stop" data-stop="${selectedStop}">&times;</span>
            `;
            
            elements.selectedStops.appendChild(stopTag);
            
            // Add event listener to remove button
            stopTag.querySelector('.remove-stop').addEventListener('click', function() {
                const stopToRemove = this.getAttribute('data-stop');
                removeStop(stopToRemove);
                this.parentElement.remove();
            });
            
            // Update stop dropdown
            populateStopSelect();
        }
    }

    // Helper function to remove a stop
    function removeStop(stop) {
        currentState.selectedStops = currentState.selectedStops.filter(s => s !== stop);
        populateStopSelect();
    }

    // Graph visualization
    function visualizeGraph() {
        elements.mapVisualization.innerHTML = '';
        
        const cityData = cityGraphs[currentState.city];
        const nodes = {};
        const edges = [];
        
        // Create nodes with positions
        const centerX = elements.mapVisualization.offsetWidth / 2;
        const centerY = elements.mapVisualization.offsetHeight / 2;
        const radius = Math.min(centerX, centerY) - 50;
        
        cityData.locations.forEach((location, index) => {
            const angle = (2 * Math.PI * index) / cityData.locations.length;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            nodes[location] = { x, y };
            
            // Create node element
            const nodeElement = document.createElement('div');
            nodeElement.className = 'map-node';
            nodeElement.textContent = index + 1;
            nodeElement.style.left = x + 'px';
            nodeElement.style.top = y + 'px';
            nodeElement.title = location;
            
            // Highlight current location
            if (location === currentState.currentLocation) {
                nodeElement.style.backgroundColor = 'var(--accent)';
                nodeElement.style.width = '36px';
                nodeElement.style.height = '36px';
            }
            
            elements.mapVisualization.appendChild(nodeElement);
        });
        
        // Create edges
        for (const [source, targets] of Object.entries(cityData.connections)) {
            targets.forEach(target => {
                // Avoid duplicate edges
                const edgeKey1 = `${source}-${target.to}`;
                const edgeKey2 = `${target.to}-${source}`;
                
                if (!edges.includes(edgeKey1) && !edges.includes(edgeKey2)) {
                    edges.push(edgeKey1);
                    
                    const sourceNode = nodes[source];
                    const targetNode = nodes[target.to];
                    
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    
                    const edgeElement = document.createElement('div');
                    edgeElement.className = 'map-edge';
                    edgeElement.style.width = distance + 'px';
                    edgeElement.style.left = sourceNode.x + 'px';
                    edgeElement.style.top = sourceNode.y + 'px';
                    edgeElement.style.transform = `rotate(${angle}deg)`;
                    
                    // Add distance label
                    const middleX = sourceNode.x + dx / 2;
                    const middleY = sourceNode.y + dy / 2;
                    
                    const distanceLabel = document.createElement('div');
                    distanceLabel.style.position = 'absolute';
                    distanceLabel.style.left = middleX + 'px';
                    distanceLabel.style.top = middleY + 'px';
                    distanceLabel.style.transform = 'translate(-50%, -50%)';
                    distanceLabel.style.background = 'white';
                    distanceLabel.style.padding = '2px 5px';
                    distanceLabel.style.borderRadius = '10px';
                    distanceLabel.style.fontSize = '10px';
                    distanceLabel.style.fontWeight = 'bold';
                    distanceLabel.style.zIndex = '3';
                    distanceLabel.textContent = target.distance + ' km';
                    
                    elements.mapVisualization.appendChild(edgeElement);
                    elements.mapVisualization.appendChild(distanceLabel);
                }
            });
        }
        
        // Add legend
        const legend = document.createElement('div');
        legend.style.position = 'absolute';
        legend.style.bottom = '10px';
        legend.style.right = '10px';
        legend.style.background = 'rgba(255, 255, 255, 0.8)';
        legend.style.padding = '5px';
        legend.style.borderRadius = '5px';
        legend.style.fontSize = '12px';
        
        // Create a table for the legend
        const table = document.createElement('table');
        
        // Loop through all locations and add to legend
        cityData.locations.forEach((location, index) => {
            const row = document.createElement('tr');
            
            const indexCell = document.createElement('td');
            indexCell.textContent = (index + 1) + '.';
            indexCell.style.padding = '2px 5px';
            
            const nameCell = document.createElement('td');
            nameCell.textContent = location;
            nameCell.style.padding = '2px 5px';
            
            row.appendChild(indexCell);
            row.appendChild(nameCell);
            table.appendChild(row);
        });
        
        legend.appendChild(table);
        elements.mapVisualization.appendChild(legend);
    }

    // Helper function to find all paths between two locations
    function findAllPaths(start, end, graph, visited = new Set(), path = [], allPaths = [], maxDepth = 10) {
        if (path.length > maxDepth) return allPaths;
        
        visited.add(start);
        path.push(start);
        
        if (start === end) {
            allPaths.push([...path]);
        } else {
            const neighbors = graph.connections[start] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.to)) {
                    findAllPaths(neighbor.to, end, graph, new Set(visited), [...path], allPaths, maxDepth);
                }
            }
        }
        
        return allPaths;
    }

    // Helper function to calculate path distance
    function calculatePathDistance(path, graph) {
        let distance = 0;
        
        for (let i = 0; i < path.length - 1; i++) {
            const source = path[i];
            const target = path[i + 1];
            
            const connection = graph.connections[source].find(conn => conn.to === target);
            if (connection) {
                distance += connection.distance;
            }
        }
        
        return distance;
    }

    // Find shortest path
    function findShortestPath() {
        const source = elements.fromLocation.value;
        const destination = elements.toLocation.value;
        
        if (source === destination) {
            alert("Source and destination cannot be the same!");
            return;
        }
        
        const cityData = cityGraphs[currentState.city];
        const allPaths = findAllPaths(source, destination, cityData);
        
        if (allPaths.length === 0) {
            elements.allPaths.innerHTML = '<p>No paths found between these locations.</p>';
            return;
        }
        
        // Sort paths by distance
        allPaths.sort((a, b) => {
            const distanceA = calculatePathDistance(a, cityData);
            const distanceB = calculatePathDistance(b, cityData);
            return distanceA - distanceB;
        });
        
        // Display paths
        elements.allPaths.innerHTML = '';
        
        allPaths.forEach((path, index) => {
            const distance = calculatePathDistance(path, cityData);
            
            const pathItem = document.createElement('div');
            pathItem.className = 'path-item';
            
            // Format the path as a string
            const pathString = path.join(' → ');
            const isShortestPath = index === 0;
            
            pathItem.innerHTML = `
                <strong>Path ${index + 1}${isShortestPath ? ' (Shortest)' : ''}</strong>: ${pathString}
                <br>
                <span>Distance: ${distance} km</span>
                <div class="path-details" id="path-details-${index}">
                    <h4>Step by Step Guide:</h4>
                    <ol>
                        ${generateStepByStep(path, cityData)}
                    </ol>
                </div>
            `;
            
            // Add click event to show/hide details
            pathItem.addEventListener('click', function() {
                const details = document.getElementById(`path-details-${index}`);
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            });
            
            elements.allPaths.appendChild(pathItem);
            
            // Highlight shortest path
            if (isShortestPath) {
                pathItem.style.borderLeft = '4px solid var(--success)';
                pathItem.style.backgroundColor = '#f0fff0';
            }
        });
    }

    // Generate step by step guide
    function generateStepByStep(path, cityData) {
        let steps = '';
        
        for (let i = 0; i < path.length - 1; i++) {
            const source = path[i];
            const target = path[i + 1];
            
            const connection = cityData.connections[source].find(conn => conn.to === target);
            if (connection) {
                steps += `<li>From <strong>${source}</strong> travel ${connection.distance} km to reach <strong>${target}</strong>.</li>`;
            }
        }
        
        return steps;
    }

    // Find path with stops
    function findPathWithStops() {
        const source = elements.fromLocation.value;
        const destination = elements.toLocation.value;
        const stops = currentState.selectedStops;
        
        if (stops.length === 0) {
            alert("Please select at least one stop!");
            return;
        }
        
        const cityData = cityGraphs[currentState.city];
        
        // Find a path that includes all the stops
        let fullPath = [source];
        let totalDistance = 0;
        let currentLocation = source;
        
        // Add each stop in the selected order
        for (const stop of stops) {
            const paths = findAllPaths(currentLocation, stop, cityData);
            
            if (paths.length === 0) {
                alert(`No path found from ${currentLocation} to ${stop}!`);
                return;
            }
            
            // Find shortest path to the next stop
            paths.sort((a, b) => {
                const distanceA = calculatePathDistance(a, cityData);
                const distanceB = calculatePathDistance(b, cityData);
                return distanceA - distanceB;
            });
            
            const shortestPath = paths[0];
            
            // Add the path (excluding the first element which is already included)
            for (let i = 1; i < shortestPath.length; i++) {
                fullPath.push(shortestPath[i]);
            }
            
            totalDistance += calculatePathDistance(shortestPath, cityData);
            currentLocation = stop;
        }
        
        // Finally, add path from last stop to destination
        const finalPaths = findAllPaths(currentLocation, destination, cityData);
        
        if (finalPaths.length === 0) {
            alert(`No path found from ${currentLocation} to ${destination}!`);
            return;
        }
        
        // Find shortest final path
        finalPaths.sort((a, b) => {
            const distanceA = calculatePathDistance(a, cityData);
            const distanceB = calculatePathDistance(b, cityData);
            return distanceA - distanceB;
        });
        
        const finalPath = finalPaths[0];
        
        // Add the final path (excluding the first element which is already included)
        for (let i = 1; i < finalPath.length; i++) {
            fullPath.push(finalPath[i]);
        }
        
        totalDistance += calculatePathDistance(finalPath, cityData);
        
        // Display the results
        elements.allPaths.innerHTML = '';
        
        const pathItem = document.createElement('div');
        pathItem.className = 'path-item';
        
        // Format the path as a string
        const pathString = fullPath.join(' → ');
        
        pathItem.innerHTML = `
            <strong>Complete Route with Stops</strong>: ${pathString}
            <br>
            <span>Total Distance: ${totalDistance} km</span>
            <div class="path-details" id="path-details-stops" style="display: block;">
                <h4>Step by Step Guide:</h4>
                <ol>
                    ${generateStepByStep(fullPath, cityData)}
                </ol>
            </div>
        `;
        
        elements.allPaths.appendChild(pathItem);
    }

    // Show all locations route
    function showAllLocationsRoute() {
        elements.navigationOptions.style.display = 'none';
        elements.allLocationsScreen.style.display = 'block';
        
        elements.startingPoint.textContent = currentState.currentLocation;
        
        // Visualize graph for all locations
        visualizeAllLocationsGraph();
        
        // Find optimal TSP-like route (simplified)
        findOptimalRoute();
    }

    // Visualize graph for all locations
    function visualizeAllLocationsGraph() {
        elements.allLocationsMap.innerHTML = '';
        
        const cityData = cityGraphs[currentState.city];
        const nodes = {};
        const edges = [];
        
        // Create nodes with positions
        const centerX = elements.allLocationsMap.offsetWidth / 2;
        const centerY = elements.allLocationsMap.offsetHeight / 2;
        const radius = Math.min(centerX, centerY) - 50;
        
        cityData.locations.forEach((location, index) => {
            const angle = (2 * Math.PI * index) / cityData.locations.length;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            nodes[location] = { x, y };
            
            // Create node element
            const nodeElement = document.createElement('div');
            nodeElement.className = 'map-node';
            nodeElement.textContent = index + 1;
            nodeElement.style.left = x + 'px';
            nodeElement.style.top = y + 'px';
            nodeElement.title = location;
            
            // Highlight current location
            if (location === currentState.currentLocation) {
                nodeElement.style.backgroundColor = 'var(--accent)';
                nodeElement.style.width = '36px';
                nodeElement.style.height = '36px';
            }
            
            elements.allLocationsMap.appendChild(nodeElement);
        });
        
        // Create edges
        for (const [source, targets] of Object.entries(cityData.connections)) {
            targets.forEach(target => {
                // Avoid duplicate edges
                const edgeKey1 = `${source}-${target.to}`;
                const edgeKey2 = `${target.to}-${source}`;
                
                if (!edges.includes(edgeKey1) && !edges.includes(edgeKey2)) {
                    edges.push(edgeKey1);
                    
                    const sourceNode = nodes[source];
                    const targetNode = nodes[target.to];
                    
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    
                    const edgeElement = document.createElement('div');
                    edgeElement.className = 'map-edge';
                    edgeElement.style.width = distance + 'px';
                    edgeElement.style.left = sourceNode.x + 'px';
                    edgeElement.style.top = sourceNode.y + 'px';
                    edgeElement.style.transform = `rotate(${angle}deg)`;
                    
                    elements.allLocationsMap.appendChild(edgeElement);
                    
                    // Add distance label
                    const middleX = sourceNode.x + dx / 2;
                    const middleY = sourceNode.y + dy / 2;
                    
                    const distanceLabel = document.createElement('div');
                    distanceLabel.style.position = 'absolute';
                    distanceLabel.style.left = middleX + 'px';
                    distanceLabel.style.top = middleY + 'px';
                    distanceLabel.style.transform = 'translate(-50%, -50%)';
                    distanceLabel.style.background = 'white';
                    distanceLabel.style.padding = '2px 5px';
                    distanceLabel.style.borderRadius = '10px';
                    distanceLabel.style.fontSize = '10px';
                    distanceLabel.style.fontWeight = 'bold';
                    distanceLabel.style.zIndex = '3';
                    distanceLabel.textContent = target.distance + ' km';
                    
                    elements.allLocationsMap.appendChild(distanceLabel);
                }
            });
        }
        
        // Add legend
        const legend = document.createElement('div');
        legend.style.position = 'absolute';
        legend.style.bottom = '10px';
        legend.style.right = '10px';
        legend.style.background = 'rgba(255, 255, 255, 0.8)';
        legend.style.padding = '5px';
        legend.style.borderRadius = '5px';
        legend.style.fontSize = '12px';
        
        // Create a table for the legend
        const table = document.createElement('table');
        
        // Loop through all locations and add to legend
        cityData.locations.forEach((location, index) => {
            const row = document.createElement('tr');
            
            const indexCell = document.createElement('td');
            indexCell.textContent = (index + 1) + '.';
            indexCell.style.padding = '2px 5px';
            
            const nameCell = document.createElement('td');
            nameCell.textContent = location;
            nameCell.style.padding = '2px 5px';
            
            row.appendChild(indexCell);
            row.appendChild(nameCell);
            table.appendChild(row);
        });
        
        legend.appendChild(table);
        elements.allLocationsMap.appendChild(legend);
    }

    // Find optimal route (simplified TSP)
    function findOptimalRoute() {
        const cityData = cityGraphs[currentState.city];
        const startLocation = currentState.currentLocation;
        
        // Use nearest neighbor algorithm for simplicity
        const unvisited = [...cityData.locations];
        const visited = [startLocation];
        let currentLocation = startLocation;
        let totalDistance = 0;
        
        // Remove start location from unvisited
        const startIndex = unvisited.indexOf(startLocation);
        if (startIndex !== -1) {
            unvisited.splice(startIndex, 1);
        }
        
        // Find nearest neighbors one by one
        while (unvisited.length > 0) {
            // Find nearest unvisited location
            let nearestLocation = null;
            let shortestDistance = Infinity;
            
            for (const location of unvisited) {
                const path = findShortestPathBetween(currentLocation, location, cityData);
                if (path && path.distance < shortestDistance) {
                    shortestDistance = path.distance;
                    nearestLocation = location;
                }
            }
            
            if (nearestLocation) {
                // Add to visited and remove from unvisited
                visited.push(nearestLocation);
                const index = unvisited.indexOf(nearestLocation);
                if (index !== -1) {
                    unvisited.splice(index, 1);
                }
                
                // Update current location and total distance
                totalDistance += shortestDistance;
                currentLocation = nearestLocation;
            } else {
                // No path found to any remaining locations
                break;
            }
        }
        
        // Add the return path back to start
        const returnPath = findShortestPathBetween(currentLocation, startLocation, cityData);
        if (returnPath) {
            visited.push(startLocation);
            totalDistance += returnPath.distance;
        }
        
        // Display the route
        displayOptimalRoute(visited, totalDistance);
    }

    // Find shortest path between two locations using Dijkstra's algorithm
    function findShortestPathBetween(start, end, graph) {
        const distances = {};
        const previous = {};
        const unvisited = new Set();
        
        // Initialize distances
        for (const location of graph.locations) {
            distances[location] = location === start ? 0 : Infinity;
            previous[location] = null;
            unvisited.add(location);
        }
        
        while (unvisited.size > 0) {
            // Find location with minimum distance
            let current = null;
            let minDistance = Infinity;
            
            for (const location of unvisited) {
                if (distances[location] < minDistance) {
                    minDistance = distances[location];
                    current = location;
                }
            }
            
            // If we can't find a reachable node, break
            if (current === null || distances[current] === Infinity) break;
            
            // If we've reached the end, we're done
            if (current === end) break;
            
            // Remove from unvisited
            unvisited.delete(current);
            
            // Check neighbors
            const neighbors = graph.connections[current] || [];
            
            for (const neighbor of neighbors) {
                if (unvisited.has(neighbor.to)) {
                    const alt = distances[current] + neighbor.distance;
                    if (alt < distances[neighbor.to]) {
                        distances[neighbor.to] = alt;
                        previous[neighbor.to] = current;
                    }
                }
            }
        }
        
        // If end is not reachable
        if (distances[end] === Infinity) return null;
        
        // Reconstruct path
        const path = [];
        let current = end;
        
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }
        
        return {
            path: path,
            distance: distances[end]
        };
    }

    // Display optimal route
    function displayOptimalRoute(route, totalDistance) {
        elements.optimalPath.innerHTML = '';
        elements.totalDistance.textContent = totalDistance + ' km';
        
        // Create route display
        const routeString = route.join(' → ');
        const routeElement = document.createElement('div');
        routeElement.className = 'route-display';
        routeElement.textContent = routeString;
        
        elements.optimalPath.appendChild(routeElement);
        
        // Create step-by-step guide
        const guideElement = document.createElement('div');
        guideElement.className = 'step-guide';
        guideElement.innerHTML = '<h4>Step by Step Guide:</h4>';
        
        const list = document.createElement('ol');
        
        for (let i = 0; i < route.length - 1; i++) {
            const source = route[i];
            const target = route[i + 1];
            
            const path = findShortestPathBetween(source, target, cityGraphs[currentState.city]);
            
            if (path) {
                const item = document.createElement('li');
                
                if (path.path.length > 2) {
                    item.innerHTML = `From <strong>${source}</strong> to <strong>${target}</strong> via ${path.path.slice(1, -1).join(', ')} (${path.distance} km)`;
                } else {
                    item.innerHTML = `From <strong>${source}</strong> to <strong>${target}</strong> (${path.distance} km)`;
                }
                
                list.appendChild(item);
            }
        }
        
        guideElement.appendChild(list);
        elements.optimalPath.appendChild(guideElement);
    }

    // Show driver information
    function showDriverInfo() {
        elements.navigationOptions.style.display = 'none';
        elements.driverInfoScreen.style.display = 'block';
        
        elements.driverLocationName.textContent = currentState.city.charAt(0).toUpperCase() + currentState.city.slice(1);
        
        // Display driver information
        displayDrivers();
    }

    // Display drivers
    function displayDrivers() {
        elements.driversList.innerHTML = '';
        
        const drivers = cityDrivers[currentState.city];
        
        drivers.forEach(driver => {
            const driverCard = document.createElement('div');
            driverCard.className = 'driver-card';
            
            // Create star rating
            const stars = '★'.repeat(Math.floor(driver.rating)) + 
                          (driver.rating % 1 >= 0.5 ? '½' : '') + 
                          '☆'.repeat(5 - Math.ceil(driver.rating));
            
            driverCard.innerHTML = `
                <div class="driver-header">
                    <div class="driver-avatar">
                        ${driver.name.charAt(0)}${driver.name.split(' ')[1].charAt(0)}
                    </div>
                    <div class="driver-info">
                        <h3>${driver.name}</h3>
                        <div class="rating">${stars} (${driver.rating})</div>
                    </div>
                </div>
                <div class="driver-details">
                    <p><strong>Experience:</strong> ${driver.experience}</p>
                    <p><strong>Vehicles:</strong> ${driver.vehicles.join(', ')}</p>
                    <p><strong>Contact:</strong> ${driver.phone}</p>
                </div>
                <button class="contact-btn">Contact Driver</button>
            `;
            
            // Add contact button event
            driverCard.querySelector('.contact-btn').addEventListener('click', function() {
                alert(`Contacting ${driver.name} at ${driver.phone}`);
            });
            
            elements.driversList.appendChild(driverCard);
        });
    }

    // Initialize the app with fading loading screen
    setTimeout(() => {
        elements.loadingScreen.style.opacity = '1';
    }, 500);
});
