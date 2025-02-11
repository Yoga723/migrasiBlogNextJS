import Link from "next/link";
import React from "react";

interface breadcrumbsProps {
  title: string;
  breadcrumbs: Array<{ title: string; link: string }>;
}

const Breadcrumbs = ({ title, breadcrumbs }: breadcrumbsProps) => {
  return (
    <section className="breadcrumbs">
      <nav className="container d-flex justify-content-between align-items-center">
        <h2
          className="text-wrap breadcrumb-header-2"
          style={{ color: "#0B2B6A" }}>
          {title}
        </h2>
        <ol>
          {breadcrumbs.map((item, index) => (
            <li
              key={index}
              className="text-wrap"
              style={{ maxWidth: 350 }}>
              <Link href={`${item.link}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
