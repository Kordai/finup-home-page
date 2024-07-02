import React, { useState } from 'react';
import ServiceCard from './Components/ServiceCard';
import { Avatar, Button, Container, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import ChatContainer from './Chat/ChatContainer';
import NewAccountant from '../Forms/NewAccountant';
import { useDispatch, useSelector } from 'react-redux';
import NewFNO from '../Forms/NewFNO';
import imgOnlineBuh2 from '../../Img/OnlineFinup2.jpg'
import whatsapp from '../../Img/WhatsApp.png'
import telegram from '../../Img/telegram.png'
import phone from '../../Img/phone.png'
import mobilePhone from '../../Img/mobilePhone.png'


const btn = [
    { logo: 1, title: 'Online Бухгалтер', subheader: 'Самостоятельное ведение Бухгалтерии', text1: 'Учет доходов и расходов / Создание Документов / Расчет ФНО', text2: '', btnName: 'Регистрация' },
    { logo: 2, title: 'Я Бухгалтер', subheader: 'Хочу работать удалённо', text1: 'Новые клиенты / Разовые услуги по сдаче ФНО / Создание Документов / Расчет ФНО', text2: ' Найти клиентов', btnName: 'Подать заявку' },
    { logo: 3, title: 'Аутсорсинг', subheader: 'Бухгалтерские услуги', text1: 'Бухгалтерское сопровождение предприятия в Казахстане', text2: '', btnName: 'Заказать звонок' },
    { logo: 4, title: 'Сдать ФНО', subheader: 'Сдача налоговыйх форм', text1: 'ФНО 910.00 / ФНО 913.00 / ФНО 100.00 / ФНО 200.00 / ФНО 300.00 / ФНО 400.00', text2: 'Разовая услуга', btnName: 'Отправить заявку' },
]

const HomePage = ({ newAccountantRequest, newClientRequest, newFNORequest }) => {

    const openFormNewAccountant = useSelector(state => state.auth.openFormNewAccountant)
    const openFormNewClient = useSelector(state => state.auth.openFormNewClient)
    const openFormNewFNO = useSelector(state => state.auth.openFormNewFNO)

    const dispatch = useDispatch()

    const setOpenFormNewAccountant = (data) => {
        dispatch({ type: 'AUTH/SET_OPEN_FORM_ACCOUNTANT', data })
    }

    const setOpenFormNewClient = (data) => {
        dispatch({ type: 'AUTH/SET_OPEN_FORM_CLIENT', data })
    }

    const setOpenFormNewFNO = (data) => {
        dispatch({ type: 'AUTH/SET_OPEN_FORM_FNO', data })
    }

    const goCabinet = () => {
        //navigate("https://cabinet.finup.kz/")
        //window.location.href = "https://cabinet.finup.kz/"
        window.open('https://cabinet.finup.kz/', '_blank');
    }

    const handleCloseFormNewAccountant = () => {
        setOpenFormNewAccountant(false)
    }

    const handleCloseFormNewClient = () => {
        setOpenFormNewClient(false)
    }

    const handleCloseFormNewFNO = () => {
        setOpenFormNewFNO(false)
    }

    const arrayFun = [goCabinet, () => { setOpenFormNewAccountant(true) }, () => { setOpenFormNewClient(true) }, () => { setOpenFormNewFNO(true) }]

    const screenHeight = (window.screen.height / 2) + 140

    return <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 12 }, p: 0 }}>
        <Grid container spacing={{ xs: 2, md: 2 }} sx={{ px: 3 }} >
            {btn.map((b, index) =>
                <ServiceCard key={index} logo={b.logo} title={b.title} subheader={b.subheader} text1={b.text1} text2={b.text2} btnName={b.btnName} fun={arrayFun[index]} />
            )}
        </Grid>
        <Grid container spacing={1} sx={{ mt: { xs: 0.5, lg: 3 }, height: { xs: '100%', lg: 'screenHeight'} }} >
            <Grid item lg={8} xl={8} sx={{ display: { xs: 'none', lg: 'block'}, height: screenHeight }} >
                <Grid container spacing={1} sx={{ height: '50%' }}>
                    <Grid item lg={4} xl={4} sx={{ height: '100%' }} >
                        <img alt='Online Бухгалтер' src={imgOnlineBuh2} style={{ height: '100%', border: 5, borderRadius: 20 }} />
                    </Grid>
                    <Grid item lg={8} xl={8} >
                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom >
                            <strong>Онлайн Бухгалтерия</strong> — это современный подход к ведению бухгалтерского учета, при котором все финансовые операции и учетные процессы выполняются с использованием интернет-технологий и облачных сервисов.
                        </Typography>

                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom sx={{ my: '25px' }}>
                            Бухгалтерия в смартфоне придает мобильность и делает процесс ведения учета более простым, удобным и эффективным, что особенно важно для малого и среднего бизнеса, который стремится к оптимизации своих ресурсов и времени.
                        </Typography>

                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom >
                            В FinUP.kz мы предлагаем уникальную услугу – <strong>ИИ бизнес-консультант</strong>, который использует передовые алгоритмы искусственного интеллекта для анализа данных и предоставления персонализированных рекомендаций по оптимизации вашего бизнеса и повышению его эффективности. Попробуйте наш ИИ бизнес-консультант уже сегодня и убедитесь в его преимуществах на практике!   🤖 👉
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item lg={12} xl={12} >
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom  >
                            <strong>ТОО "FinUp.kz"</strong> является надежным партнером в области аутсорсинга бухгалтерии. Мы предлагаем комплексные решения, адаптированные к потребностям вашего бизнеса, обеспечивая высокое качество услуг и индивидуальный подход
                        </Typography>
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom sx={{ my: '25px' }}>
                            <strong>Аутсорсинг бухгалтерии</strong> – это стратегическое решение, позволяющее оптимизировать управление финансовыми потоками, снизить риски и сосредоточиться на развитии бизнеса. С FinUp.kz вы получаете надежного партнера, который обеспечит высокое качество бухгалтерских услуг и поможет вашему бизнесу достигнуть новых высот.
                        </Typography>
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom>
                            Свяжитесь с нами сегодня, чтобы обсудить, как наши аутсорсинговые решения могут помочь вам эффективно управлять бухгалтерией и добиться успеха.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item lg={12} xl={12} >
                        <Button target="_blank" href="https://api.whatsapp.com/send?phone=77084252550" underline="none">
                            <Avatar alt="Написать в WhatsApp FinUP Online Бухгалтерия" src={whatsapp} />
                        </Button>
                        <Button target="_blank" href="https://telegram.im/@AlexTrade1" underline="none">
                            <Avatar alt="Написать в Telegram FinUP Online Бухгалтерия" src={telegram} />
                        </Button>
                        <Button title='Телефон Бухгалтерской компании' target="_blank" href="tel:+77172252550" underline="none">
                            <Avatar alt="Написать в WhatsApp FinUP Online Бухгалтерия" src={phone} />
                        </Button>
                        <Button title='Мобильный телефон Бухгалтерской компании' target="_blank" href="tel:+77084252550" underline="none">
                            <Avatar alt="Написать в Telegram FinUP Online Бухгалтерия" src={mobilePhone} />
                        </Button>
                        <Button title='Мобильный телефон Бухгалтерской компании' target="_blank" href="tel:+77084252550" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="error" textAlign={'center'} >
                                +7 (708) 425-25-50
                            </Typography>
                        </Button>
                        <Button title='Электронная почта Бухгалтерской компании' target="_blank" href="mailto:buh@finup.kz" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="error" textAlign={'center'} >
                                e-mail: buh@finup.kz
                            </Typography>
                        </Button>
                        <Button onClick={() => setOpenFormNewClient(true)} color='secondary' type="button" variant="outlined" sx={{ mb: 1, ml: '20px' }} >Запросить консультацию</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={4} xl={4} sx={{ height: screenHeight }}    >
                <ChatContainer />
            </Grid>
            <Grid item sx={{ display: { xs: 'block', lg: 'none'} }} >
                <Grid container spacing={1} >
                    <Grid item lg={4} xl={4} >
                        <img alt='Online Бухгалтер' src={imgOnlineBuh2} style={{ width: '95%', border: 5, borderRadius: 20 }} />
                    </Grid>
                    <Grid item lg={8} xl={8} >
                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom sx={{mx: '15px'}} >
                            <strong>Онлайн Бухгалтерия</strong> — это современный подход к ведению бухгалтерского учета, при котором все финансовые операции и учетные процессы выполняются с использованием интернет-технологий и облачных сервисов.
                        </Typography>

                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom sx={{ my: '25px', mx: '15px' }}>
                            Бухгалтерия в смартфоне придает мобильность и делает процесс ведения учета более простым, удобным и эффективным, что особенно важно для малого и среднего бизнеса, который стремится к оптимизации своих ресурсов и времени.
                        </Typography>

                        <Typography variant="body1" fontSize={'1em'} color={'#5d5d5d'} gutterBottom  sx={{mx: '15px', mb: '25px'}} >
                            В FinUP.kz мы предлагаем уникальную услугу – <strong>ИИ бизнес-консультант</strong>, который использует передовые алгоритмы искусственного интеллекта для анализа данных и предоставления персонализированных рекомендаций по оптимизации вашего бизнеса и повышению его эффективности. Попробуйте наш ИИ бизнес-консультант уже сегодня и убедитесь в его преимуществах на практике!   🤖 👆
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item lg={12} xl={12} >
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom sx={{mx: '15px'}} >
                            <strong>ТОО "FinUp.kz"</strong> является надежным партнером в области аутсорсинга бухгалтерии. Мы предлагаем комплексные решения, адаптированные к потребностям вашего бизнеса, обеспечивая высокое качество услуг и индивидуальный подход
                        </Typography>
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom sx={{ my: '25px', mx: '15px' }}>
                            <strong>Аутсорсинг бухгалтерии</strong> – это стратегическое решение, позволяющее оптимизировать управление финансовыми потоками, снизить риски и сосредоточиться на развитии бизнеса. С FinUp.kz вы получаете надежного партнера, который обеспечит высокое качество бухгалтерских услуг и поможет вашему бизнесу достигнуть новых высот.
                        </Typography>
                        <Typography variant="body1" fontSize={'1.2em'} color={'#5d5d5d'} gutterBottom sx={{mx: '15px'}} >
                            Свяжитесь с нами сегодня, чтобы обсудить, как наши аутсорсинговые решения могут помочь вам эффективно управлять бухгалтерией и добиться успеха.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item lg={12} xl={12} >
                        <Button target="_blank" href="https://api.whatsapp.com/send?phone=77084252550" underline="none">
                            <Avatar alt="Написать в WhatsApp FinUP Online Бухгалтерия" src={whatsapp} />
                        </Button>
                        <Button target="_blank" href="https://telegram.im/@AlexTrade1" underline="none">
                            <Avatar alt="Написать в Telegram FinUP Online Бухгалтерия" src={telegram} />
                        </Button>
                        <Button title='Телефон Бухгалтерской компании' target="_blank" href="tel:+77172252550" underline="none">
                            <Avatar alt="Написать в WhatsApp FinUP Online Бухгалтерия" src={phone} />
                        </Button>
                        <Button title='Мобильный телефон Бухгалтерской компании' target="_blank" href="tel:+77084252550" underline="none">
                            <Avatar alt="Написать в Telegram FinUP Online Бухгалтерия" src={mobilePhone} />
                        </Button>
</Grid>
                        <Grid item lg={12} xl={12} >
                        <Button title='Мобильный телефон Бухгалтерской компании' target="_blank" href="tel:+77084252550" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="error" textAlign={'center'} >
                                +7 (708) 425-25-50
                            </Typography>
                        </Button>
                        <Button title='Электронная почта Бухгалтерской компании' target="_blank" href="mailto:buh@finup.kz" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="error" textAlign={'center'} >
                                e-mail: buh@finup.kz
                            </Typography>
                        </Button>
                        <Button onClick={() => setOpenFormNewClient(true)} color='secondary' type="button" variant="outlined" sx={{ mb: 1, ml: '20px' }} >Запросить консультацию</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Dialog
            open={openFormNewAccountant}
            onClose={handleCloseFormNewAccountant}
            scroll='body'
        >
            <DialogTitle sx={{ m: 0, p: '5px', textAlign: 'center' }} color="#07139e" id="customized-dialog-title">
                Заявка на удаленного Бухгалтера
            </DialogTitle>
            <DialogContent >
                <NewAccountant newAccountantRequest={newAccountantRequest} handleCloseFormNewAccountant={handleCloseFormNewAccountant} />
            </DialogContent>
        </Dialog>

        <Dialog
            open={openFormNewClient}
            onClose={handleCloseFormNewClient}
            scroll='body'
        >
            <DialogTitle sx={{ m: 0, p: '5px', textAlign: 'center' }} color="#07139e" id="customized-dialog-title">
                Заказать звонок
            </DialogTitle>
            <DialogContent >
                <NewAccountant newAccountantRequest={newClientRequest} handleCloseFormNewAccountant={handleCloseFormNewClient} />
            </DialogContent>
        </Dialog>

        <Dialog
            open={openFormNewFNO}
            onClose={handleCloseFormNewFNO}
            scroll='body'
        >
            <DialogTitle sx={{ m: 0, p: '5px', textAlign: 'center' }} color="#07139e" id="customized-dialog-title">
                Заказать звонок
            </DialogTitle>
            <DialogContent >
                <NewFNO newAccountantRequest={newFNORequest} handleCloseFormNewAccountant={handleCloseFormNewFNO} />
            </DialogContent>
        </Dialog>
    </Container>
}

export default HomePage;
