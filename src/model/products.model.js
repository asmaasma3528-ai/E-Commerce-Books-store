
export default class ProductModel{

    constructor(_id, _title, _author, _price, _imgUrl){
       this.id = _id;
       this.title = _title;
       this.author = _author;
       this.price = _price;
       this.image = _imgUrl;
    }

    //Using the static methods these will be no need of creating an instance of it the methods can be directly used 
    static get(){
      return products;
    }
}

const products = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400"
    }
];