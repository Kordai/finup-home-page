import React from 'react';
import { Button, Container, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import topImg from '../../Img/topIMG.jpg';
import mobile from '../../Img/2mobile.png';
import monitor from '../../Img/2monitors.png';
import { useDispatch, useSelector } from 'react-redux';
import NewAccountant from '../Forms/NewAccountant';
import ServicesCardPC from './Components/ServicesCardPC';
import ServicesCardMobile from './Components/ServicesCardMobile';

const ServicePage = ({ newClientRequest }) => {

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



    //const screenHeight = (window.screen.height / 2) + 40

    return <>
        <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 8 }, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset' }}>
                <Grid item md={12} lg={6}  >
                    <Typography variant="h1" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Компания FinUP.kz Аутсорсинг Бухгалтерии!
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        FinUP.kz специализируется на предоставлении профессиональных бухгалтерских услуг.

                        Бухгалтерия является одним из ключевых аспектов успешного функционирования предприятия, и мы готовы взять на себя эту ответственность.
                    </Typography>

                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Став нашим партнёром вы получаете:
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Осуществление своевременной передачи документации, проверка налоговых уведомлений и электронного документооборота.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Экспертную поддержку, освобождая вас от необходимости заниматься сложными финансовыми вопросами.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Тщательное ведение отчетности в соответствии с законодательством, минимизируя риски.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Индивидуальный подход к каждому клиенту, учитывая специфику вашей работы и ваши уникальные потребности.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Воспользовавшись услугами Бухгалтера, вы сможете сосредоточиться на своих задачах, зная, что финансы вашей компании находятся в надежных руках.

                        Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вашему бизнесу!
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6}  >
                    <img alt='Online Бухгалтер' src={topImg} style={{ width: '100%', border: 5 }} />
                </Grid>
                <Button onClick={() => setOpenFormNewClient(true)} color='secondary' type="button" variant="outlined" sx={{ mb: 1 }} >Запросить консультацию</Button>
            </Grid>

            {/* <Dialog
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
        </Dialog> */}

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

            {/*  <Dialog
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
        </Dialog> */}
        </Container>
        <Container maxWidth="xl" sx={{ mt: 1, p: { xs: 'default', md: 0 }, mb: 100 }}>
            <Grid container spacing={5} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                <Grid item  md={12} lg={12} sx={{ justifyContent: 'center' }} >
                    <Typography variant="h2" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Бухгалтерские услуги для бизнеса:
                    </Typography>
                    <Typography color={'#5d5d5d'} fontStyle={'italic'} textAlign={'center'} variant="subtitle1" fontSize={{ xs: '1em', md: '1.2em' }} gutterBottom sx={{ textIndent: '5%', width: '80%', mt: 1, mx: 'auto' }} >
                        Мы — Компания Бухгалтерских Услуг в Казахстане, предлагаем полный спектр бухгалтерских услуг для малого и среднего бизнеса.
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6}  >
                    <ServicesCardPC/>
                </Grid>
                <Grid item md={12} lg={6}  >
                    <ServicesCardMobile/>
                </Grid>
            </Grid>
            
                
           
        </Container>
    </>
}

export default ServicePage;
