import React from 'react'
import Form from 'react-bootstrap/Form';

const cardWidget = () => {
  return (
    <div className='d-flex mx-5'>
        <h4 className='mx-2'>0</h4>
          <Form className="d-flex">
            <img
              src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Form>
    </div>
  )
}

export default cardWidget