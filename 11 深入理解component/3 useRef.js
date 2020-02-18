function Person(props){

    // step1 建立一個ref
    const inputRef = useRef(null);

    // useEffect 在 render 之後運行
    useEffect(
        ()=>{
            // step3
            inputRef.current.focus();
        }
    );


    const style1 = {
        width: '60%',
        margin: '30px auto',
        border: '1px solid grey',
        boxShadow: '0 2px 3px black',
        padding: '16px',
        textAlign: 'center'
    }



    return (

    <WithStyle style={style1}>
        <p onClick={()=>props.click(props.index)}>I am {props.name}. I am {props.age} years old. </p>

        // step2 指向這個ref 
        <input ref={inputRef} type="text" value={props.name} onChange={(event)=>props.change(event, props.id)} />

    </WithStyle>
    );
}
