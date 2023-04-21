import { IPlace } from "../types/places.type";

export let DUMMY_PLACES: IPlace[] = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl: "https://picsum.photos/600/400",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Emp. State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl: "https://picsum.photos/600/400",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: "u2"
    },
];

export const setDummyPlaces = (newDummyPlaces: IPlace[]) => {
    DUMMY_PLACES = newDummyPlaces;
}