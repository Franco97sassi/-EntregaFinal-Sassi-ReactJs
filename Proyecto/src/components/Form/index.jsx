import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { CartContext } from '../../contexts/cartContextProvider';
import   { useContext } from 'react';
 

const Form = ({ setNoProductMessage, cartClear }) => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [isNameValid, setIsNameValid] = useState(true)
    const [isLastNameValid, setIsLastNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isEmailConfirmed, setIsEmailConfirmed] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const { addOrder,   cartItems, orders} = useContext(CartContext)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleBuy = () => {
        const id = orders.length + 1
        const order = {
            name: name,
            lastName: lastName,
            email: email,
            date: new Date().toLocaleString(),
            cart: cartItems,

        }
        const orderArray = addOrder(order, id.toString())
        cartClear()
        setNoProductMessage("Cliente:" + " " + name + " " + lastName + " "+  "se acaba de realizar su compra con éxito." +" " +
           "Email:"+  " " + email+ " " +". "+ "Nro de orden:"  + " " + id)
        setOpen(false)

    }

    const validateEmail = (value) => {
        let validRegex = /\S+@\S+\.\S+/
        if (value.match(validRegex)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }


    const confirmEmail = (value) => {
        if (value === email) {
            setIsEmailConfirmed(true)
        } else {
            setIsEmailConfirmed(false)
        }
    }
    const validateName = (value) => {
        if (value !== "") {
            setIsNameValid(true)
        } else {
            setIsNameValid(false)
        }
    }

    const validateLastName = (value) => {
        if (value !== "") {
            setIsLastNameValid(true)
        } else {
            setIsLastNameValid(false)
        }
    }

    const validatePhone = (value) => {
        let validRegex = /^\d+$/
        if (value.match(validRegex)) {
            setIsPhoneValid(true)
        } else { setIsPhoneValid(false) }
    }



    return (
        //formulario una vez que se decide comprar
        <div>
            <button onClick={handleOpen}>Comprar
            </button>
            <Dialog open={open} onClose={handleClose} >
                <DialogContent  >
                    <TextField
                        error={!isNameValid}
                        helperText={!isNameValid ? "Ingrese un dato." : null}
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => { setName(e.target.value); validateName(e.target.value) }}
                    />
                    <TextField
                        error={!isLastNameValid}
                        helperText={!isLastNameValid ? "Ingrese un dato." : null}
                        margin="dense"
                        id="lastname"
                        label="apellido"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); validateLastName(e.target.value) }}
                    />     <TextField
                        error={!isPhoneValid}
                        helperText={!isPhoneValid ? "Ingrese un dato." : null}
                        margin="dense"
                        id="phone"
                        label="telefono"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); validatePhone(e.target.value) }}
                    />     <TextField
                        error={!isEmailValid}
                        helperText={!isEmailValid ? "Ingrese un email valido." : null}
                        margin="dense"
                        id="name"
                        label="email confirmar"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={ email }
                        onChange={(e) => { setEmail (e.target.value); validateEmail(e.target.value); emailConfirmation(e.target.value) }}
                    />
                    <TextField
                        error={!isEmailConfirmed}
                        helperText={!isEmailConfirmed ? "no coincide email." : null}
                        margin="dense"
                        id="name"
                        label="email confirmar"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={emailConfirmation}
                        onChange={(e) => { setEmailConfirmation(e.target.value); validateEmail(e.target.value); confirmEmail(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}> Cancelar  </button>
                    <button onClick={handleBuy} disabled={name==""||lastName==""||email==""||emailConfirmation==""||phone==""|| !isEmailConfirmed || !isEmailValid  || !isNameValid || !isLastNameValid || !isPhoneValid  }>Comprar</button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 
export default Form
