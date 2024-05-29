import * as React from 'react';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomBar from './Components/BottomBar';
import IncomingMessage from './Components/IncomingMessage';
import SentMessage from './Components//SentMessage';
import TextMessage from './Components//TextMessage';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useState } from 'react';
import ConnectToChatGPT from '../../../API/ConnecToChatGPT';

const Chat = ({ addUserChatRequest, newMessage, getAllMessages }) => {

    const authUser = useSelector(state => state.auth.authUser)
    const chat_messeges = useSelector(state => state.chat.chat_messeges)
    const threadId = useSelector(state => state.chat.threadId)
    const runId = useSelector(state => state.chat.runId)
    const messageId = useSelector(state => state.chat.messageId)
    const focusRef = React.useRef(null);
    const nowDate = dayjs(new Date())

    const [amountMessage, setAmountMessage] = useState(0)
    const [userMessage, setUserMaessage] = useState('')
    const [statusRun, setStatusRun] = useState('')
    const dispatch = useDispatch()

    const setThreadId = React.useCallback((threadId) => {
        dispatch({ type: 'CHATS/SET_THREAD_ID', threadId })
    }, [dispatch])

    const setRunId = React.useCallback((runId) => {
        dispatch({ type: 'CHATS/SET_RUN_ID', runId })
    }, [dispatch])

    const setMessageId = React.useCallback((messageId) => {
        dispatch({ type: 'CHATS/SET_MESSAGE_ID', messageId })
    }, [dispatch])


    useEffect(() => {
        if (userMessage.length > 0 && threadId.length === 0) {
            ConnectToChatGPT.threadNew().then((data) => {
                console.log('new thread');
                setThreadId(data.id)
            })
        }
    }, [userMessage, ConnectToChatGPT, setThreadId, threadId])

    useEffect(() => {
        if (threadId.length > 0 && userMessage.length > 0) {
            ConnectToChatGPT.newMessageCreate(threadId, userMessage).then((data) => {
                console.log('new mess');
                setMessageId(data.id)
                setUserMaessage('')
            })
        }
    }, [threadId, userMessage, ConnectToChatGPT, setMessageId])

    useEffect(() => {
        if (messageId.length > 0) {
            ConnectToChatGPT.newRunBusinessAssistent(threadId).then((data) => {
                console.log('new run');
                setRunId(data.id)
            })
        }

    }, [messageId, setRunId, ConnectToChatGPT])

    useEffect(() => {
        const chekingRun = () => {
            ConnectToChatGPT.retrieveRun(threadId, runId).then((data) => {
                console.log(data.status)
                setStatusRun(data.status)
                if (data.status === 'completed') {
                    console.log(data);
                    ConnectToChatGPT.getMessage(threadId, messageId).then((data) => {
                        const time = (nowDate.$H > 9 ? nowDate.$H : '0' + nowDate.$H) + ':' + (nowDate.$m > 9 ? nowDate.$m : '0' + nowDate.$m)
                        const date = nowDate.$D + '.' + (nowDate.$M + 1 > 9 ? nowDate.$M + 1 : '0' + (nowDate.$M + 1)) + '.' + nowDate.$y
                        //console.log(data.data[0].content[0].text.value)
                        //setMessageToChat({ chat_id: authUser.chat_id, user_id: 0, content: { type: 0, content: data.data[0].content[0].text.value, time, date } })

                        newMessage({ chat_id: authUser.chat_id, user_id: 0, content: data.data[0].content[0].text.value, type: 0, time, date: date }, { chat_id: authUser.chat_id })
                    })
                } else {
                    setTimeout(chekingRun(), 5000);
                }
            })
        }
        if (runId.length > 0) {
            chekingRun()
        }

    }, [runId, threadId, ConnectToChatGPT])

    const requestNewUser = () => {
        addUserChatRequest()
    }

    const getComponent = (content) => {
        if (content.type === 0) {
            return <TextMessage message={content.content} />
        }
        return <></>
    }

    //создаем массив из сообщений    
    const chat = chat_messeges.map((c) => ({ component: getComponent(c), ...c }))

    //сортируем и получаем массив дат из существующих сообщений
    const dateMessage = [...new Set(chat.map((c) => c.date))]

    //формируем компонент для отображения даты и присваиваем ему сообщение от этой даты
    const componentChatDate = dateMessage.map((d) => ({
        date: <Chip key={d} label={d} color="default" sx={{ color: '#07139e', m: 0.3 }} />, message: chat.filter((c) => c.date === d)
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
            setTimeout(() => { }, 2000)
        }
        const time = (nowDate.$H > 9 ? nowDate.$H : '0' + nowDate.$H) + ':' + (nowDate.$m > 9 ? nowDate.$m : '0' + nowDate.$m)
        const date = nowDate.$D + '.' + (nowDate.$M + 1 > 9 ? nowDate.$M + 1 : '0' + (nowDate.$M + 1)) + '.' + nowDate.$y
        newMessage({ chat_id: authUser.chat_id, user_id: authUser.id, content: mes, type: 0, time, date: date }, { chat_id: authUser.chat_id })
        setUserMaessage(mes)
    }

    useEffect(() => {
        if (authUser.id !== 0) {
            getAllMessages({ chat_id: authUser.chat_id })
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
                    <Typography color="text.secondary" variant="body2" textAlign='center' sx={{ color: 'white', fontSize: { xs: 'default', sm: 16 } }} >
                        ИИ FinUP.kz - Бизнес консультант <span style={{color: 'yellow'}} >!!!Beta тест!!!</span>
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