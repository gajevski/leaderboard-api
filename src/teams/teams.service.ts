import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TeamsService {
  private readonly teams = [
    {
      id: 1,
      name: 'Google',
      description:
        'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the five Big Tech companies along with Amazon, Facebook, Apple, and Microsoft.one',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1920px-Googleplex_HQ_%28cropped%29.jpg',
      logo:
        'https://dobry-rozmiar.pl/wp-content/uploads/2019/04/Google-Logo.jpg',
      totalCount: 30879,
      members: [
        {
          name: 'Tom',
          count: 1564,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 6858,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 780,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 4574,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 1251,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 3256,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 8798,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 3473,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      feed: [
        {
          name: 'Tom',
          count: 214,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 547,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 1153,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 15,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 325,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 654,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 3555,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 654,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
    },
    {
      id: 2,
      name: 'Microsoft',
      description:
        'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/1920px-Building92microsoft.jpg',
      logo:
        'https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png',
      totalCount: 30879,
      members: [
        {
          name: 'Tom',
          count: 1564,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 6858,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 780,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 4574,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 1251,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 3256,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 8798,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 3473,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      feed: [
        {
          name: 'Tom',
          count: 214,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 547,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 1153,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 15,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 325,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 654,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 3555,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 654,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
    },
  ];

  private readonly myTeam = {
    id: 1,
    name: 'Google',
    description:
      'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the five Big Tech companies along with Amazon, Facebook, Apple, and Microsoft.one',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1920px-Googleplex_HQ_%28cropped%29.jpg',
    logo: 'https://dobry-rozmiar.pl/wp-content/uploads/2019/04/Google-Logo.jpg',
    totalCount: 30879,
    counterExcist: false,
    members: [
      {
        name: 'Tom',
        count: 1564,
        image:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Bob',
        count: 325,
        image:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Charles',
        count: 6858,
        image:
          'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'James',
        count: 780,
        image:
          'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Kate',
        count: 4574,
        image:
          'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Chris',
        count: 1251,
        image:
          'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Eva',
        count: 3256,
        image:
          'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Julia',
        count: 8798,
        image:
          'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Nick',
        count: 3473,
        image:
          'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    feed: [
      {
        name: 'Tom',
        count: 214,
        image:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Bob',
        count: 325,
        image:
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Charles',
        count: 547,
        image:
          'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'James',
        count: 1153,
        image:
          'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Kate',
        count: 15,
        image:
          'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Chris',
        count: 325,
        image:
          'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Eva',
        count: 654,
        image:
          'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Julia',
        count: 3555,
        image:
          'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        name: 'Nick',
        count: 654,
        image:
          'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
  };

  findAll() {
    return this.teams;
  }

  find(id: number) {
    const team = this.teams.find((t) => t.id === id);
    if (!team) throw new NotFoundException('Team not found');
    return team;
  }

  create(team) {
    const data = {
      id: Date.now(),
      name: team.name,
      description: team.description,
      image: team.image,
      logo: team.logo,
      totalCount: 30532,
      members: [
        {
          name: 'Tom',
          count: 1564,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 6858,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 780,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 4574,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 1251,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 3256,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 8798,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 3473,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      feed: [
        {
          name: 'Tom',
          count: 214,
          image:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Bob',
          count: 325,
          image:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Charles',
          count: 547,
          image:
            'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'James',
          count: 1153,
          image:
            'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Kate',
          count: 15,
          image:
            'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Chris',
          count: 325,
          image:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Eva',
          count: 654,
          image:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Julia',
          count: 3555,
          image:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Nick',
          count: 654,
          image:
            'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
    };
    this.teams.push(data);
  }

  update(team) {
    if (!this.teams[team.id]) throw new Error('Team not found');
    this.teams[team.id] = team;
  }

  delete(id: number) {
    const team = this.teams[id];
    if (!team) throw new Error('Team not found');
    delete this.teams[id];
  }

  findMyTeam() {
    return this.myTeam;
  }

  createCounter(counterExcist) {
    this.myTeam.counterExcist = counterExcist.counterExcist;
  }

  increaseCounter(totalCount) {
    this.myTeam.totalCount += totalCount.totalCount;
  }
}
