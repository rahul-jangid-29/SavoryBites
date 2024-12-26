import React from "react";

const blogs = [
  { title: "Savory Summer Specials", content: "Enjoy our summer menu with fresh ingredients and vibrant flavors.", date: "June 2024" },
  { title: "Cooking Tips from Our Chef", content: "Learn some of our secrets to making your dishes taste like a pro.", date: "May 2024" },
];

function BlogPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Blog</h1>
      <div className="mt-6 space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="mt-2 text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
