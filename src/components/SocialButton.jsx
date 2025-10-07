import React from "react";

/**
 * SocialButton
 * props:
 * - href, title, children (icon)
 * - id (optional)
 */
export default function SocialButton({ href, title, children, id }) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="btn-circle btn-glow"
      title={title}
      style={{ color: "white" }}
      aria-label={title}
    >
      {children}
    </a>
  );
}
