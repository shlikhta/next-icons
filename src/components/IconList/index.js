export const IconList = ({list}) => {
    if (!list && !list.length) return null;

    return <div className='icon-list'>
        {list.map((item) => {
            return <div key={item.id} className='icon-list__item' title={item.name}>{item.icon}</div>
        })}
    </div>
}
