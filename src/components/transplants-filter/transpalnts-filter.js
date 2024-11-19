const TransplantsFilter = ()=> {
    return(
        <form>
            <input id='all' type='checkbox'/>
            <label htmlFor='all'>Все</label>

            <input id='without' type='checkbox'/>
            <label htmlFor='without'>Без пересадок</label>

            <input id='one' type='checkbox'/>
            <label htmlFor='one'>1 пересадка</label>

            <input id='two' type='checkbox'/>
            <label htmlFor='two'>2 пересадки</label>

            <input id='three' type='checkbox'/>
            <label htmlFor='three'>3 пересадки</label>
        </form>
    )
}

export default TransplantsFilter