import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

function Questions() {
	return (
		<Container fluid>
			<Row>
				<Section className="flexed bg-primary col">
					<div className="wrapper">
						<div className="question__wrap p-3 bg-light">
							<h3 className="mb-0 question__text">Questions go here</h3>
						</div>

						<div className="answer__wrap flexed flex-wrap p-3">
							<button className="answer__btn p-2 m-2 col-5">Answer 1</button>
							<button className="answer__btn p-2 m-2 col-5">Answer 2</button>
							<button className="answer__btn p-2 m-2 col-5">Answer 3</button>
							<button className="answer__btn p-2 m-2 col-5">Answer 4</button>
						</div>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default Questions;

const Section = styled.section`
	min-height: 100vh;
`;
