


export default function CartAmountToggle({amount, setDecrease, setIncrease}) {

    return (
        <div>
            <button className="btn btn-blue py-0 px-2" onClick={() => setDecrease()}>-</button>
            {`  ${amount}  `}
            <button className="btn btn-blue py-0 px-2" onClick={() => setIncrease()}>+</button>
        </div>
    )
}
