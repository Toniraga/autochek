import React from 'react'

const navStyle = {
  container: {
    width: '100%',
    height: '100px',
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center'
  }
}

const footStyle = {
  container: {
    width: '100%',
    height: '100px',
    display: 'flex',
    backgroundColor: '#002366',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#ccc',
    fontSize: '18px',
    marginTop: '50px',
  },
  logo: {
    fontSize: '35px',
    fontWeight: 700,
    color: '#FE7F9C'
  }
}

export const NavTop: React.FC = () => {
  return (
    <div style={navStyle.container}>
      <p style={footStyle.logo}>
        AUTO<span style={{
          fontWeight: 'bolder',
          color: '#aaa'
        }}>chek</span>
      </p>
    </div>
  )
}


export const NavFoot: React.FC = () => {
  return (
    <div style={footStyle.container}>
      <p style={footStyle.logo}>
        AUTO<span style={{
          fontWeight: 'bold',
          color: '#aaa'
        }}>chek</span>
      </p>
      <p> Privacy Policy </p>
      <p> Terms and Conditions </p>
      <p> © 2021 </p>
    </div>
  )
}
