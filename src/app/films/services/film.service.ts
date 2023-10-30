import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}
  booking = new Array();
  bookingData() {
    return this.booking;
  }
  addBooking() {
    if (localStorage['alldata'] == null) {
      this.booking.push(this.bookingDetails);
      localStorage['alldata'] = JSON.stringify(this.booking);
    } else {
      this.booking = JSON.parse(localStorage['alldata']);
      this.booking.push(this.bookingDetails);
      localStorage['alldata'] = JSON.stringify(this.booking);
    }
    // localStorage['alldata'] = JSON.stringify(this.booking);
    localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
  }
  bookingDetails = {
    id: 1,
    numberTichet: 0,
    filmName: '',
    date: '',
    totalSalary: 0,
    seatNumber: new Array(),
    filmId: 0,
  };
  bookingDetailsData() {
    return this.bookingDetails;
  }
  setAllSeats = [
    {
      id: 1,
      na: [
        14, 5, 6, 7, 8, 10, 11, 1, 21, 22, 23, 28, 29, 30, 31, 32, 33, 2, 9, 4,
        19, 20, 3,
      ],
      sel: new Array(),
      occ: [12, 25, 15, 16, 17, 18, 34, 35, 36],
      vip: [24, 13, 26, 27],
    },
    {
      id: 2,
      na: [
        25, 15, 16, 17, 18, 10, 11, 1, 21, 22, 23, 28, 29, 30, 31, 32, 33, 2, 9,
        4, 19, 20, 3,
      ],
      sel: new Array(),
      occ: [12, 14, 5, 6, 7, 8, 34, 26, 36],
      vip: [24, 13, 35, 27],
    },
    {
      id: 3,
      na: [
        14, 5, 6, 7, 8, 10, 11, 1, 21, 22, 23, 28, 29, 16, 17, 18, 34, 35, 9, 4,
        19, 20, 3,
      ],
      sel: new Array(),
      occ: [12, 26, 15, 30, 31, 32, 33, 2, 36],
      vip: [24, 13, 25, 27],
    },
    {
      id: 4,
      na: [
        14, 5, 6, 7, 8, 10, 11, 1, 12, 25, 15, 16, 17, 18, 31, 32, 33, 2, 9, 4,
        19, 20, 3,
      ],
      sel: new Array(),
      occ: [27, 22, 13, 28, 29, 30, 34, 35, 36],
      vip: [24, 23, 26, 21],
    },
  ];

  setAllFilms() {
    return [
      {
        id: 1,
        title: 'Spider-Man: No Way Home',
        source: 'assets/images/spider.jpg',
        time: '12:00 AM',
        viewday: 'Sun , Dec 13',
        date: '2021-12-13',
        Genre: 'Action.Adventure.Fantasy.Sci-Fi',
        duration: '2H:44M',
        desc: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
      },
      {
        id: 2,
        title: 'push path rushe',
        source: 'assets/images/pushpa.jpg',
        time: '11:00 AM',
        viewday: 'Mon , Dec 14',
        date: '2021-12-14',
        Genre: 'Action · Adventure · Crime · Drama · Thriller',
        duration: '2H:14M',
        desc: 'film written and directed by Sukumar. It stars Allu Arjun as the titular character alongside Fahadh Faasil, and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles.',
      },
      {
        id: 3,
        title: 'Shang-Chi the Ten Rings',
        source: 'assets/images/shangChi.jpg',
        time: '10:00 AM',
        viewday: 'Tus , Dec 15',
        date: '2021-12-15',
        Genre: 'Action · Adventure · Crime · Drama · Thriller',
        duration: '2H:05M',
        desc: 'Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios ',
      },
      {
        id: 4,
        title: 'dune',
        source: 'assets/images/dune.jpg',
        time: '8:00 pm',
        viewday: 'Wen , Dec 16',
        date: '2021-12-16',
        Genre: 'Action · Adventure · Drama · Sci-Fi',
        duration: '2H:25M',
        desc: 'Dune (titled onscreen as Dune: Part One) is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first of a two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book',
      },
    ];
  }
}
