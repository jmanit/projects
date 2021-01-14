import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react';


const UserDetails = (props) => {
    const { firstName, lastName, email } = props.values;
    return (

        <React.Fragment>            
            <h1 className="ui centered">User Details</h1>
            <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='First Name'
                    value={firstName}
                    name="firstName"
                    onChange={props.handleChange}
                />

                <Form.Field
                    control={Input}
                    label='Last Name'
                    value={lastName}
                    name="lastName"
                    onChange={props.handleChange}
                />
            </Form.Group>


            <Form.Field
                control={Input}
                label='Email'
                value={email}
                name="email"
                onChange={props.handleChange}
            />


            <Button onClick={props.next}>Next</Button>
        </React.Fragment>


    );
}


export { UserDetails };