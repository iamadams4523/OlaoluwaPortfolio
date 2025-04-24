import { blogData } from '../information';

const Blog = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl text-center font-bold text-purple-600 mb-6 font-[poppins]">
        Blog
      </h1>

      {blogData.map((post, idx) => (
        <div
          key={idx}
          className="mb-10 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
        >
          {/* Optional Image */}
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
          )}

          <h2 className="text-2xl font-semibold text-gray-800 font-[poppins]">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500">
            {post.date} by {post.author}
          </p>
          <p className="mt-3 text-gray-700 text-[15px] font-[poppins]">
            {post.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
