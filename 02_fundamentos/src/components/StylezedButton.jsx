const StylezedButton = () => {
    
    // class => classNme
    // for = htmlFor

    const buttonStyle = {
        // background-color -> backgroundColor
        backgroundColor: "darkgreen",
        color: "#fff",
        padding: "15px 32px",
        cursor: "pointer"
    }

  return (
    <button style={buttonStyle}>
        Clique em mim!
    </button>
  )
}

export default StylezedButton