import React from 'react';
import Tag from './Tag';
import styled from 'styled-components';

export interface CardProps {
	title: string
	sourceCodeUrl: string
	liveDemoUrl: string
	screenshot: string
	description: string
	tags: Array<string>
	changeFilterTag: Function
};

const defaultProps = {
	title: 'Default Title',
	sourceCodeUrl: 'https://www.google.com',
	liveDemoUrl: 'https://www.google.com',
	screenshot:
		'https://s3.amazonaws.com/ktpublic-pics/reactTodoAppScreenshot.JPG',
	description: 'Hello this is the default description',
	tags: ['no', 'tags', 'available'],
	changeFilterTag: () => console.log('hello')
};

const StyledCard = styled.div`

  .Tag {
    margin-right: 5px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  font-family: sans-serif;

  a {
    text-decoration: none;
  }

	min-width: 300px;
	width: 350px;
	height: 300px;
	margin: 10px;
	background: white;
	box-shadow: 1px 1px 4px #3a3a3a;

	@media (max-width: 992px) {
		.Card {
			width: 500px;
			margin: 5px;
		}
	}

	.Card__top {
		height: 70%;
		padding: 8px 8px 0 8px;
		/* dynamic background styling in component's jsx */
	}

	.Card__screenshot {
		height: 100%;
		box-shadow: inset 0px 0px 4px #424242;
	}

	.Card__description {
		padding: 10px;
		height: 100%;
		color: white;
		background: rgba(0, 0, 0, 0.7);
		opacity: 0;
		font-size: 120%;
	}

	.Card__description:hover {
		opacity: 1;
		transition: opacity 0.1s linear 0.1s;
	}

	.Card__bottom {
		padding: 5px 8px 8px 8px;
		height: 30%;
		overflow: hidden;
	}

	.Card__bottom a {
		opacity: 0.8;
	}

	.Card__bottom a:hover {
		opacity: 1;
	}

	.Card__title {
		margin: 4px 0 4px 0;
	}
`;

export function Card({
	title,
	sourceCodeUrl,
	liveDemoUrl,
	screenshot,
	description,
	tags,
	changeFilterTag
}: CardProps) {
	return (
		<StyledCard className="Card">
			<div className="Card__top">
				<div
					className="Card__screenshot"
					style={{
						background: `url(${screenshot})`,
						backgroundSize: 'cover',
						backgroundPosition: 'top'
					}}
				>
					<a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
						<p className="Card__description">{description}</p>
					</a>
				</div>
			</div>
			<div className="Card__bottom">
				<h2 className="Card__title">{title}</h2>
				<div className="Tags__list">
					{tags.map((tag, index) => (
						<Tag key={index} tag={tag} changeFilterTag={changeFilterTag} />
					))}
				</div>
				<div style={{ textAlign: 'right', margin: '0', color: '#4c4c4c' }}>
					<a
						href={sourceCodeUrl}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#4c4c4c', fontSize: '90%', margin: '0 2px' }}
					>
						Source
					</a>
					|
					<a
						href={liveDemoUrl}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#4c4c4c', fontSize: '90%', margin: '0 2px' }}
					>
						Live Demo
					</a>
				</div>
			</div>
		</StyledCard>
	);
}

Card.defaultProps = defaultProps;

export default Card;
