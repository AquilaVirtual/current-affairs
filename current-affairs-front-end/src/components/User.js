import React from "react";

class User extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                newUsername: '',
                email: '',
                newEmail: '',
                password: '',
                newPassword: '',
                verifyPassword: '',               
                error: false,
                errorMessage: ''
            };
        }       
  
        render() {
            return (
                <div>                
                User
                  </div>
                    )
                }
            
            }
    export default User; 