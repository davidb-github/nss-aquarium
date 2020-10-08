const travelCollection = [
    {
        country: "Mexico",
        season : "Fall"
    },
    {
        country: "Canada",
        season : "Summer"
    },
    {
        country: "Ireland",
        season : "Summer"
    }
]

export const returnTravelCollection = () => {
    return travelCollection.splice();
}
