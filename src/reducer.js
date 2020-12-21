let productsList = [
  {
    id: 1,
    title: "Realme Narzo 20",
    price: "10,499",
    image:
      "https://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/s/t/p/realme-narzo-20-rmx2193-original-imafvsw7vfqzh6wr.jpeg?q=70",
  },
  {
    id: 2,
    title: "POCO C3",
    price: "6,000",
    image:
      "https://rukminim1.flixcart.com/image/312/312/kfvfwy80/mobile/z/f/q/poco-c3-mzb07rlin-original-imafw8qzjeyyh44a.jpeg?q=70",
  },
  {
    id: 3,
    title: "Realme C15",
    price: "9,499",
    image:
      "https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/j/6/2/realme-c15-rmx2180-original-imafupu9wutkbf2k.jpeg?q=70",
  },
];
export const initialState = {
  products: productsList,
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
