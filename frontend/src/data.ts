import { Event } from './app/shared/models/Event';
import { Tag } from './app/shared/models/Tag';
import { User } from './app/shared/models/User';

export const sample_events: Event[] = [
  {
    id: '1',
    name: 'Eveniment',
    locatie: 'Lacul Tarnita',
    data: '20 iunie 2024',
    ora: '12:00 - 17:00',
    price: 30,
    tags: ['FastFood', 'Pizza', 'Vegan'],
    imageUrl: 'assets/food-5.jpg',
    nrLocuri: '40',
  },
  {
    id: '2',
    name: 'Eveniment',
    locatie: 'Lacul Tarnita',
    data: '20 iunie 2024',
    ora: '12:00 - 17:00',
    price: 20,
    tags: ['Desert'],
    imageUrl: 'assets/food-6.jpg',
    nrLocuri: '10',
  },
  {
    id: '3',
    name: 'Eveniment',
    locatie: 'Lacul Tarnita',
    data: '20 iunie 2024',
    ora: '12:00 - 17:00',
    price: 40,
    tags: ['Burger'],
    imageUrl: 'assets/images/burgers/cheeseburger.jpg',
    nrLocuri: '10',
  },
];

export const sample_tags: Tag[] = [];

export const sample_users: any[] = [
  {
    name: 'Dragos',
    email: 'dragos@gmail.com',
    password: '111',
    address: 'iasi',
    isAdmin: true,
  },
  {
    name: 'Stefania',
    email: 'stefania@gmail.com',
    password: '222',
    address: 'iasi',
    isAdmin: false,
  },
  {
    name: 'Eduard',
    email: 'eduard@gmail.com',
    password: '333',
    address: 'iasi',
    isAdmin: false,
  },
  {
    name: 'Paula',
    email: 'paula@gmail.com',
    password: '444',
    address: 'iasi',
    isAdmin: false,
  },
];
