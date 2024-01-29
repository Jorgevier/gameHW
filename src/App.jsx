import Container from "react-bootstrap/Container"
import Body from "./components/Body"
import Game from "./components/Game"

export default function App(){

  return(
    <Container fluid data-bs-theme='dark' className="app">
      <Body>
        <Game />
      </Body>
    </Container>
  )
}