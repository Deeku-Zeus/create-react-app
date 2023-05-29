function ExpenseItem(props) {
    const itemlist = ["Tea","Coffee","Cigarette","Bun","Biscuit"]
    const item = itemlist[Math.floor(Math.random()*itemlist.length)]
    const cost = Math.floor(Math.random()*100)
    return (
        <div>
            <div>
                <p>**************</p>
                <p>{props.itemcount}</p>
                <p>{item}</p>
                <p>₹{cost}</p>
                <p>--------------</p>
            </div>
        </div>
    )
}

export default ExpenseItem