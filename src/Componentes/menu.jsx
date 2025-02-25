function menu() {
    const menu = {
        background: '#14213d',
        display: 'flex',
        justifyContent: 'center'
    }
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '15px'
    }
    return (
        <>
            <nav style={menu}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href="/" style={link}>HOME</a>  </li>
                    <li><a href="/sobre"style={link} >SOBRE</a>  </li>
                    <li><a href="/cep"style={link} >CONTATO</a>  </li>
                    <li><a href="/techemergentes"style={link} >TECH EMERGENTES</a>  </li>
                    
                </ul>
            </nav>
        </>
    )
}
export default menu;