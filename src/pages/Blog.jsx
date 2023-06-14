import BannerForAll from "../utils/BannerForAll";
import BlogCard from "../utils/BlogCard";
import { blogs } from "../utils/blogs";
import { motion } from "framer-motion";

const Blog = () => {
  window.scrollTo({
    top: 0,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BannerForAll
        text={"Blogs"}
        desc={"Cities To Visit For Your First Time In Europe"}
      />
      <div className="flex flex-wrap justify-center gap-10 my-20">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
