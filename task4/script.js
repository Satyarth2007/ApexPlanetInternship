const products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 60000,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/G/31/IMG15/Laptop/asus/1/1400x800_GB4_._SX1242_QL85_.jpg"
    },
    {
        name: "Smartphone",
        category: "electronics",
        price: 30000,
        rating: 4.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueiH3J8IuKIm0UPvFnU8tvL-srdrD9y3yEw&s"
    },
    {
        name: "Headphones",
        category: "electronics",
        price: 2500,
        rating: 4.1,
        image: "https://m.media-amazon.com/images/I/610ub5kytVL.jpg"
    },
    {
        name: "T-Shirt",
        category: "clothing",
        price: 800,
        rating: 4.0,
        image: "https://thebridgestore.in/cdn/shop/files/JColeFront.jpg?v=1756449359"
    },
    {
        name: "Jeans",
        category: "clothing",
        price: 1500,
        rating: 4.3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZZ90N55AqgDUMvKsUKa_wxQDG89KOvzQYw&s"
    },
    {
        name: "Jacket",
        category: "clothing",
        price: 3000,
        rating: 4.4,
        image: "https://images-cdn.ubuy.co.in/6937d3e929ec17c8de093620-tacvasen-men-s-bomber-jacket-lightweight.jpg"
    },
    {
        name: "JavaScript Book",
        category: "books",
        price: 500,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91xorHXzWbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        name: "CSS Guide",
        category: "books",
        price: 400,
        rating: 4.1,
        image: "https://newbooksnbooks.pk/cdn/shop/files/ca6a063a-8be5-491d-9eb6-cc06792d42a5.jpg?v=1716223714"
    },
    {
        name: "HTML Handbook",
        category: "books",
        price: 350,
        rating: 4.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprR4vEk39eS151GqWbKk-ntFGP9ybi4xyOg&s"
    }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(items) {
    productList.innerHTML = "";

    items.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ⭐ ${product.rating}</p>
        `;

        productList.appendChild(div);
    });
}

function filterAndSortProducts() {
    let filteredProducts = [...products];

    const category = categoryFilter.value;
    if (category !== "all") {
        filteredProducts = filteredProducts.filter(
            product => product.category === category
        );
    }

    const sortValue = sortOption.value;
    if (sortValue === "priceLow") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "priceHigh") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

displayProducts(products);
