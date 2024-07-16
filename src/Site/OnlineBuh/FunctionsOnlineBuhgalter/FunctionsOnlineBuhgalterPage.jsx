import React, { useRef } from 'react';
import { Avatar, Container, Grid, Link, Typography } from '@mui/material';
import topImg from '../../../Img/functions.jpg'
import img from '../../../Img/okno.jpg'
import SegmentsRounded from '../../Components/SegmentsRounded';

const FunctionsOnlineBuhgalterPage = () => {

    const linkRef = useRef(null)

    const text_blog = [
        '',
        'Создание новой Заявки производится путем нажатия на кнопку "+ НОВАЯ ЗАЯВКА". После нажатия открывается окно Новой заявки.',
        'Заполняете все поля: Дата, Выбрать клиента (по кнопке 1 - можно просмотреть реквизиты клиента, по кнопке 2 - создать нового клиента), Адрес доставки (если его нет, будет доступна кнопка для перехода в Справочник), Договор (если есть необходимость).',
        'Табличная часть Товар/Услуга, при помощи кнопки "+ ДОБАВИТЬ ЗАПИСЬ" можно добавить Товар или Услугу, укажите количество, а стоимость подтянется из Справочника (стоимость можно изменить).',
        'Редактирование Заявки происходит по нажатию на любое место карточки Заявки кроме кнопок взаимодействия с заявкой (№4, №5, №6). После нажатия открывается окно Редактирования заявки (вид окна и настройки идентичны окну Новая Заявка).',
        'Удалить Заявку можно открыв её для редактирования и нажав на кнопку Корзины в правом верхнем углу. Выйдет окно в котором необходимо подтверждение удаления Заявки.',
        ''
    ]

    const text_blog_bold = [
        '',
        '',
        '',
        '',
        '',
        ''
    ]

    return <>
        <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 20 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: { xs: 2, md: 5 } }}>
                <Grid item md={12} lg={6} sx={{ display: 'flex', justifyContent: 'right' }} >
                    <img alt='Online Бухгалтер' src={topImg} style={{ width: '100%', border: 5, marginLeft: 'auto', marginRight: 'auto' }} />
                </Grid>
                <Grid item md={12} lg={6}  >
                    <Typography variant="h1" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'}  >
                        Функции приложения "Online(Онлайн) Бухгалтер"
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Приложение "Online Бухгалтер" предлагает широкий набор функций, которые делают ведение бухгалтерского учета простым и удобным. С нашим приложением вы можете забыть о сложных и запутанных финансовых операциях. Все необходимые инструменты для создания документов, ведения учета и управления финансами находятся под рукой.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Основные функции сервиса включают в себя удобный ввод данных о реализации товаров и услуг, доступность к скачиванию и отправке документации в PDF формате: Счет на оплату, Накладную и Акт выполненных работ. Создать первичную документыцию можно за 2 минуты.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Создание документов и ведение учета становится легким и доступным каждому. Независимо от вашего опыта в бухгалтерии, вы сможете эффективно управлять финансами своего бизнеса, экономя время и ресурсы. Попробуйте наш сервис и убедитесь, что быть самому себе бухгалтером – это не сложно!
                    </Typography>
                </Grid>
            </Grid>

            <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                    <Grid item md={12} lg={12}  >
                        <Typography variant="h1" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                            Инструменты работы с бухгалтерией
                        </Typography>
                    </Grid>

                    <Grid item md={12} lg={8}  >
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            С приложением "Online Бухгалтер" вы получаете доступ к множеству инструментов, которые облегчают ведение бухгалтерского учета. Стать самому себе бухгалтером еще никогда не было так просто!
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            Для упрощения управления заявками, в системе предусмотрено группировка стадий Заявок по цветам.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            1. <span style={{ color: '#90caf9' }} >Голубым цветом</span> помечается Заявка, которая была только что создана и по ней нет необходимости выписки документов, обычно это продажи физическим лицам.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            2. <span style={{ color: '#fcbb42' }} >Желтым цветом</span> помечается Заявка, которая была только что создана и при создании документов был выбран только Счет на оплату, в дальнейшем можно сформировать Накладную или Акт.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            3. <span style={{ color: '#d32f2f' }} >Красным цветом</span> помечается Заявка, когда происходит формирование Накладной или Акта выполненных работ, после их подписания, необходимо выписать ЭСФ.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            4. <span style={{ color: '#2e7d32' }} >Зеленым цветом</span> помечается Заявка, по которая была отправлена ЭСФ.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            5.	Кнопка копирования Заявки. При нажатии создается Новая Заявка путем копирования текущей.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            6.	Кнопка получения оплаты. <span style={{ color: '#0000008a' }} >СЕРЫЙ</span> цвет означает нет оплаты, <span style={{ color: '#2e7d32' }} >ЗЕЛЕНЫЙ</span> была оплата. Цвет фиксируется при нажатии на данную кнопку.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            7.	Кнопка получения документов. После нажатия создаются необходимые документы (которые были отмечены во время создания Заявки) и когда появится список документов, их можно скачать в <span style={{ color: '#d32f2f' }} >PDF-формате</span>.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            8.	Создание новой Заявки производится путем нажатия на кнопку <span style={{ color: '#fcbb42' }} >"+ НОВАЯ ЗАЯВКА"</span>. После нажатия открывается окно Новой заявки. 
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    linkRef.current.scrollIntoView()
                                }}
                                sx={{ml: 1, fontSize: '1em', top: -2}}
                            > Подробнее ... </Link>
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            9.	Окно "Заявки" - содержит список всех созданных Заявок.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            10.	Окно "Расходы" - Позволяет вести расходы и группировать их по назначению. Подробнее ...
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            11.	Окно "Чат" - Позволяет обмениваться сообщениями и документами, доступно при подключении услуги по сопровождению Бухгалтерии. Подробнее ...
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            12.	Окно "Удаленные" - Содержит список удаленных Заявок.
                        </Typography>
                        <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                            13.	Окно "Отчеты" - Отображает информацию по реализации Товаров/Услуг. Подробнее ...
                        </Typography>

                    </Grid>
                    <Grid item md={12} lg={4} sx={{ m: 'auto' }} >
                        <Avatar variant="rounded" alt='Инструменты Онлыйн Бухгалтер' sx={{ bgcolor: '#ffe57f', width: { xs: '300px', sm: '400px' }, height: { xs: '300px', sm: '400px' }, m: 'auto', borderRadius: 3 }} src={img} />
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
                <Grid container spacing={5} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                    <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                        <Typography variant="h2" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                            Создать Счет, Накладную или Акт выполненых работ
                        </Typography>
                    </Grid>
                    <Grid ref={linkRef} item md={12} lg={12}  >
                        <SegmentsRounded title={"Новая Заявка"} text={text_blog} textBold={text_blog_bold} imgIndex={10} />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    </>
}

export default FunctionsOnlineBuhgalterPage;
