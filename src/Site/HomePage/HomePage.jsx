import React from 'react';
import ServiceCard from './Components/ServiceCard';
import { Container, Grid } from '@mui/material';
import img1 from '../../Img/img1.jpg';
import img2 from '../../Img/img2.jpg';
import ChatContainer from './Chat/ChatContainer';


const btn = [
    { logo: 1, title: 'Online Бухгалтер', subheader: 'Самостоятельное ведение Бухгалтерии', text1: 'Учет доходов и расходов / Создание Документов / Расчет ФНО', text2: '', btnName: 'Регистрация' },
    { logo: 2, title: 'Я Бухгалтер', subheader: 'Хочу работать удалённо', text1: 'Новые клиенты / Разовые услуги по сдаче ФНО / Создание Документов / Расчет ФНО', text2: ' Найти клиентов', btnName: 'Подать заявку' },
    { logo: 3, title: 'Аутсорсинг', subheader: 'Бухгалтерские услуги', text1: 'Бухгалтерское сопровождение предприятия в Казахстане', text2: '', btnName: 'Заказать звонок' },
    { logo: 4, title: 'Сдать ФНО', subheader: 'Сдача налоговыйх форм', text1: 'ФНО 910.00 / ФНО 913.00 / ФНО 100.00 / ФНО 200.00 / ФНО 300.00 / ФНО 400.00', text2: 'Разовая услуга', btnName: 'Отправить заявку' },
]

const HomePage = () => {

    const goCabinet = () => {
        //navigate("https://cabinet.finup.kz/")
        //window.location.href = "https://cabinet.finup.kz/"
        window.open('https://cabinet.finup.kz/', '_blank');
    }

    const arrayFun = [goCabinet, () => { }, () => { }, () => { }]

    const screenHeight = (window.screen.height/2) - 50
   
    return <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 1, md: 2 }} >
            {btn.map((b, index) =>
                <ServiceCard key={index} logo={b.logo} title={b.title} subheader={b.subheader} text1={b.text1} text2={b.text2} btnName={b.btnName} fun={arrayFun[index]} />
            )}
        </Grid>
        <Grid container spacing={1} sx={{ mt: {xs: 0.5, lg: 3}, height: screenHeight }} >
            <Grid item lg={3} xl={3} sx={{ display: { xs: 'none', lg: 'block' } }} >
                <img alt='Online Бухгалтер' src={img1} style={{ width: '100%', border: 5, borderRadius: 20 }} />
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={6} xl={6}  >                
                    <ChatContainer />
            </Grid>
            <Grid item lg={3} xl={3} sx={{ display: { xs: 'none', lg: 'block' } }} >
                <img alt='Услуги Бухгалтера' src={img2} style={{ width: '100%', border: 10, borderRadius: 20 }} />
            </Grid>
        </Grid>
    </Container>
}

export default HomePage;
