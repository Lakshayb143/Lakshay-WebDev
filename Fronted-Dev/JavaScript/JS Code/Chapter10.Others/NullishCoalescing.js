// Example: Accessing Image URL from an Object
const imageDetails = {
  name: "Profile Picture",
  url: null, 
};

// Using nullish coalescing operator to handle null or undefined URL
const imageUrl = imageDetails.url ?? "default.jpg";

