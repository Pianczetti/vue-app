const posts = [
  {
    postId: 1,
    author: {
      authorId: 1,
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2022-05-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 23,
    kudos: {
      kudosId: 4,
      targetPersonId: 5,
    },
    groupId: 1
  },
  {
    postId: 2,
    author: {
      authorId: 2,
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2022-05-25T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 2,
    kudos: {
      kudosId: 1,
      targetPersonId: 4,
    },
    groupId: 3
  },
  {
    postId: 3,
    author: {
      authorId: 3,
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2022-05-23T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      targetPersonId: 1,
    },
    groupId: 2
  },
  {
    postId: 4,
    author: {
      authorId: 4,
      avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2022-03-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      targetPersonId: 1,
    },
    groupId: 1
  },
  {
    postId: 5,
    author: {
      authorId: 6,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2022-01-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      targetPersonId: 1,
    },
    groupId: 1
  },
  {
    postId: 6,
    author: {
      authorId: 7,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      imie: 'Imie',
      nazwisko: 'Nazwisko'
    },
    date: '2021-05-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      targetPersonId: 1,
    },
    groupId: 1
  },
];

export { posts }