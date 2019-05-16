import React from 'react';
import styled from 'styled-components';



const StyledButton: any = styled.button`
  box-sizing: border-box;
  opacity: 0.85;
  margin-bottom: 5px;
  filter: saturate(90%);
  display: inline-block;
  background: ${(props: any) => props.tagColor};
  color: white;
  margin-right: 5px;
  padding: 2px 3px;
  border-radius: 3px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    opacity: 1;
    filter: none;
    box-shadow: 1px 1px 1px #595959;
  }
`;

export interface TagProps {
  tag: string
  changeFilterTag: Function
}

function Tag({ tag, changeFilterTag }: TagProps) {
  const tagColors: any = {
    react: '#5d7eaa',
    redux: '#a664db',
    nodejs: '#219641',
    mongodb: '#2fbc8b',
    express: '#93e82c',
    api: '#c9c910',
    css: '#7fc1e2',
    flexbox: '#3da6e2',
    grid: '#3dc2e2',
    responsive: '#e2b931',
    ejs: '#9e7eba',
    rhea: '#fff',
    rest: '#a2bcd6',
    sass: '#cc6699',
    vanilla: '#ddcdbe',
    json: '#c0c444',
    PWA: '#fccb7b'
  }

  let tagColor: string = tagColors[tag] || '#c4c4c4';

  function handleTagClick(e: any) {
    changeFilterTag(tag)
  }

  return (
    <StyledButton
      className="Tag"
      onClick={handleTagClick}
      value={tag}
      tagColor={tagColor}
    >
      {tag}
    </StyledButton>
  );
}


export default Tag;