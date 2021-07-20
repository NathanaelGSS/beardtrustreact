const Button = ({ color, text }) => {
    
    const onClick = () => {
        //Do something here
    }
    
    return (
        <button 
        onClick={onClick}
        style={{backgroundColor: color}}
        className='btn'>
        {text}
        </button>
    )
}

export default Button