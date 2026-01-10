/* Blog Data (Dynamic Content) */
const blogs = [
    {
        title: "JavaScript Basics",
        category: "javascript",
        description: "Learn the fundamentals of JavaScript for web development.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s",
        date: "Jan 2026"
    },
    {
        title: "Advanced CSS Techniques",
        category: "css",
        description: "Master Flexbox, Grid, and responsive design.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5oCKNaAzHs8mz9PW9z63_lqkFPH7448jlA&s",
        date: "Feb 2026"
    },
    {
        title: "HTML5 Semantic Elements",
        category: "html",
        description: "Understand modern HTML5 semantic structure.",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240618121649/HTML5-Semantics-copy.webp",
        date: "Feb 2026"
    },
    {
        title: "DOM Manipulation in JavaScript",
        category: "javascript",
        description: "Learn how to interact with the DOM efficiently.",
        image: "https://media.licdn.com/dms/image/v2/D5622AQGbHyrZGxpaMQ/feedshare-shrink_800/feedshare-shrink_800/0/1711543643609?e=2147483647&v=beta&t=mcJzLf_kySG2vhuBARan00Xz8qNWC8ih0jzwz6TR7zc",
        date: "Mar 2026"
    },
    {
        title: "CSS Performance Tips",
        category: "css",
        description: "Optimize CSS for faster rendering and load times.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeexp4B8aItBNdadwpFr3jLXmWUTb63Aitw&s",
        date: "Mar 2026"
    }
];

const blogContainer = document.getElementById("blogContainer");
const categoryFilter = document.getElementById("categoryFilter");

/* Display Blogs */
function displayBlogs(items) {
    blogContainer.innerHTML = "";

    items.forEach(blog => {
        const div = document.createElement("div");
        div.className = "blog";

        div.innerHTML = `
            <img src="${blog.image}" loading="lazy" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <span>${blog.category.toUpperCase()} • ${blog.date}</span>
            </div>
        `;

        blogContainer.appendChild(div);
    });
}

/* Filter Blogs */
categoryFilter.addEventListener("change", () => {
    const value = categoryFilter.value;

    const filteredBlogs =
        value === "all"
            ? blogs
            : blogs.filter(blog => blog.category === value);

    displayBlogs(filteredBlogs);
});

/* Initial Load */
displayBlogs(blogs);
