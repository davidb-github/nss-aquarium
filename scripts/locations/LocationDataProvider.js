const locationCollection = [
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

export const returnLocationCollection = () => {
    return locationCollection.slice();
}
