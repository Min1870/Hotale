import BannerForAll from "../utils/BannerForAll";
import BlogCard from "../utils/BlogCard";

const Blog = () => {
  return (
    <div>
      <BannerForAll
        text={"Blogs"}
        desc={"Cities To Visit For Your First Time In Europe"}
      />
      <div className="flex flex-wrap items-center justify-center gap-10 mt-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
