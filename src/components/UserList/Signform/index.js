import React from 'react';
// import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isEmailValid: true, 
            user: ''
        }
    }

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }


    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.callback(this.state)
    }
    render() {
        const {email, pass, isEmailValid, user} = this.state;
    return (
        <form className='form-wrapper flex-column' onSubmit={this.submitHandler}>
            <label className='flex-column'> Your email
                <input type='text' placeholder='test@mail.com' name='email' onChange={this.universalChangeHandler} value={email} className={isEmailValid ? '' : 'invalid'}/>
            </label>
            <label className='flex-column'> Your password
                <input type='text' name='pass' onChange={this.universalChangeHandler} value={pass}/>
            </label>
            <label className='flex-column'> Your name
                <input type='text' name='user' onChange={this.universalChangeHandler} value={user}/>
            </label>
            <button type='submit'>Submit form</button>
        </form>
    )
    }
}

export default SignInForm;
