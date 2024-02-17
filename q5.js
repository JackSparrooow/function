function calculateDeliveryTime(packageType) {
    switch (packageType) {
        case "standard":
            console.log("Estimated delivery time for standard package: 3-5 days");
            break;
        case "express":
            console.log("Estimated delivery time for express package: 1-2 days");
            break;
        case "overnight":
            console.log("Estimated delivery time for overnight package: Next day delivery");
            break;
        default:
            console.log("Invalid package type");
    }
}

// Test the function with different package types
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("priority"); // This will print "Invalid package type"
