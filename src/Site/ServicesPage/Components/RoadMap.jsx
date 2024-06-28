import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';

const RoadMap = () => {
    return (
        <React.Fragment >
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                        Вы оставляете заявку на нашем сайте. Наш специалист связывается с вами и приглашает вас на встречу.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <ContactMailOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{my: {xs: '10px', sm:'auto'}}} >ПРИНИМАЕМ ВАШУ ЗАЯВКУ</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                    Мы обсуждаем текущую ситуацию в Вашей компании, виды и объемы операций и предлагаем вам варианты решения ваших задач.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                    <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <GroupsOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{my: 'auto'}} >ВСТРЕЧА И АНАЛИЗ БИЗНЕСА</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                    Мы подписываем договор, которые гарантируют сохранность Вашей информации.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                    <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <HistoryEduOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{my: 'auto'}} >ПОДПИСАНИЕ ДОГОВОРА</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                    Мы принимаем от вас документы и определяем и согласовываем с вами график работы.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                    <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <TopicOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{my: 'auto'}} >ПЕРЕДАЧА ДОКУМЕНТОВ</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                    Полный порядок в Вашей бухгалтерской и налоговой документации и вовремя сданные отчеты.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                    <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <WorkHistoryOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{my: 'auto'}} >НАЧАЛО РАБОТЫ</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} fontSize={{ xs: 11, sm: 16 }} color="text.secondary">
                        Мы берем Вашу компанию на полное бухгалтерское обслуживание и экономим ваши деньги и время.
                    </TimelineOppositeContent>
                    <TimelineSeparator sx={{minHeight: 90}}>
                    <TimelineConnector sx={{ bgcolor: '#07139e' }} />
                        <TimelineDot sx={{width: 45, height: 45}} color="secondary" variant="outlined" >
                            <AssuredWorkloadOutlinedIcon sx={{width: 40, height: 40, m: 'auto'}} color='primary'  />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent fontSize={{xs: '0.9rem', sm: '1rem'}} sx={{ my: {xs: '20px', sm:'auto'}}} >ВЫ СПОКОЙНЫ ЗА БУХГАЛТЕРИЮ</TimelineContent>
                </TimelineItem>
                
            </Timeline>
        </React.Fragment>
    );
}

export default RoadMap;