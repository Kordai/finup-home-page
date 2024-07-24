import React, { useRef } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import topImg from '../../../Img/levels.jpg'
import SegmentsRounded from '../../Components/SegmentsRounded';
import ListSettings from '../../Components/ListSettings';

const LevelsOnlineBuhgalterPage = () => {

    const linkRef = [useRef(null), useRef(null), useRef(null)]

    const text_blog = [
        {
            text: [
                'Раздел "Окно Расходы" предназначен для учета всех ваших расходов. Здесь вы можете легко вносить и отслеживать все финансовые операции, связанные с затратами, что позволит вам контролировать бюджет и планировать будущие расходы.',
                'Сортировка Расходов по дате.',
                'Pie Chart (пай-чарт) Расходов + Итоговая сумма расходов за период.',
                'Скачать документ, который был загружен во время создания.',
                'Редактировать запись, доступно только для Зарплаты.',
                'Удалить запись по Расходам.',
                'Создать новую запись Расходов.',
                'Создание новой записи происходит по нажатию кнопки " + ". После нажатия открывается окно в котором необходимо выбрать: Дату, Группу расходов (см. Справочники/Группа расходов), указать Сумму и при необходимости добавить фото документы.',
                'Все расходы сортируются по дате.',
                ''
            ],
            text_bold: [
                '',
                '1. ',
                '2. ',
                '3. ',
                '4. ',
                '5. ',
                '6. ',
                '',
                '',
            ],
            titel: 'Окно "Расходы"',
            img: 12,
            ref: linkRef[0]
        },
        {
            text: [
                'Окно "Чата" предоставляет возможность оперативного общения с клиентами и сотрудниками. Этот раздел интегрирован с другими инструментами программы, что позволяет быстро решать вопросы, связанные с бухгалтерией и финансовыми операциями. Есть возможность получить или отправить документы.',
                'Отправить Сообщение.',
                'Отправить Файл/Документы',
                ''
            ],
            text_bold: [
                '',
                '1. ',
                '2. ',
                '',
            ],
            titel: 'Окно "Чат"',
            img: 11,
            ref: linkRef[1]
        },
        {
            text: [
                'Раздел "Окно Статистики продаж" предоставляет аналитические инструменты для отслеживания и анализа продаж. Здесь вы найдете все необходимые данные для понимания динамики продаж и принятия обоснованных бизнес-решений.',
                'Доступна сортировка продаж на: Сегодня, Неделя, Месяц, Год.',
                'Также окно содержит суммарную информацию по реализации в разрезе клиентов.',
                ''
            ],
            text_bold: [
                '',
                '',
                '',
                '',
            ],
            titel: 'Окно "Статистики продаж"',
            img: 14,
            ref: linkRef[2]
        },
    ]

    return <>
        <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 20 } }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: { xs: 2, md: 5 } }}>
                <Grid item md={12} lg={6}  >
                    <img alt='Online Бухгалтер' src={topImg} style={{ width: '100%', border: 5, marginLeft: 'auto', marginRight: 'auto' }} />
                </Grid>
                <Grid item md={12} lg={6}  >
                    <Typography variant="h1" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'}  >
                        Основные разделы программы "Online(Онлайн) Бухгалтер"
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Программа "Online Бухгалтер" включает несколько ключевых разделов, которые помогают эффективно управлять бухгалтерским учетом, финансовыми операциями и взаимодействием с клиентами.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Первое Окно для работы - "Список Заявок", в этом разделе вы можете просматривать и управлять всеми заявками, поступающими в вашу компанию. Окно "Список Заявок" предоставляет удобный интерфейс для отслеживания статуса заявок, их обработки и выполнения.
                    </Typography>
                    <Typography color={'#5d5d5d'} variant="body1" fontSize={{ xs: '0.8em', md: '1.1em' }} gutterBottom sx={{ textIndent: '5%', px: { xs: 2, md: 0 }, mt: 1 }} >
                        Дополнительный функционал для управления вашим Бизнесом:
                    </Typography>

                    <ListSettings listItem={[
                        {
                            title: 'Окно "Расходы"',
                            ref: linkRef[0]
                        },
                        {
                            title: 'Окно "Чат"',
                            ref: linkRef[1]
                        },
                        {
                            title: 'Окно "Статистики продаж"',
                            ref: linkRef[2]
                        },
                    ]} />
                </Grid>
            </Grid>

            <Container maxWidth="xl" sx={{ mt: 5, p: { xs: 'default', md: 0 } }}>
                <Grid container spacing={5} sx={{ justifyContent: 'center', borderBottom: 2, borderColor: '#fcbb42', borderBottomStyle: 'inset', pb: 3 }}>
                    <Grid item md={12} lg={12} sx={{ justifyContent: 'center' }} >
                        <Typography variant="h2" fontStyle={'italic'} fontSize={{ xs: '1.5em', md: '2em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
                            Ведение расходов и статистика в Online(Онлайн) Бухгалтерии
                        </Typography>
                    </Grid>
                    {text_blog.map((item) => (
                        <Grid ref={item.ref} item md={12} lg={12}  >
                            <SegmentsRounded title={item.titel} text={item.text} textBold={item.text_bold} imgIndex={item.img} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    </>
}

export default LevelsOnlineBuhgalterPage;
