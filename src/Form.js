import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            rate: '',
            loanAmount: '',
        }

        
    }

    render() {

        return (
            <form onClick={console.log('submitted')}>
                <label placeholder="$" >
                    Desired Loan Amount
                    <input value={this.state.loanAmount}/>
                </label>

                <label>
                    Estimated APR
                    <input
                        type='text' value={this.state.rate}
                 
                    />
                </label>

                <label>
                    Desired Term
                    <input
                        type='text' value={this.state.term}
                 
                    />
                </label>

               <button type="submit">Calculate</button>
                test
            </form>
        );
    }
}

export default Form;
