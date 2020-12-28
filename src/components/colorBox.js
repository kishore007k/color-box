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
		console.log(activeItem);
	};

	return (
		<Wrapper>
			<div className="gridContainer">
				<div>
					<button
						onClick={handleColorChange}
						className={Items.includes("1") ? "gridItems-active" : "gridItems"}
						id="1"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("2") ? "gridItems-active" : "gridItems"}
						id="2"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("3") ? "gridItems-active" : "gridItems"}
						id="3"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("4") ? "gridItems-active" : "gridItems"}
						id="4"
					/>
				</div>
				<div>
					<button
						onClick={handleColorChange}
						className={Items.includes("5") ? "gridItems-active" : "gridItems"}
						id="5"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("6") ? "gridItems-active" : "gridItems"}
						id="6"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("7") ? "gridItems-active" : "gridItems"}
						id="7"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("8") ? "gridItems-active" : "gridItems"}
						id="8"
					/>
				</div>
				<div>
					<button
						onClick={handleColorChange}
						className={Items.includes("9") ? "gridItems-active" : "gridItems"}
						id="9"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("10") ? "gridItems-active" : "gridItems"}
						id="10"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("11") ? "gridItems-active" : "gridItems"}
						id="11"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("12") ? "gridItems-active" : "gridItems"}
						id="12"
					/>
				</div>
				<div>
					<button
						onClick={handleColorChange}
						className={Items.includes("13") ? "gridItems-active" : "gridItems"}
						id="13"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("14") ? "gridItems-active" : "gridItems"}
						id="14"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("15") ? "gridItems-active" : "gridItems"}
						id="15"
					/>
					<button
						onClick={handleColorChange}
						className={Items.includes("16") ? "gridItems-active" : "gridItems"}
						id="16"
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default ColorBox;
