import React from "react";
import {InlineCode} from './InlineCode';
import {BlockCode} from './BlockCode';

export interface CodeProps {
  render: string
  lang?: "jsx" | "css" | "javascript"
  inline?: boolean
  theme?: "light" | "dark"
}

/**
 * @param {string} lang "jsx" | "css" | "javascript" - Default "jsx"
 * @param {boolean} inline boolean - Default false
 * @param {string} theme "light" | "dark" - Default "light"
 * @param {string} render string of code to render
 */
export function Code({lang = "jsx", render, inline=false, theme="light"}: CodeProps) {
  return (
    inline
    ? <InlineCode lang={lang} render={render} />
    : <BlockCode lang={lang} render={render} />
  );
}