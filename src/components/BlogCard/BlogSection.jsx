/* eslint-disable react/prop-types */
import BlogCard from "./BlogCard";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BlogSection.css";
import { blogPosts } from "./blogutils";

gsap.registerPlugin(ScrollTrigger);

const BlogCards = ({ isMounted }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!isMounted) return;
    const ctx = gsap.context(() => {
      gsap.from(".blog__content .blog-card", {
        scrollTrigger: {
          trigger: ".blog__section",
          start: "top 80%", // Adjust this to control when the animation starts
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="blog__section">
      <h1>Resources</h1>
      <div className="blog__content" id="blog">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
};
export default BlogCards;
