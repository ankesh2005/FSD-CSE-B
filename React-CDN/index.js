const books = [
  {
    image:
      "https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=145&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    price: "350/-",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=145&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    price: "350/-",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=145&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    price: "350/-",
  },
];

function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 150,
    alt: "book",
  });

  const h4 = React.createElement("h4", null, `Price: ${props.price}`);

  return React.createElement("div", { className: "card" }, image, h4);
}

const bookList = React.createElement(
  "div",
  { className: "book-list" },
  ...books.map((book) => React.createElement(Book, book))
);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookList);
