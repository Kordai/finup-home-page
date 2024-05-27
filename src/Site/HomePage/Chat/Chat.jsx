import * as React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import BottomBar from './Components/BottomBar';
import IncomingMessage from './Components/IncomingMessage';
import SentMessage from './Components//SentMessage';
import TextMessage from './Components//TextMessage';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useState } from 'react';

const Chat = ({addUserChatRequest, newMessage, getAllMessages}) => {

    // const chats = useSelector(state => state.chat.chats_id)
    // const chat_users = useSelector(state => state.chat.chat_users)
    // const chat_messeges = [
    //     { chat_id: 1, content: { content: "Здравствуйте! Я Бизнес консультант, могу ответить вам на вопросы касательно работы Бизнеса в Республике Казахстан.", date: "16.04.2024", time: "15:19", type: 0 }, date_create: "16.04.2024", id: 51, user_id: 21 },
    //     { chat_id: 1, content: { content: "Здравствуйте!", date: "16.04.2024", time: "15:20", type: 0 }, date_create: "18.04.2024", id: 50, user_id: 1 },
    //     { chat_id: 1, content: { content: "увву", date: "16.04.2024", time: "15:21", type: 0 }, date_create: "16.04.2024", id: 52, user_id: 21 },
    //     { chat_id: 1, content: { content: "dddd", date: "16.04.2024", time: "15:37", type: 0 }, date_create: "16.04.2024", id: 53, user_id: 21 },
    //     { chat_id: 1, content: { content: "Дата в Чате готова?", date: "17.04.2024", time: "9:39", type: 0 }, date_create: "17.04.2024", id: 55, user_id: 21 },
    //     { chat_id: 1, content: { content: "Дату добавил.", date: "18.04.2024", time: "10:10", type: 0 }, date_create: "18.04.2024", id: 56, user_id: 1 },
    //     { chat_id: 1, content: { content: "Что ещё?", date: "18.04.2024", time: "10:10", type: 0 }, date_create: "18.04.2024", id: 57, user_id: 1 },
    //     { chat_id: 1, content: { content: "Что-то делать", date: "18.04.2024", time: "10:10", type: 0 }, date_create: "18.04.2024", id: 58, user_id: 1 },
    //     { chat_id: 1, content: { content: "Нужно добавить статус сообщения.", date: "18.04.2024", time: "10:11", type: 0 }, date_create: "18.04.2024", id: 59, user_id: 21 },
    //     { chat_id: 1, content: { content: "Что-то делать", date: "18.04.2024", time: "10:10", type: 0 }, date_create: "18.04.2024", id: 58, user_id: 1 },
    //     { chat_id: 1, content: { content: "Нужно добавить статус сообщения.", date: "18.04.2024", time: "10:11", type: 0 }, date_create: "18.04.2024", id: 59, user_id: 21 }
    // ]
    //useSelector(state => state.chat.chat_messeges)
    const authUser = useSelector(state => state.auth.authUser)
    const chat_messeges = useSelector(state => state.chat.chat_messeges)
    const focusRef = React.useRef(null);
    const nowDate = dayjs(new Date())
    const [amountMessage, setAmountMessage] = useState(0)

    const requestNewUser = () => {
        addUserChatRequest()
    }

    const getName = (uid) => {
        // const u = chat_users.filter((u) => u.user_id === uid)[0]
        // return u.lastName + ' ' + u.firstName
        return "FinUP.kz"
    }
    
    const getComponent = (content) => {
        if (content.type === 0) {
            return <TextMessage message={content.content} />
        }
        return <></>
    }
  
    //создаем массив из сообщений
    const chat = chat_messeges.map((c) => ({ name: getName(c.user_id), component: getComponent(c.content), ...c }))

    //сортируем и получаем массив дат из существующих сообщений
    const dateMessage = [...new Set(chat.map((c) => c.content.date))]

    //формируем компонент для отображения даты и присваиваем ему сообщение от этой даты
    const componentChatDate = dateMessage.map((d) => ({
        date: <Chip key={d} label={d} color="default" sx={{ color: '#07139e', m: 0.3 }} />, message: chat.filter((c) => c.content.date === d)
    }))

    //создаем массив объектов из компонента даты и сообщений от этой даты
    const componentChat = componentChatDate.map((cd, indexD) => ({
        date: cd.date, message: cd.message.map((c, index) => c.user_id === authUser.id ?
            <SentMessage key={index} message={c} refus={indexD + 1 === componentChatDate.length && index + 1 === cd.message.length ? focusRef : null} /> :
            <IncomingMessage key={index} message={c} refus={indexD + 1 === componentChatDate.length && index + 1 === cd.message.length ? focusRef : null} />)
    }))

    const setNewMassage = (mes) => {
        if (authUser.id === 0) {
            requestNewUser()
            setTimeout(()=>{}, 2000)
        }
        const time = (nowDate.$H > 9 ? nowDate.$H : '0' + nowDate.$H) + ':' + (nowDate.$m > 9 ? nowDate.$m : '0' + nowDate.$m)
        const date = nowDate.$D + '.' + (nowDate.$M + 1 > 9 ? nowDate.$M + 1 : '0' + (nowDate.$M + 1)) + '.' + nowDate.$y
        newMessage({ chat_id: authUser.chat_id, user_id: authUser.id, content: { type: 0, content: mes, time, date } })
    }

    useEffect(()=>{
        if (authUser.id !== 0) {
            getAllMessages({chat_id : authUser.chat_id})
        }
    }, [authUser, getAllMessages])

    

    useEffect(() => {

        const scrolTo = () => {
            if (chat.length !== 0) { focusRef.current.scrollIntoView() }
        }

        if (amountMessage !== chat_messeges.length) {
            setTimeout(scrolTo, 100)
            setAmountMessage(chat_messeges.length)
        }
    }, [amountMessage, setAmountMessage, chat_messeges.length, chat.length])

    return <Box sx={{
        boxSizing: 'border-box',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: 3,
        borderColor: '#7d83cc',
        borderRadius: 5,
        height: '100%',
        width: '100%',
        position: 'sticky',

    }} >

        <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="stretch"
        >
            <Grid item >
                <Box sx={{
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    width: '100%',
                    bgcolor: '#7d83cc',


                }} >
                    <Typography color="text.secondary" variant="body2" textAlign='center' sx={{color: 'white', fontSize: { xs: 'default', sm: 16 }}} >
                    ИИ FinUP.kz - Бизнес консультант
                    </Typography>
                </Box >
            </Grid>
            <Grid item >
                <Box sx={{
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    height: { xs: '89%', sm: '87%' },
                    width: '98%',
                    position: 'absolute',
                    top: { xs: 20, sm: 23 }
                }} >
                    <Box sx={{ px: 1, textAlign: 'center', pb: { xs: 3, sm: 0 } }}>
                        {componentChat.map((c) => [c.date, ...c.message])}
                    </Box >
                </Box >
            </Grid>
            <Grid item >
                <Box sx={{ display: 'flex', WebkitBoxFlex: 0, flexGrow: 0, position: 'absolute', width: '-webkit-fill-available', bottom: '0' }}>
                    <BottomBar newMessage={setNewMassage} />
                </Box >
            </Grid>
        </Grid>
    </Box >
}

export default Chat