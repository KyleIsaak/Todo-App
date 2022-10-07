import * as React from 'react';
import Head from 'next/head'

import Submit_button from './Submit_button';
import Text_field from './Text_field';
import {Todo_List} from './List';

// Styles:
const centeredStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22pt'
    //height: '100vh',
};

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22pt'
    //height: '100vh',
};

export const Index = props => {
    const { title } = props;



    const ListComponent = <Todo_List></Todo_List>
    const SubmitButton = Submit_button(ListComponent);

    return(
        <div>
            <Head>
                <title>{title}</title>
                
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <div style={titleStyle}>
                Todo:
            </div>

            <div style={centeredStyle}>
                <Text_field></Text_field>
                {SubmitButton}             
            </div>

            <div style={centeredStyle}>
                {ListComponent}
            </div>


        </div>
    );
};
export default Index;

Index.getInitialProps = res => {
    const {query} = res;

    return {...query};
};
