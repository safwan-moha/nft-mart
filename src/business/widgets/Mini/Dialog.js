import React from 'react';
import {
    Dialog, DialogContent, 
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

const UI = (props) => {
    const { content, open, width } = props;

    return (
        <Dialog open={open} maxWidth={width} fullWidth fullScreen={false} scroll={'body'}>
            <PerfectScrollbar>
                <DialogContent>
                    {content}
                </DialogContent>
            </PerfectScrollbar>
        </Dialog>
    );
};

export default UI;
