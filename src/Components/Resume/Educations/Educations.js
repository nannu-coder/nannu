import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material'


const Educations = () => {
    return (
        <div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={2} />
                        <Typography variant='h6'>
                            Diploma In Computer Engineering
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='body1'>
                            Northern Institute Of Science &amp; Technology
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='h6'>
                            Session: 2020-2021
                        </Typography>
                        <Paper />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={2} />
                        <Typography variant='h6'>
                            Secondary School Certificate (SSC)
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='body1'>
                            Masundiya Bhawanipur High School
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='h6'>
                            Year: 2019
                        </Typography>
                        <Paper />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={5} />
                        <Typography variant='h6'>
                            Junior School Certificate (JSC)
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='body1'>
                            Masundiya Bhawanipur High School
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='h6'>
                            Year: 2016
                        </Typography>
                        <Paper />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={2} />
                        <Typography variant='h6'>
                            Prathomik School Certificate (PSC)
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='body1'>
                            Masundiya Bhawanipur High School
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant='h6'>
                            Year: 2013
                        </Typography>
                        <Paper />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default Educations;