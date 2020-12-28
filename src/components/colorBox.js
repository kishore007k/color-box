import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	display: block;
	max-width: 1300px;
	margin: auto;
	height: 100vh;
	padding: 20px;

	.gridContainer {
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}

	.gridItems {
		background-color: lightblue;
		margin-bottom: 20px;
		height: 150px;
		width: 200px;
		border: none;
		border-radius: 10px;
		outline: none;
	}

	.gridItems-active {
		background-color: red;
		margin-bottom: 20px;
		height: 150px;
		width: 200px;
		border: none;
		border-radius: 10px;
		outline: none;
	}
`;

const ColorBox = () => {
	const [activeItem, setActiveItem] = useState(0);
	const [ID, setID] = useState(0);
	const [Items, setItems] = useState([]);

	const totalItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	const handleColorChange = (e) => {
		e.preventDefault();
		const itemId = e.target.id;
		setID(itemId);

		if (Items.length > 1) {
			Items.shift();
		}

		if (Items === []) {
			setItems(itemId);
		} else {
			Items.push(itemId);
		}

		if (ID === itemId) {
			setActiveItem(itemId);
		} else {
			setActiveItem(0);
			setActiveItem(itemId);
		}
		console.log(itemId);
	};

	return (
		<Wrapper>
			<div className="gridContainer">
				{totalItems.map((item, index) => {
					return (
						<div key={index}>
							<button
								id={index}
								onClick={handleColorChange}
								className={
									Items.includes(index.toString()) ? "gridItems-active" : "gridItems"
								}
							/>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default ColorBox;
