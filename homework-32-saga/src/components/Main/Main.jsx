import styles from "./Main.module.css"

const Main = () => {
    return (
        <section className={styles.section__info}>
            <div className={styles.section__info_heading}>
                <h2 className={styles.section__info_title}>Мои навыки</h2>
                <p>Уверенно владею JavaScript, включая работу с:</p>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Массивами (методы map, filter, find и т. д.);</li>
                    <li className={styles.section__info_list_item}>Объектами и их свойствами;</li>
                    <li className={styles.section__info_list_item}>Функциями (включая колбэки и замыкания);</li>
                    <li className={styles.section__info_list_item}>DOM-манипуляциями (добавление, удаление, изменение элементов).</li>
                    <li className={styles.section__info_list_item}>Изучаю и практикую работу с Promise для работы с асинхронными операциями.</li>
                </ul>
            </div>
            <div className={styles.section__info_heading}>
                <h2 className={styles.section__info_title}>Разработка интерфейсов</h2>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Уверенно использую HTML и CSS для создания семантически правильных и адаптивных страниц.</li>
                    <li className={styles.section__info_list_item}>Использую CSS Modules для изоляции стилей в компонентах.</li>
                    <li className={styles.section__info_list_item}>Владею библиотекой Bootstrap для ускорения создания UI, включая адаптивные сетки и готовые
                        компоненты.
                    </li>
                    <li className={styles.section__info_list_item}>Понимаю основы адаптивного дизайна и умею подгонять интерфейсы под разные устройства.</li>
                </ul>
            </div>
            <div className={styles.section__info_heading}>
                <h2 className={styles.section__info_title}>Мои проекты</h2>
                <p> Учебный проект: Карусель</p>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Использовал чистый HTML, CSS и JavaScript для создания интерактивной карусели.</li>
                    <li className={styles.section__info_list_item}>Реализовал функционал переключения слайдов (вручную и автоматически), индикаторы текущего
                        слайда, анимацию.
                    </li>
                </ul>
                <p> Адаптивный лендинг</p>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Разработал одностраничный сайт с использованием Bootstrap.</li>
                    <li className={styles.section__info_list_item}>Настроил адаптивность для планшетов и мобильных устройств.
                    </li>
                    <li className={styles.section__info_list_item}>Добавил модульные стили для улучшения читаемости и поддержки проекта.
                    </li>
                </ul>
                <p> Практические задания</p>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Реализовал задачи с использованием промисов, включая имитацию загрузки данных и работу с
                        асинхронными запросами.
                    </li>
                    <li className={styles.section__info_list_item}>Экспериментировал с созданием динамических элементов в DOM и передачей данных между страницами.
                    </li>
                </ul>
            </div>
            <div className={styles.section__info_heading}>
                <h2 className={styles.section__info_title}>Работа с React</h2>
                <p>Изучил базовые принципы работы с React:</p>
                <ul className={styles.section__info_list}>
                    <li className={styles.section__info_list_item}>Создание компонентов;</li>
                    <li className={styles.section__info_list_item}>Использование роутинга с помощью react-router-dom (настройка маршрутов, передача параметров,
                        обработка 404).
                    </li>
                    <li className={styles.section__info_list_item}>Использование хуков (useState, useEffect, useNavigate, useParams).</li>
                    <li className={styles.section__info_list_item}>Разрабатывал проекты с применением динамического взаимодействия между компонентами.</li>
                </ul>
            </div>
        </section>
    )
}
export default Main;