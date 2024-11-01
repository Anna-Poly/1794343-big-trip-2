import { getRandomArrayElement } from '../utils';

const points = [
  {
    id: '1',
    basePrice: 800,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-10T23:22:13.375Z',
    destination: 'afe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'a4c3e4e6-9053-42ce-b747-e281314baa31',
      'c4c3e4e6-9053-42ce-b747-e281314baa31',
      'd4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'taxi'
  },
  {
    id: '2',
    basePrice: 500,
    dateFrom: '2020-08-12T02:55:56.845Z',
    dateTo: '2020-08-15T11:14:00.375Z',
    destination: 'bfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [
      'c4c3e4e6-9053-42ce-b747-e281314baa33'
    ],
    type: 'bus'
  },
  {
    id: '3',
    basePrice: 5100,
    dateFrom: '2021-10-10T20:40:56.845Z',
    dateTo: '2021-10-10T22:42:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'd4c3e4e6-9053-42ce-b747-e281314baa32',
      'e4c3e4e6-9053-42ce-b747-e282314baa32'
    ],
    type: 'flight'
  },
  {
    id: '4',
    basePrice: 600,
    dateFrom: '2022-07-01T22:55:56.845Z',
    dateTo: '2022-07-08T11:22:13.375Z',
    destination: 'dfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [],
    type: 'drive'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}

export {getRandomPoint};
