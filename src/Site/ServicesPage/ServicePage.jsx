import React from 'react';
import { Avatar, Box, Button, Container, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import topImg from '../../Img/topIMG.jpg';
import { useDispatch, useSelector } from 'react-redux';
import NewAccountant from '../Forms/NewAccountant';
import ServicesCardPC from './Components/ServicesCardPC';
import ServicesCardMobile from './Components/ServicesCardMobile';
import RoadMap from './Components/RoadMap';
import youtube from '../../Img/YouTube.png'
import instagram from '../../Img/Instagram.png'
import facebook from '../../Img/Facebook.png'
import whatsapp from '../../Img/WhatsApp.png'
import telegram from '../../Img/telegram.png'
import logo from '../../Img/NEW_LOGO_05_2024.png'
import Segments from '../Components/Segments'
import ServiceCard from '../HomePage/Components/ServiceCard';
import NewFNO from '../Forms/NewFNO';

const btn = [
    { logo: 1, title: 'Online Бухгалтер', subheader: 'Самостоятельное ведение Бухгалтерии', text1: 'Учет доходов и расходов / Создание Документов / Расчет ФНО', text2: '', btnName: 'Регистрация' },
    { logo: 2, title: 'Я Бухгалтер', subheader: 'Хочу работать удалённо', text1: 'Новые клиенты / Разовые услуги по сдаче ФНО / Создание Документов / Расчет ФНО', text2: ' Найти клиентов', btnName: 'Подать заявку' },
    { logo: 3, title: 'Аутсорсинг', subheader: 'Бухгалтерские услуги', text1: 'Бухгалтерское сопровождение предприятия в Казахстане', text2: '', btnName: 'Заказать звонок' },
    { logo: 4, title: 'Сдать ФНО', subheader: 'Сдача налоговыйх форм', text1: 'ФНО 910.00 / ФНО 913.00 / ФНО 100.00 / ФНО 200.00 / ФНО 300.00 / ФНО 400.00', text2: 'Разовая услуга', btnName: 'Отправить заявку' },
]

const text_segment_1 = [
    'В FinUp.kz мы понимаем, насколько важна правильная и своевременная работа с документами для успешного ведения бизнеса. Наши услуги включают:',
    'Сбор и обработка первичных документов: Организация и систематизация всех финансовых и бухгалтерских документов, включая счета, накладные, акты выполненных работ и другие.',
    'Архивирование и хранение документов: Надежное хранение документов в соответствии с требованиями законодательства и внутренними стандартами компании.',
    'Наши специалисты тщательно следят за всеми этапами работы с документами, гарантируя их полное соответствие законодательным требованиям и корпоративным стандартам. С нами вы можете быть уверены в порядке и точности ведения вашей документации.'
]

const text_segment_1_bold = [
    '',
    'Сбор и обработка первичных документов: ',
    'Архивирование и хранение документов: ',
    ''
]

const text_segment_2 = [
    'В FinUp.kz мы предлагаем комплексные услуги по налоговому учету и планированию, которые помогут вам эффективно управлять налоговыми обязательствами и минимизировать налоговые риски. Наши услуги включают:',
    'Проводим аудит Вашей текущей системы налогообложения и законную оптимизацию налоговых обязательств.',
    'Точный расчет всех видов налогов, подготовка и своевременная уплата налоговых платежей в соответствии с действующим законодательством.',
    'Составление и подача всех необходимых налоговых деклараций и отчетов, соответствующих требованиям налоговых органов.',
    'Консультации по налогообложению: Профессиональные консультации по вопросам налогового законодательства, помощь в решении сложных налоговых ситуаций и подготовка к налоговым проверкам.',
    'Наши эксперты следят за всеми изменениями в налоговом законодательстве и готовы предложить вам самые актуальные и эффективные решения. С нами вы можете быть уверены в том, что ваши налоговые обязательства будут выполнены точно и своевременно, что позволит вам сосредоточиться на развитии вашего бизнеса.',

]

const text_segment_2_bold = [
    '',
    'Мы решаем все вопросы с налогами: ',
    'Расчет и уплата налогов: ',
    'Подготовка налоговой отчетности: ',
    'Консультации по налогообложению: ',
    ''
]

const text_segment_3 = [
    'В FinUp.kz мы понимаем, что своевременная и точная финансовая отчетность является ключевым элементом успешного управления бизнесом. Наши услуги по подготовке отчетов включают:',
    'Подготовка и составление финансовых отчетов, включая баланс, отчет о прибылях и убытках, отчет о движении денежных средств и пояснительную записку, в соответствии с национальными и международными стандартами бухгалтерского учета.',
    'Разработка управленческих отчетов для внутреннего использования, которые помогут руководству компании принимать обоснованные решения и контролировать финансовые показатели.',
    'Подготовка и подача налоговых деклараций и отчетов, необходимых для выполнения требований налоговых органов и минимизации налоговых рисков.',
    'Составление отчетов для внешних пользователей, таких как инвесторы, кредиторы, государственные органы и другие заинтересованные стороны.',
    'Наши специалисты обеспечат точность, полноту и соответствие всех отчетов действующим законодательным требованиям и стандартам бухгалтерского учета. С нами вы получите надежную и своевременную отчетность, которая позволит вам эффективно управлять вашим бизнесом и уверенно планировать будущее.',
]

const text_segment_3_bold = [
    '',
    'Финансовая отчетность: ',
    'Управленческая отчетность: ',
    'Налоговая отчетность: ',
    'Специальная отчетность: ',
    ''
]

const text_segment_4 = [
    'В FinUp.kz мы предлагаем профессиональные услуги по ведению кадрового учёта, обеспечивая полное соответствие трудовому законодательству и внутренним стандартам вашей компании. Наши услуги включают:',
    'Оформление всех необходимых документов при приёме, переводе и увольнении сотрудников, включая трудовые договоры, приказы, личные карточки и другие кадровые документы.',
    'Организация и контроль учёта рабочего времени сотрудников, включая составление графиков работы, учёт отпусков, больничных и других видов отсутствий.',
    'Точный и своевременный расчёт заработной платы, премий, пособий и других выплат сотрудникам, с учётом всех налоговых и социальных отчислений.',
    'Консультации по трудовому законодательству: Профессиональные консультации по вопросам трудового законодательства, помощь в разрешении трудовых споров и подготовка к проверкам со стороны государственных органов.',
    'Подготовка и подача необходимой отчётности по персоналу в государственные органы и фонды, включая отчёты по страховым взносам и налогам.',
    'Наши специалисты обеспечат точное и своевременное ведение кадрового учёта, что позволит вам сосредоточиться на развитии вашего бизнеса и уверенно управлять персоналом. С нами вы можете быть уверены в порядке и надёжности вашей кадровой документации.',
]

const text_segment_4_bold = [
    '',
    'Ведение кадровой документации: ',
    'Учёт рабочего времени: ',
    'Расчёт заработной платы: ',
    'Консультации по трудовому законодательству: ',
    'Отчётность по персоналу: ',
    ''
]

const ServicePage = ({ newAccountantRequest, newClientRequest, newFNORequest }) => {

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
    
    //const screenHeight = (window.screen.height / 2) + 40

    return <>
        <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 15 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', pb: { xs: 5, md: 6 } }}>
                <Grid item md={12} lg={6}  >
                    <Typography variant="h1" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Компания FinUP.kz Аутсорсинг Бухгалтерии!
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        FinUP.kz специализируется на предоставлении профессиональных бухгалтерских услуг.

                        Бухгалтерия является одним из ключевых аспектов успешного функционирования предприятия, и мы готовы взять на себя эту ответственность.
                    </Typography>

                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Став нашим партнёром вы получаете:
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Осуществление своевременной передачи документации, проверка налоговых уведомлений и электронного документооборота.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Экспертную поддержку, освобождая вас от необходимости заниматься сложными финансовыми вопросами.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Тщательное ведение отчетности в соответствии с законодательством, минимизируя риски.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        -- Индивидуальный подход к каждому клиенту, учитывая специфику вашей работы и ваши уникальные потребности.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Воспользовавшись услугами Бухгалтера, вы сможете сосредоточиться на своих задачах, зная, что финансы вашей компании находятся в надежных руках.

                        Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вашему бизнесу!
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6}  >
                    <img alt='Online Бухгалтер' src={topImg} style={{ width: '100%', border: 5 }} />
                </Grid>
                <Button onClick={() => setOpenFormNewClient(true)} color='secondary' type="button" variant="outlined" sx={{ mb: 1 }} >Запросить консультацию</Button>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 2 }} sx={{ px: 3 }} >
                {btn.map((b, index) =>
                    <ServiceCard key={index} logo={b.logo} title={b.title} subheader={b.subheader} text1={b.text1} text2={b.text2} btnName={b.btnName} fun={arrayFun[index]} />
                )}
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
        <Container maxWidth="xl" sx={{ mt: 6, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={5} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 10 }}>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                    <Typography variant="h2" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Бухгалтерские услуги для бизнеса:
                    </Typography>
                    <Typography color={'#5d5d5d'} fontStyle={'italic'} textAlign={'center'} variant="subtitle1" fontSize={{ xs: '1em', md: '1.2em' }} gutterBottom sx={{ textIndent: '5%', width: '80%', mt: 1, mx: 'auto' }} >
                        Мы — Компания Бухгалтерских Услуг в Казахстане, предлагаем полный спектр бухгалтерских услуг для малого и среднего бизнеса.
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6}  >
                    <ServicesCardPC />
                </Grid>
                <Grid item md={12} lg={6}  >
                    <ServicesCardMobile />
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={5} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                    <Typography variant="h3" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Сегменты бухгалтерского управления:
                    </Typography>
                </Grid>
                <Grid item md={12} lg={12}  >
                    <Segments title={'ДОКУМЕНТЫ'} text={text_segment_1} textBold={text_segment_1_bold} imgIndex={0} />
                </Grid>
                <Grid item md={12} lg={12}  >
                    <Segments title='НАЛОГИ' text={text_segment_2} textBold={text_segment_2_bold} imgIndex={1} />
                </Grid>
                <Grid item md={12} lg={12}  >
                    <Segments title='ОТЧЁТЫ' text={text_segment_3} textBold={text_segment_3_bold} imgIndex={2} />
                </Grid>
                <Grid item md={12} lg={12}  >
                    <Segments title='КАДРЫ' text={text_segment_4} textBold={text_segment_4_bold} imgIndex={3} />
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                    <Typography variant="h3" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        Как работаает Аутсорсинг Бухгалтерии?
                    </Typography>
                    <Typography color={'#5d5d5d'} fontStyle={'italic'} textAlign={'center'} variant="subtitle1" fontSize={{ xs: '1em', md: '1.2em' }} gutterBottom sx={{ textIndent: '5%', width: '80%', mt: 1, mx: 'auto' }} >
                        Заключите Договор и начните экономить до 30% на бухобслуживании уже сегодня.
                    </Typography>
                </Grid>
                <Grid item md={12} lg={12}  >
                    <RoadMap />
                </Grid>

            </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                    <Typography variant="h3" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                        FinUP.kz - Цифровая бухгалтерия для вашего Бизнеса
                    </Typography>
                    <Typography color={'#5d5d5d'} fontStyle={'italic'} textAlign={'center'} variant="subtitle1" fontSize={{ xs: '1em', md: '1.2em' }} gutterBottom sx={{ textIndent: '5%', width: '80%', mt: 1, mx: 'auto' }} >
                        Инновационные услуги в сфере Бухучета 📊 Услуги бухгалтера в Казахстане 🌐 Онлайн Бухгалтерия 📱
                    </Typography>
                </Grid>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center', textAlign: 'center' }}  >
                    <Box sx={{ width: { xs: '350px', md: '560px' }, height: { xs: '200px', md: '315px' }, mx: 'auto' }} >
                        <iframe style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/eC9zfrsuonI?si=S3lF_7VPtflyLe0j"
                            title="YouTube FinUP.kz - Бухгалтерские услуги" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </Box>
                </Grid>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center', textAlign: 'center' }}  >
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Button target="_blank" href="https://www.youtube.com/@Online-Buh" underline="none">
                            <Avatar sx={{ width: 56, height: 56 }} alt="YouTube FinUP Online Бухгалтерия" src={youtube} />
                        </Button>
                        <Button target="_blank" href="https://www.instagram.com/_finup.kz/" underline="none">
                            <Avatar sx={{ width: 56, height: 56 }} alt="Instagram FinUP Online Бухгалтерия" src={instagram} />
                        </Button>
                        <Button target="_blank" href="https://www.facebook.com/finup.kz/" underline="none">
                            <Avatar sx={{ width: 56, height: 56 }} alt="Facebook FinUP Online Бухгалтерия" src={facebook} />
                        </Button>
                        <Button target="_blank" href="https://api.whatsapp.com/send?phone=77084252550" underline="none">
                            <Avatar sx={{ width: 56, height: 56 }} alt="Написать в WhatsApp FinUP Online Бухгалтерия" src={whatsapp} />
                        </Button>
                        <Button target="_blank" href="https://telegram.im/@AlexTrade1" underline="none">
                            <Avatar sx={{ width: 56, height: 56 }} alt="Написать в Telegram FinUP Online Бухгалтерия" src={telegram} />
                        </Button>
                    </Stack>
                </Grid>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center', textAlign: 'center' }}  >
                    <Stack justifyContent="center" alignItems="center" spacing={0}>
                        <Button title='Бухгалтерское обслуживание' target="_blank" href="https://2gis.kz/astana/geo/70000001075602870" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'center'} >
                                РК г. Астана, улица Родниковая 1/1, Z05F2B1.
                                БЦ Абат, этаж 4, офис 402
                            </Typography>
                        </Button>
                        <Button title='Телефон Бухгалтерской компании' target="_blank" href="tel:+77172252550" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'center'} >
                                +7 (717) 225-25-50
                            </Typography>
                        </Button>
                        <Button title='Мобильный телефон Бухгалтерской компании' target="_blank" href="tel:+77084252550" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'center'} >
                                +7 (708) 425-25-50
                            </Typography>
                        </Button>
                        <Button title='Электронная почта Бухгалтерской компании' target="_blank" href="mailto:buh@finup.kz" underline="none" >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'center'} >
                                e-mail: buh@finup.kz
                            </Typography>
                        </Button>
                    </Stack>
                </Grid>
                <Grid item md={12} lg={12} sx={{ justifyContent: 'center', textAlign: 'center' }}  >
                    <img src={logo} width={'300px'} alt='Аутсорсинг Бухгалтерии FinUp.kz' />
                </Grid>
            </Grid>
        </Container>
    </>
}

export default ServicePage;
