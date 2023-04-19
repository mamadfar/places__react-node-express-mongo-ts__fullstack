import { IPlace } from "./../types/places.type";

class Place implements IPlace {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: { lat: number; lng: number };
  address: string;
  creator: string;
  constructor(
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    location: { lat: number; lng: number },
    address: string,
    creator: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.location = location;
    this.address = address;
    this.creator = creator;
  }
};

export default Place;
