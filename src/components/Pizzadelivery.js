import React from 'react'

const Pizzadelivery = () => {
    return (
        <div className="container ">
        <div className="element_style">Quick Delivery  </div>
        <div className="element_styl">ORDER <br/>
         APIZZA NOW </div>     
        <p className="element_styles ">Investigationes demonstraverunt lectores legere me liusquod <br/> ii legunt saepius.  Claritas est etiam processus.</p>
         <div className='form__main'>
                    <div className='row'>
                        <div className='col-lg-3' style={{paddingRight:'20px'}}>
                            <input type="text" name="FirstName" value="" className='blocks' aria-required="true" aria-invalid="false" placeholder="First Name" />
                        </div>
                        <div className='col-lg-3'style={{paddingLeft:'20px'}}>
                            <input type="text" name="LastName" value="" className='blocks' aria-required="true" aria-invalid="false" placeholder="Last Name" />
                        </div>
                    </div>
                        <div className='col-lg-6'>
                            <input type="text" name="EnterStreetAddress" value="" className="full_block" size="40"  aria-required="true" aria-invalid="false" placeholder="Enter Street Address" />
                        </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <input type="text" name="ApartmentRoom" value="" size="40"  className='blocks' aria-required="true" aria-invalid="false" placeholder="Apartment / Room" />
                        </div>
                        <div className='col-lg-3'style={{paddingLeft:'20px'}}>
                            <input type="tel" name="PhoneNumber" value="" size="40" className='blocks' aria-required="true" aria-invalid="false" placeholder="Phone Number" />
                        </div>
                    </div>
                        <div className='col-lg-6'>
                            <select name="PizzaType"  className="full_block" aria-required="true" aria-invalid="false">
                                <option value="PizzaType">PizzaType</option>
                                <option value="Pizza Biscuit Bake">Pizza Biscuit Bake</option>
                                <option value="Pizza Margeritta">Pizza Margeritta</option>
                                <option value="Pizza Prosciutto">Pizza Prosciutto</option>
                                <option value="Pizza Low Carb">Pizza Low Carb</option>
                                <option value="Pizza Del Sole">Pizza Del Sole</option>
                            </select>
                        </div>
                    <div className='row'>
                        <div className='col-lg-3' >
                            <input type="number" name="EnterNumber" value="" className='blocks' min="1" max="9999" aria-required="true" aria-invalid="false" placeholder="Enter Number" />
                        </div>
                        <div className='col-lg-3'>
                            <select name="Size"  className='blocks' aria-required="true" aria-invalid="false">
                                <option value="Size">Size</option>
                                <option value="Small - 10 / 25 cm">Small - 10 / 25 cm</option>
                                <option value="Medium - 12 / 30 cm">Medium - 12 / 30 cm</option>
                                <option value="Large - 14 / 35 cm">Large - 14 / 35 cm</option>
                                <option value="X-Large - 16 / 40 cm">X-Large - 16 / 40 cm</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <input type="submit" value="QUICK DELIVERY" style={{background:'#FF454F'}} className="full_block" />

                        
                    </div>
                </div>
                </div>
    )
}

export default Pizzadelivery;





