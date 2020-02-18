function Cockpit(props){
    // step1
    const btnRef = useRef(null);

    useEffect(
        ()=>{
            // step3
            btnRef.current.click();
        }
      );


    const StyledButton = styled.button`
        background-color: ${props => props.show ? 'red' : 'green'};
        &:hover {
        background-color: ${props => props.show ? 'salmon' : 'lightgreen'}
        };
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
    `;

    let classes;

    if (props.personsLength <= 2){
        classes = "red";
    }
    if (props.personsLength <= 1){
        classes = "red bold";
    }

    return (
        <div>
            <h1>{props.title}</h1>

            <p className={classes}>It really works!</p>
                          // step2
            <StyledButton ref={btnRef} show={props.show} onClick={props.click}>
                Toggle the list
            </StyledButton>
        </div>
    );

}
