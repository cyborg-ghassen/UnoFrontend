const Ellipse = ({width, height, bg, styles}) => {
    return (
        <div style={{
            width: width,
            height: height,
            background: bg,
            ...styles
        }}></div>
    )
}

export default Ellipse