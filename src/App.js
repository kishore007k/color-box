import ColorBox from "./components/colorBox";
import styled from "styled-components";

const Wrapper = styled.div`
	h2 {
		text-align: center;
		margin-bottom: 60px;
	}
`;

function App() {
	return (
		<Wrapper>
			<h2>Color Box</h2>
			<ColorBox />
		</Wrapper>
	);
}

export default App;
