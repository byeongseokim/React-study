import styled from 'styled-components';
const SimpleButton = styled.button`
  color: white;
  background-color: #333333;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = (props) => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
  color: white;
  background-color: #333333;
`;

const PrimaryButton = styled.button`
  color:${props=>props.primary ? 'white' : 'black'};
  background-color:${props=>props.primary ? 'blue' : 'gray'};
`;

export default function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <p></p>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <p></p>
      <PrimaryButton>Nomal</PrimaryButton>
      <PrimaryButton Primary>Primary</PrimaryButton>
    </div>
  );
}