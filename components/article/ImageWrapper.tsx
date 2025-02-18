"use client";
import { useEffect } from "react";

export default function ImageWrapper() {
  useEffect(() => {
    // Select all <img> elements with class or id "dialogika-element"
    const images = document.querySelectorAll("img.dialogika-element, img#dialogika-element");

    images.forEach((img) => {
      // Skip if this image is already wrapped by checking if it has a parent with the target class.
      if (img.closest(".img-control")) return;

      // Store the original parent
      const parent = img.parentNode;
      if (!parent) return;

      // Create the wrapper div and add desired classes.
      const wrapper = document.createElement("div");
      wrapper.className = "img-control mt-4";

      // Insert the wrapper in the DOM at the position of the image.
      parent.insertBefore(wrapper, img);

      // Create an <a> element to wrap the image.
      const imageLink = document.createElement("a");
      imageLink.href = (img as HTMLImageElement).src; // Use the image's source as the link.
      imageLink.className = "glightbox";

      // Move the image into the <a> element.
      imageLink.appendChild(img);

      // Append the <a> element (with the image) to the wrapper.
      wrapper.appendChild(imageLink);

      // Create the WhatsApp anchor and badge.
      const waAnchor = document.createElement("a");
      waAnchor.href = "https://wa.link/3rwk8y";
      waAnchor.target = "_blank";

      const waSpan = document.createElement("span");
      waSpan.className = "badge bg-success";
      waSpan.innerHTML = '<i class="bi bi-whatsapp"></i> +62 851 6299 2597';
      waAnchor.appendChild(waSpan);
      wrapper.appendChild(waAnchor);

      // Create the Instagram badge.
      const igSpan = document.createElement("span");
      igSpan.className = "badge bg-primary";
      igSpan.innerHTML = '<i class="bi bi-instagram"></i> @dialogika.co';
      wrapper.appendChild(igSpan);
    });
  }, []);

  return null;
}
