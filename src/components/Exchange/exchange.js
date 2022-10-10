import React from 'react';
import { getCourse } from './index';
const CHANGE_COEF = 37;
class ExchangeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            USD: '', 
            UAH: '', 
            course: []
        }
    }
    componentDidMount(){
        getCourse().then(data => {
            const {} = data;
            this.setState({
                course: data
            })
        });
    }
    ChangeHandler = ({target: {name, value}}) => {
        const {course: {buy, sale}} = this.props;
        console.log(buy);
        if (name === 'UAH') {
            this.setState({
                USD: value / buy, 
                UAH: value
            }) 
        } else {
            this.setState({
                UAH: value * sale,
                USD: value
            })
        }
        console.log(this.state);
    }

    render(){
        return(
            <form>
                <label> UAH
                    <input type='text' value={this.state.UAH} name='UAH' onChange={this.ChangeHandler} />
                </label>
                <label>USD
                    <input type='text' value={this.state.USD} name='USD' onChange={this.ChangeHandler} />
                </label>
            </form>
        )
    }
}

export default ExchangeForm;