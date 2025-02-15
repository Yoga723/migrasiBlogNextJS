"use client";
import React from "react";

type ProgramItem = {
  href: string;
  target?: string;
  tag: string;
  title: string;
  itemClass?: string;
};

const ProgramOffer = () => {
  const ourPrograms: ProgramItem[] = [
    // Copy & Paste object dibawah ini untuk men-generate card baru
    {
      href: "../intern/index.html",
      tag: "Internship",
      title: "Program Magang",
      itemClass: "third-item",
    },
  ];

  const bestClasses: ProgramItem[] = [
    // Copy & Paste object dibawah ini untuk men-generate card baru
    {
      href: "../program/basic-plus.html",
      tag: "Online Class",
      title: "Basic Public Speaking",
      itemClass: "first-item",
    },
    {
      href: "../program/first-class.html",
      tag: "Offline Class",
      title: "First Class Public Speaking",
      itemClass: "second-item",
    },
  ];

  return (
    <section className="widget sidebar-widget-class mt-4 order-1 order-md-3">
      {/* Our Program Section */}
      <section aria-label="Our internship program">
        <h3 className="sidebar-title">Our Program</h3>
        {ourPrograms.map((program, index) => (
          <a
            key={index}
            href={program.href}
            target={program.target}
            rel="noopener noreferrer" // Added for security best practice
          >
            <div className={`sidePost__item ${program.itemClass} mt-4`}>
              <div className="sidePost__content">
                <span className="tag">{program.tag}</span>
                <h5 className="title tgcommon__hover">{program.title}</h5>
              </div>
            </div>
          </a>
        ))}
      </section>

      <br aria-hidden="true" />

      {/* Best Class Section */}
      <section aria-label="Our best classes">
        <h3 className="sidebar-title">Best Class</h3>
        <div className="sidePost-active">
          {bestClasses.map((cls, index) => (
            <a
              key={index}
              href={cls.href}
              target={cls.target}
              rel="noopener noreferrer" // Added for security best practice
            >
              <div className={`sidePost__item ${cls.itemClass} mt-4`}>
                <div className="sidePost__content">
                  <span className="tag">{cls.tag}</span>
                  <h5 className="title tgcommon__hover">{cls.title}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProgramOffer;
