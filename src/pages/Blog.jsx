import BannerForAll from "../utils/BannerForAll";
import BlogCard from "../utils/BlogCard";
import { blogs } from "../utils/blogs";

const Blog = () => {
  return (
    <div>
      <BannerForAll
        text={"Blogs"}
        desc={"Cities To Visit For Your First Time In Europe"}
      />
      <div className="flex flex-wrap justify-center gap-10 my-20">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default Blog;
