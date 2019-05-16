import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Navbar, ProjectCard, Form, Code } from '../src';

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with text', () => <Button>Buy Now</Button>)
  .add('danger', () => <Button variety="danger">Danger</Button>)
  .add('dashed', () => <Button variety="dashed">Dashed</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>)
  .add('block', () => <Button block>😀 😎 👍 💯</Button>);

storiesOf('Navbar', module)
  .add('default', () => <Navbar />)
  .add('with title', () => <Navbar>My Website</Navbar>)

storiesOf('ProjectCard', module)
  .add('default', () => <ProjectCard />)
  .add('sample project', () => (
    <ProjectCard 
      title="Sample Project"
      screenshot="https://www.kristoffertroncoso.com/screenshots/rheastagramscreenshot.jpeg"
      description="A sample project. This sample screenshot is from Rheastagram."
      tags={["react", "mongodb", "sass", "express"]}
    />
  ));

storiesOf('Form', module)
  .add('default', () => <Form />)
  .add('with text', () => <Form type="text" placeholder="PLACEHOLDER" />)
 

storiesOf('Code', module)
  .add('simple render', () => <Code render={`let i = 3;`} />)
  .add('inline render', () => <Code render={`let i = 3;`} inline />)
  .add('dark inline render', () => <Code render={`let i = 3;`} theme="dark" inline />)
  .add('explicit jsx code', () => (
    <Code 
      lang="jsx"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1>This is a Card</h1>
            </div>
          )
        }
      `}
    />
  ))
  .add('dark explicit jsx code', () => (
    <Code 
      lang="jsx"
      theme="dark"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1>This is a Card</h1>
            </div>
          )
        }
      `}
    />
  ))
