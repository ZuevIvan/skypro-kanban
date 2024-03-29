// eslint-disable-next-line react/prop-types
import Card from "../Card/Card";

function Column({title, cardList}) {
    // Компонент возвращает JSX , который представляет собой HTML-разметку
    return (<div className="main__column column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
        {cardList.map((card) => <Card theme={card.theme} cardTitle={card.title} date={card.date} key={card.id}/>)}
        {/* <Card theme={"Web design"} cardTitle={"Новая задача"}/>
    
        <Card theme={"Research"} cardTitle={"Новая задача"}/>
    
        <Card theme={"Web design"} cardTitle={"Новая задача"}/>
        
        <Card theme={"Research"} cardTitle={"Новая задача"}/>
        
        <Card theme={"Copywriting"} cardTitle={"Новая задача"}/> */}
    </div>
</div>)
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default  Column;