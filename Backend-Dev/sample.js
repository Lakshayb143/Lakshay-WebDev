import fetch from "node-fetch"; // Import node-fetch

// The URL of the API you want to fetch data from

// Function to fetch data and log it to the console
const fetchData = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(API_URL);

    // Check if the response is ok (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Print the array data to the console
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the fetchData function
fetchData();
