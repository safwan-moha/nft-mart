import React from 'react';
import {
    ExpansionPanelSummary
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

export const UI = (props) => {
    const { title } = props;

    return (
        <ExpansionPanelSummary expandIcon={<ExpandMore style={{color: 'white'}} />}>
            <h4 style={{color: 'white'}}>{title}</h4>
        </ExpansionPanelSummary>
    );
};

export default UI;
