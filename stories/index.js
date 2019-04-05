import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Navbar, Card, Form, Code } from '../src';

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>)
  .add('with some emoji', () => <Button>😀 😎 👍 💯</Button>);   

storiesOf('Navbar', module)
  .add('default', () => <Navbar />)
  .add('with title', () => <Navbar>My Website</Navbar>)
  .add('double element', () => (
    <Navbar>
      <h1>My Logo</h1>
      <nav>
        My nav
      </nav>
    </Navbar>
  ));

storiesOf('Card', module)
  .add('default', () => <Card />)
  .add('sample project', () => (
    <Card 
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
