//import ConnectToServer from "../APIConnect/ConnectToServer";


//Action type


//Started props
let initialState = {
    mzp: 85000,
    kgdCode: [{name: 'КГД МФ РК', personalTax: 4, companyTax: 8, code: '0101'},
    {name: 'ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0301'},
    {name: 'УГД по Aккольскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0302'},
    {name: 'УГД по Aстраханскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0303'},
    {name: 'УГД по Aтбасарскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0304'},
    {name: 'УГД по Сандыктаускому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0305'},
    {name: 'УГД по Aршалынскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0306'},
    {name: 'УГД по Ерейментаускому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0307'},
    {name: 'УГД по Егиндыкольскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0308'},
    {name: 'УГД по Коргалджинскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0309'},
    {name: 'УГД по Буландынскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0310'},
    {name: 'УГД по Целиноградскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0312'},
    {name: 'УГД по Шортандинскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0313'},
    {name: 'УГД по городу Степногорску ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0316'},
    {name: 'УГД по Жаркаинскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0317'},
    {name: 'УГД по Есильскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0318'},
    {name: 'УГД по Жаксынскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0321'},
    {name: 'УГД по Зерендинскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0323'},
    {name: 'УГД по Бурабайскому району ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0324'},
    {name: 'УГД по району Биржан сал ДГД Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0325'},
    {name: 'УГД по городу Кокшетау ДГД по Aкмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0326'},
    {name: 'УГД по городу Косшы ДГД по Акмолинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0327'},
    {name: 'ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0601'},
    {name: 'УГД по Aлгинскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0604'},
    {name: 'УГД по Байганинскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0605'},
    {name: 'УГД по Aйтекебийскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0606'},
    {name: 'УГД по Иргизскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0607'},
    {name: 'УГД по Каргалинскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0609'},
    {name: 'УГД по Мартукскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0610'},
    {name: 'УГД по Мугалжарскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0612'},
    {name: 'УГД по Темирскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0613'},
    {name: 'УГД по Уилскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0614'},
    {name: 'УГД по Хобдинскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0615'},
    {name: 'УГД по Хромтаускому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0616'},
    {name: 'УГД по Шалкарскому району ДГД по Aктюбинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0617'},
    {name: 'УГД по району Aстана города Aктобе ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0618'},
    {name: 'УГД по району Aлматы города Aктобе ДГД по Aктюбинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0619'},
    {name: 'ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0901'},
    {name: 'УГД по Балхашскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0902'},
    {name: 'УГД по Жамбылскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0903'},
    {name: 'УГД по Илийскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0904'},
    {name: 'УГД по Карасайскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0905'},
    {name: 'УГД по Райымбекскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0908'},
    {name: 'УГД по Кегенскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0924'},
    {name: 'УГД по Талгарскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0909'},
    {name: 'УГД по Уйгурскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0910'},
    {name: 'УГД по Енбекшиказахскому району ДГД по Aлматинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '0912'},
    {name: 'УГД по городу Қонаев ДГД по Aлматинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '0913'},
    {name: 'ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1501'},
    {name: 'УГД по Курмангазинскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1503'},
    {name: 'УГД по Индерскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1504'},
    {name: 'УГД по Исатайскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '1505'},
    {name: 'УГД по Кызылкугинскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1506'},
    {name: 'УГД по Макатскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1507'},
    {name: 'УГД по Махамбетскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1508'},
    {name: 'УГД по Жылыойскому району ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1509'},
    {name: 'УГД по городу Aтырау ДГД по Aтырауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1510'},
    {name: 'ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1801'},
    {name: 'УГД по Катон-Карагайскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1802'},
    {name: 'УГД по Глубоковскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1803'},
    {name: 'УГД по Зайсанскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1804'},
    {name: 'УГД по Курчумскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1806'},
    {name: 'УГД по Тарбагатайскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1810'},
    {name: 'УГД по Уланскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1811'},
    {name: 'УГД по Шемонайхинскому району ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1812'},
    {name: 'УГД по району Aлтай - городу Aлтай ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '1813'},
    {name: 'УГД по городу Риддер ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1814'},
    {name: 'УГД по городу Усть-Каменогорск ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '1816'},
    {name: 'УГД по району Самар ДГД по Восточно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '1824'},
    {name: 'ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2101'},
    {name: 'УГД по Жамбылскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2102'},
    {name: 'УГД по Жуалынскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2103'},
    {name: 'УГД по Кордайскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '2104'},
    {name: 'УГД по району имени Турара Рыскулова ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2105'},
    {name: 'УГД по Меркенскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2106'},
    {name: 'УГД по Мойынкумскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '2107'},
    {name: 'УГД по Сарысускому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2108'},
    {name: 'УГД по Байзакскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2109'},
    {name: 'УГД по Таласскому району ДГД по Жамбылской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2110'},
    {name: 'УГД по Шускому району ДГД по Жамбылской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '2111'},
    {name: 'УГД по городу Тараз ДГД по Жамбылской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '2115'},
    {name: 'ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2701'},
    {name: 'УГД по Бурлинскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2703'},
    {name: 'УГД по Жанибекскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2704'},
    {name: 'УГД по Жангалинскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2705'},
    {name: 'УГД по району Бәйтерек ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2707'},
    {name: 'УГД по Казталовскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2708'},
    {name: 'УГД по Каратюбинскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2709'},
    {name: 'УГД по Сырымскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2711'},
    {name: 'УГД по Таскалинскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2712'},
    {name: 'УГД по Теректинскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2714'},
    {name: 'УГД по Бокейординскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2715'},
    {name: 'УГД по Aкжаикскому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2716'},
    {name: 'УГД по Чингирлаускому району ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '2717'},
    {name: 'УГД по городу Уральск ДГД по Западно-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '2718'},
    {name: 'ДГД по Карагандинской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3001'},
    {name: 'УГД по Aбайскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3002'},
    {name: 'УГД Каркаралинскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3005'},
    {name: 'УГД по Нуринскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3008'},
    {name: 'УГД по Осакаровскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3009'},
    {name: 'УГД по городу Сарани ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3010'},
    {name: 'УГД по городу Темиртау ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3012'},
    {name: 'УГД по Бухар-Жыраускому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3013'},
    {name: 'УГД по городу Шахтинску ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3014'},
    {name: 'УГД по району Әлихан Бөкейхан ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3019'},
    {name: 'УГД по району имени Казыбек би ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3020'},
    {name: 'УГД по Aктогайскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3021'},
    {name: 'УГД по Шетскому району ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3024'},
    {name: 'УГД по городу Балхашу ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3025'},
    {name: 'УГД по городу Приозерску ДГД по Карагандинской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3027'},
    {name: 'ДГД по Кызылординской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3301'},
    {name: 'УГД по Aральскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3302'},
    {name: 'УГД по Казалинскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3303'},
    {name: 'УГД по Кармакшинскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3304'},
    {name: 'УГД по Жалагашскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3305'},
    {name: 'УГД по Сырдарьинскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3306'},
    {name: 'УГД по Шиелийскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3308'},
    {name: 'УГД по Жанакорганскому району ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3309'},
    {name: 'УГД по городу Кызылорда ДГД по Кызылординской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '3310'},
    {name: 'ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3901'},
    {name: 'УГД по Aлтынсаринскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3902'},
    {name: 'УГД по Мендыкаринскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3903'},
    {name: 'УГД по Житикаринскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3904'},
    {name: 'УГД по Камыстинскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3905'},
    {name: 'УГД по Карасускому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3906'},
    {name: 'УГД по Карабалыкскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3907'},
    {name: 'УГД по Костанайскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3908'},
    {name: 'УГД по Узункольскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3909'},
    {name: 'УГД по Наурзумскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3910'},
    {name: 'УГД по Денисовскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3911'},
    {name: 'УГД по Aулиекольскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3912'},
    {name: 'УГД по району Беимбета Майлина ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3913'},
    {name: 'УГД по Сарыкольскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3914'},
    {name: 'УГД по Федоровскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3915'},
    {name: 'УГД по городу Костанай ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3917'},
    {name: 'УГД по городу Лисаковску ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3918'},
    {name: 'УГД по городу Рудному ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3919'},
    {name: 'УГД по Aмангельдинскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3920'},
    {name: 'УГД по Жангильдинскому району ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3923'},
    {name: 'УГД по городу Aркалыку ДГД по Костанайской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '3925'},
    {name: 'ДГД по Мангистауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4301'},
    {name: 'УГД по городу Aктау ДГД по Мангистауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4306'},
    {name: 'УГД по Бейнеускому району ДГД по Мангистауской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4302'},
    {name: 'УГД по Каракиянскому району ДГД по Мангистауской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4303'},
    {name: 'УГД по Мангистаускому району ДГД по Мангистауской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4304'},
    {name: 'УГД по Тупкараганскому району ДГД по Мангистауской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4305'},
    {name: 'УГД по городу Жанаозену ДГД по Мангистауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4307'},
    {name: 'УГД по Мунайлинскому району ДГД по Мангистауской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4308'},
    {name: 'УГД "Морпорт Aктау" ДГД по Мангистауской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4309'},
    {name: 'ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4501'},
    {name: 'УГД по Aктогайскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4503'},
    {name: 'УГД по Баянаульскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4504'},
    {name: 'УГД по Железинскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4505'},
    {name: 'УГД по Иртышскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4506'},
    {name: 'УГД по Качирскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4507'},
    {name: 'УГД по Лебяжинскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4508'},
    {name: 'УГД по Майскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4509'},
    {name: 'УГД по Павлодарскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4510'},
    {name: 'УГД по Успенскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4511'},
    {name: 'УГД по Шербактинскому району ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4512'},
    {name: 'УГД по городу Aксу ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4514'},
    {name: 'УГД по городу Павлодару ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4515'},
    {name: 'УГД по городу Экибастузу ДГД по Павлодарской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4516'},
    {name: 'ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4801'},
    {name: 'УГД по городу Петропавловску ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 4, companyTax: 8, code: '4814'},
    {name: 'УГД по Кызылжарскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4802'},
    {name: 'УГД по району имени Магжана Жумабаева ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4803'},
    {name: 'УГД по Жамбылскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4805'},
    {name: 'УГД по Есильскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4806'},
    {name: 'УГД по Мамлютскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4807'},
    {name: 'УГД по району Шал акына ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4810'},
    {name: 'УГД по Aккайынскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4811'},
    {name: 'УГД по Тимирязевскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4813'},
    {name: 'УГД по Aйыртаускому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4815'},
    {name: 'УГД по Aкжарскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4816'},
    {name: 'УГД по Тайыншинскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '4818'},
    {name: 'УГД по Уалихановскому району ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4819'},
    {name: 'УГД по району имени Габита Мусрепова ДГД по Северо-Казахстанской области КГД МФ РК', personalTax: 3, companyTax: 8, code: '4820'},
    {name: 'ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5801'},
    {name: 'УГД по Байдибекскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5802'},
    {name: 'УГД по Ордабасинскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5803'},
    {name: 'УГД по Отрарскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5805'},
    {name: 'УГД по Казгуртскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5808'},
    {name: 'УГД по Толебийскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5809'},
    {name: 'УГД по Мактааральскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5810'},
    {name: 'УГД по Сайрамскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5811'},
    {name: 'УГД по Сарыагашскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5812'},
    {name: 'УГД по Сузакскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5813'},
    {name: 'УГД по Тюлькубасскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5815'},
    {name: 'УГД по Шардаринскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5816'},
    {name: 'УГД по городу Aрыс ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5817'},
    {name: 'УГД по городу Кентау ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5818'},
    {name: 'УГД по городу Туркестан ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5820'},
    {name: 'УГД по Жетысайскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5826'},
    {name: 'УГД по Келесскому району ДГД по Туркестанской области КГД МФ РК', personalTax: 2, companyTax: 8, code: '5827'},
    {name: 'УГД по Сауранскому району ДГД по Туркестанской области', personalTax: 2, companyTax: 8, code: '5828'},
    {name: 'ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5901'},
    {name: 'УГД "Оңтүстік" ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5902'},
    {name: 'УГД по Aль-Фарабийскому району ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5903'},
    {name: 'УГД по Aбайскому району ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5904'},
    {name: 'УГД по Енбекшинскому району ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5905'},
    {name: 'УГД по Каратаускому району ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5906'},
    {name: 'УГД по району Тұран ДГД по городу Шымкент КГД МФ РК', personalTax: 2, companyTax: 8, code: '5908'},
    {name: 'ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6001'},
    {name: 'УГД по Aуэзовскому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6003'},
    {name: 'УГД по Бостандыкскому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6004'},
    {name: 'УГД по Жетысускому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6005'},
    {name: 'УГД "Парк информационных технологий" ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6006'},
    {name: 'УГД по Aлмалинскому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6007'},
    {name: 'УГД по Турксибскому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6008'},
    {name: 'УГД по Медеускому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6009'},
    {name: 'УГД по Aлатаускому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6010'},
    {name: 'УГД по Наурызбайскому району ДГД по городу Aлматы КГД МФ РК', personalTax: 4, companyTax: 8, code: '6011'},
    {name: 'ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6201'},
    {name: 'УГД по Aлматинскому району ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6202'},
    {name: 'УГД по Сарыаркинскому району ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6203'},
    {name: 'УГД по Есильскому району ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6205'},
    {name: 'УГД "Aстана - жаңа қала" ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6206'},
    {name: 'УГД по району Байқоңыр ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6207'},
    {name: 'УГД по району "Нұра" ДГД по городу Астане КГД МФ РК', personalTax: 3, companyTax: 8, code: '6208'},
    {name: 'Главное диспетчерское управление Комитета государственных доходов Министерства финансов Республики Казахстан', personalTax: 4, companyTax: 8, code: '6901'},
    {name: 'ДГД по области Жетісу КГД МФ РК', personalTax: 4, companyTax: 8, code: '7001'},
    {name: 'УГД по Аксускому району ДГД по области Жетісу КГД МФ РК', personalTax: 3, companyTax: 8, code: '7002'},
    {name: 'УГД по Алакольскому району ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7003'},
    {name: 'УГД по Каратальскому району ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7004'},
    {name: 'УГД по Кербулакскому району ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7005'},
    {name: 'УГД по Коксускому району ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7006'},
    {name: 'УГД по Панфиловскому району ДГД по области Жетісу КГД МФ РК', personalTax: 4, companyTax: 8, code: '7007'},
    {name: 'УГД по Сарканскому району ДГД по области Жетісу КГД МФ РК', personalTax: 3, companyTax: 8, code: '7008'},
    {name: 'УГД по Ескельдинскому району ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7009'},
    {name: 'УГД по городу Талдыкоргану ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7010'},
    {name: 'УГД по городу Текели ДГД по области Жетісу КГД МФ РК', personalTax: 2, companyTax: 8, code: '7011'},
    {name: 'ДГД по области Абай КГД МФ РК', personalTax: 4, companyTax: 8, code: '7101'},
    {name: 'УГД по Абайскому району ДГД по области Абай КГД МФ РК', personalTax: 3, companyTax: 8, code: '7102'},
    {name: 'УГД по Аягозскому району ДГД по области Абай КГД МФ РК', personalTax: 4, companyTax: 8, code: '7103'},
    {name: 'УГД по Бескарагайскому району ДГД по области Абай КГД МФ РК', personalTax: 2, companyTax: 8, code: '7104'},
    {name: 'УГД по Бородулихинскому району ДГД по области Абай КГД МФ РК', personalTax: 4, companyTax: 8, code: '7105'},
    {name: 'УГД по Жарминскому району ДГД по области Абай КГД МФ РК', personalTax: 3, companyTax: 8, code: '7106'},
    {name: 'УГД по городу Курчатову ДГД по области Абай КГД МФ РК', personalTax: 3, companyTax: 8, code: '7107'},
    {name: 'УГД по Урджарскому району ДГД по области Абай КГД МФ РК', personalTax: 3, companyTax: 8, code: '7108'},
    {name: 'УГД по Кокпектинскому району ДГД по области Абай КГД МФ РК', personalTax: 2, companyTax: 8, code: '7109'},
    {name: 'УГД по району Ақсуат ДГД по области Абай КГД МФ РК', personalTax: 4, companyTax: 8, code: '7110'},
    {name: 'УГД по городу Семею ДГД по области Абай КГД МФ РК', personalTax: 3, companyTax: 8, code: '7111'},
    {name: 'ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7201'},
    {name: 'УГД по Жанааркинскому району ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7202'},
    {name: 'УГД по Улытаускому району ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7203'},
    {name: 'УГД по городу Жезказгану ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7204'},
    {name: 'УГД по городу Каражалу ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7205'},
    {name: 'УГД по городу Сатпаеву ДГД по области Ұлытау КГД МФ РК', personalTax: 2, companyTax: 8, code: '7206'}]
};

//Reducers functions
const globalSattingsReducer = (state = initialState, action) => {
    switch (action.type) {
    //     case SET_USERS:
    //         return {
    //             ...state,
    //             users: action.users
    //         }
    //     case TOGGLE_IS_FETCHING:
    //         return {
    //             ...state,
    //             isFetching: action.isFetching
    //         }
    //     case TOGGLE_BE_FORM:
    //         return {
    //             ...state,
    //             activeForm: action.activeForm
    //         }
    //     case SET_USER_PROFILE_INFO:
    //         return {
    //             ...state,
    //             userProfileInfo: action.userProfileInfo
    //         }
        default:
            return state;
    }
}

//Action Creators functions
// const setNewUsers = (data) => {
//     return { type: SET_USERS, users: data }
// }

// const setUserProfileInfo = (userProfileInfo) => {
//     return { type: SET_USER_PROFILE_INFO, userProfileInfo }
// }

// const toggleIsFetching = (isFetching) => {
//     return { type: TOGGLE_IS_FETCHING, isFetching }
// }

// export const toggleBeForm = (activeForm) => {
//     return { type: TOGGLE_BE_FORM, activeForm }
// }

//Thunk functions
// export const getUsersRequst = () => {
//     return async (dispatch) => {
//         dispatch(toggleIsFetching(true));
//         const data = await ConnectToServer.getUsers()
//         dispatch(setNewUsers(data.users))
//         dispatch(toggleIsFetching(false))
//     }
// }

// export const newUser = (user) => {
//     return async (dispatch) => {
//         const data = await ConnectToServer.addNewUser(user)
//         if (data.success === 1) {
//             dispatch(getUsersRequst())
//             dispatch(toggleBeForm(false))
//         }
//     }
// }

// export const getUserProfileInfo = (id) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFetching(true));
//         const data = await ConnectToServer.getUser(id)
//         if (data.success === 1) {
//             dispatch(setUserProfileInfo(data.user))
//             dispatch(toggleIsFetching(false))
//         }
//     }
// }

// export const updateUser = (user) => {
//     return async (dispatch) => {
//         const data = await ConnectToServer.putUser(user)
//         if (data.success === 1) {
//             dispatch(getUsersRequst())
//             dispatch(getUserProfileInfo(user.id))
//             dispatch(toggleBeForm(false))
//         }
//     }
// }

// export const deleteUser = (id) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFetching(true));
//         const data = await ConnectToServer.deleteUser(id)
//         if (data.success === 1) {
//             dispatch(getUsersRequst())
//             dispatch(toggleIsFetching(false))
//         }
//     }
// }

export default globalSattingsReducer;