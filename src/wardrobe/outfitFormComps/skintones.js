import React from 'react';
import { selectSkintone } from '../../actions';
import { Circle } from 'react-color'
import swatches from '../../colors';

function SelectSkintone(props) {

    this.props.dispatch(selectSkintone)
        return (
            <div>
                <Circle 
                    colors
                    onChange
                />
            </div>
        );
}

const mapStateToProps = state => ({
    skintone: state.skintone
})

export default connect(mapStateToProps)(SelectSkintone);