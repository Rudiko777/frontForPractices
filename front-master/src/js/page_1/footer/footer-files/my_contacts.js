import React from "react";

class MyContacts extends React.Component{
    render() {
        return(
            <div className={"container"}>
                <address>
                    <p>Данный сайт разработал студент РТУ МИРЭА Чакрян Р.А.</p>
                    <p>Номер телефона: <a href={"tel:89187777777"}>+7(777)-777-77-77</a></p>
                    <p>Эл. почта: <a href={"mailto:chakryan_rudik@mail.ru"}>chakryan_rudik@mail.ru</a></p>
                </address>
            </div>
        )
    }
}


export default MyContacts