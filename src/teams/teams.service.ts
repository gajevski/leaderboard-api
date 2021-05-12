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
        },
        {
          name: 'Bob',
          count: 325,
        },
        {
          name: 'Charles',
          count: 6858,
        },
        {
          name: 'James',
          count: 780,
        },
        {
          name: 'Kate',
          count: 4574,
        },
        {
          name: 'Chris',
          count: 1251,
        },
        {
          name: 'Eva',
          count: 3256,
        },
        {
          name: 'Julia',
          count: 8798,
        },
        {
          name: 'Nick',
          count: 3473,
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
        },
        {
          name: 'Bob',
          count: 325,
        },
        {
          name: 'Charles',
          count: 6858,
        },
        {
          name: 'James',
          count: 780,
        },
        {
          name: 'Kate',
          count: 4574,
        },
        {
          name: 'Chris',
          count: 1251,
        },
        {
          name: 'Eva',
          count: 3256,
        },
        {
          name: 'Julia',
          count: 8798,
        },
        {
          name: 'Nick',
          count: 3473,
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
    members: [
      {
        name: 'Tom',
        count: 1564,
      },
      {
        name: 'Bob',
        count: 325,
      },
      {
        name: 'Charles',
        count: 6858,
      },
      {
        name: 'James',
        count: 780,
      },
      {
        name: 'Kate',
        count: 4574,
      },
      {
        name: 'Chris',
        count: 1251,
      },
      {
        name: 'Eva',
        count: 3256,
      },
      {
        name: 'Julia',
        count: 8798,
      },
      {
        name: 'Nick',
        count: 3473,
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
      totalCount: team.totalCount,
      members: team.members,
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
}
