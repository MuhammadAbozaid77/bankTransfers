export let accounts = [
  {
    id: 1,
    pinNumber: 1234,
    password: "123456",
    lastLoginInHistory: "",
    lastLoginInTime: "",
  },
  {
    id: 2,
    pinNumber: 5678,
    password: "123456",
  },
  {
    id: 3,
    pinNumber: 9123,
    password: "123456",
  },
  {
    id: 4,
    pinNumber: 4567,
    password: "123456",
  },
];

export let accountsTransfers = [
  {
    pinNumber: 1234,
    balance: "5000",
    name: "Muhammad Fathy Abozaid",
    transfers: [
      {
        id: 2,
        history: "",
        time: "",
        price: 5000,
        operationType: "save",
      },
    ],
  },
  {
    pinNumber: 5678,
    balance: "500",
    name: "Eslam Wagdy",
    transfers: [
      {
        id: 1,
        history: "",
        time: "",
        price: 500,
        operationType: "save",
      },
    ],
  },
];
