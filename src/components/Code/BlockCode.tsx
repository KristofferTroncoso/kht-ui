import React, { useEffect } from "react";
import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-jsx';
import styled from 'styled-components';

const StyledPre = styled.pre`
    color: black;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    tab-size: 4;

    hyphens: none;



  ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {

      text-shadow: none;

  }

  /* Code blocks */
    padding: 1em;
    margin: .5em 0;
    overflow: auto;


    background: #f5f2f0;




  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #DD4A68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export interface BlockCodeProps {
  render: string
  lang?: "jsx" | "css" | "javascript"
}

export function BlockCode({lang = "jsx", render }: BlockCodeProps) {
  let strLang = `language-${lang}`;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <StyledPre className={strLang}>
      <code>{render}</code>
    </StyledPre>
  );
}